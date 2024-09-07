import React, { useState } from 'react'
import { Link } from "react-router-dom";
import avatar from '../assets/p-remove.png';
import {Toaster} from "react-hot-toast";
import {useFormik} from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert'

import styles from '../styles/Username.module.css'

const Profile = () => {
 
  const [file,setFile] = useState();

  const formik = useFormik({
    initialValues :{
      firstname:'',
      lastname:'',
      mobile:'',
      email: '',
      address:'',
    },
    validate : profileValidation,
    //We want to validate password input button only we click on submit button
    validateOnChange : false,
    validateOnBlur : false,
    //This is the function that gets executed when the form is submitted. It takes the form values as an argument 
    onSubmit : async values =>{
      values = await Object.assign(values, {profile : file || ''});
      console.log(values);
    }
  });

  /** format does not support  file upload so we need to create this handler*/
  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }



  return (
    <>
       {/*reverseOrder to false means that newer toasts will be displayed on top of older ones. If you set it to true, the order will be reversed, and newer toasts will appear below older ones. */}
       <Toaster className="top-center" reverseOrder={false}></Toaster>
       <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass_register}>
            <div className='title flex flex-col items-center'>
              <h3 className='font-bold text-5xl text-gray-100'>
                Profile
              </h3>
              <span className='py-4 text-xl w-2/3 text-center   text-gray-300'>
                You can update the details
              </span>
                <form className='py-1' onSubmit={formik.handleSubmit}> 
                  <div className='profile flex justify-center py-4'>
                    <label htmlFor='profile'>
                      <img src={file || avatar} className={styles.profile}alt="Avatar"></img>
                    </label>
                    <input 
                      onChange={onUpload}
                      type='file'
                      id = 'profile'
                      name = 'profile'
                    />
                    </div>
                  <div className='textBox flex flex-col items-center'>
                    <div className='name flex w-5/6 gap-10'>
                      <input 
                       {...formik.getFieldProps('firstname')} 
                       className={styles.textBox}
                       type="text"
                       placeholder='firstname'
                      />
                      <input 
                       {...formik.getFieldProps('lastname')} 
                       className={styles.textBox}
                       type="text"
                       placeholder='lastname'
                      />
                    </div>
                    <div className='name flex w-5/6 gap-10'>
                      <input 
                       {...formik.getFieldProps('mobile')} 
                       className={styles.textBox}
                       type="mobile"
                       placeholder='mobile'
                      />
                      <input 
                        {...formik.getFieldProps('email')} 
                        className={styles.textBox}
                        type="email"
                        placeholder='Enter Your email'
                      />
                    </div>
                    <div className='address w-[83%]'>
                      <input 
                          {...formik.getFieldProps('address')} 
                          className={styles.textBox}
                          type="address"
                          placeholder='Address'
                        />
                    </div>
                  <button className={styles.btn} type="submit">Update</button>
                  </div>
                  <div className='text-center py-4 text-gray-200'>come back later? &nbsp;<Link className="text-red-500" to="/">  Log out</Link></div>
                </form>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Profile
