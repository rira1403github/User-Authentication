import React, { useEffect } from 'react'
import { Link,useNavigate } from "react-router-dom";
import avatar from '../assets/p-remove.png';
import {Toaster} from "react-hot-toast";
import {useFormik} from 'formik';
import { usernameValidate } from '../helper/validate';
import { useAuthStore } from '../store/store';


import styles from '../styles/Username.module.css'

const Username = () => {
  
  const navigate = useNavigate();
  const setUsername = useAuthStore( state => state.setUsername);

  const formik = useFormik({
    initialValues :{
      Username : 'palk@123'
    },
    validate: usernameValidate,      
    //We want to validate user input button only we click on submit button
    validateOnChange : false,
    validateOnBlur : false,
    //This is the function that gets executed when the form is submitted. It takes the form values as an argument 
    onSubmit : async values =>{
      setUsername(values.Username)
      navigate('/password');
    }
  });
  return (
    <>
       <Toaster className="top-center" reverseOrder={false}></Toaster>
       <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
              <h3 className='font-bold text-5xl text-gray-100'>
                Explore More 
              </h3>
              <span className='py-4 text-xl w-2/3 text-center   text-gray-300'>
                Explore More By connecting with Us
              </span>
                <form className='py-1' onSubmit={formik.handleSubmit}> 
                  <div className='profile flex justify-center py-4'>
                    <img src={avatar} className={styles.profile}alt="Avatar"></img>
                  </div>
                  <div className='textBox flex flex-col items-center'>
                    <input 
                    //  getFieldProps('username'): This function is asking Formik to generate the required properties for the form field with the name 'username'. It establishes a connection between this input field and Formik's state.
                    //  ...: The spread operator (...) is used to take all the properties returned by getFieldProps and spread them onto the HTML input element.
                     
                     
                     {...formik.getFieldProps('username')} 
                     className={styles.textBox}
                     type="text"
                     placeholder='username'
                    />
                  <button className={styles.btn} type="submit">Let's Go</button>
                  </div>
                  <div className='text-center py-4 text-gray-200'>Not a Member <Link className="text-red-500" to="/register">Register  here</Link></div>
                </form>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Username
