import React from 'react'
import {Toaster} from "react-hot-toast";


import styles from '../styles/Username.module.css'

const Recovery = () => {
  return (
    <>
       {/*reverseOrder to false means that newer toasts will be displayed on top of older ones. If you set it to true, the order will be reversed, and newer toasts will appear below older ones. */}
       <Toaster className="top-center" reverseOrder={false}></Toaster>
       <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
              <h3 className='font-bold text-5xl text-gray-100'>
                Recovery
              </h3>
              <span className='py-4 text-xl w-2/3 text-center   text-gray-300'>
                Enter OTP to recover Password
              </span>
                <form className='py-3'> 
                  <div className='textBox flex flex-col items-center'>
                    <div className='input text-center'>
                      <span className='py-4 text-sm text-left   text-gray-500'>Enter 6 digits OTP to Your Email  Address</span>
                      <input 
                       className={styles.textBox}
                       type="password"
                       placeholder='OTP'
                      />
                    </div>
                    
                  <button className={styles.btn} type="submit">Sign In</button>
                  </div>
                  <div className='text-center py-4 text-gray-200'>Can't Get OTP ?<button className="text-red-500" to="/recovery">Resend Now</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Recovery
