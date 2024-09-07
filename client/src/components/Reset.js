import React from 'react'
import {Toaster} from "react-hot-toast";
import {useFormik} from 'formik';
import { resetPasswordValidation } from '../helper/validate';


import styles from '../styles/Username.module.css'

const Reset = () => {
  const formik = useFormik({
    initialValues :{
      password : '',
      confirm_pwd: ''
    },
    validate : resetPasswordValidation,
    //We want to validate password input button only we click on submit button
    validateOnChange : false,
    validateOnBlur : false,
    //This is the function that gets executed when the form is submitted. It takes the form values as an argument 
    onSubmit : async values =>{
      console.log(values);
    }
  });
  return (
    <>
       {/*reverseOrder to false means that newer toasts will be displayed on top of older ones. If you set it to true, the order will be reversed, and newer toasts will appear below older ones. */}
       <Toaster className="top-center" reverseOrder={false}></Toaster>
       <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
              <h3 className='font-bold text-5xl text-gray-100'>
                Reset Password
              </h3>
              <span className='py-4 text-xl w-2/3 text-center   text-gray-300'>
                Enter Here New Password
              </span>
                <form className='py-8' onSubmit={formik.handleSubmit}> 
                  <div className='textBox flex flex-col items-center'>
                    <input 
                     {...formik.getFieldProps('password')} 
                     className={styles.textBox}
                     type="text"
                     placeholder='New password'
                    />
                    <input 
                     {...formik.getFieldProps('confirm_pwd')} 
                     className={styles.textBox}
                     type="text"
                     placeholder='Confirm password'
                    />
                  <button className={styles.btn} type="submit">Sign In</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Reset
