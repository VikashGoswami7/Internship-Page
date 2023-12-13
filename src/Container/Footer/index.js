import React from 'react'
import callIcon from '../../Images/call.png'
import homeIcon from '../../Images/home.png'
import mailIcon from '../../Images/mail.png'
import './index.css'

const index = () => {
    return (


        <div className='footer'>

            <div className='first'>
                <div className='list'>
                    <ul>
                        <li className='nav'><a href="/">About Us</a></li>
                        <li className='nav'><a href="/">Contact Us</a></li>
                        <li className='nav'><a href="/">Privacy Policy</a></li>
                        <li className='nav'><a href="/">Careers</a></li>
                        <li className='nav'><a href="/">Blogs</a></li>
                    </ul>
                </div>

            </div>





            <div className='third'>

                <div className='contact1'>
                    <img src={mailIcon} alt='mail' />
                    <a className='con' href='/'>support@email.com</a>
                </div>

                <div className='contact1'>
                    <img src={callIcon} alt='call' />
                    <a className='con' href='/'>INDIA +91:9876543210</a>
                </div>

                <div className='contact1'>
                    <img src={homeIcon} alt='home' />
                    <a className='con' href='/'>INDIA</a>
                </div>
            </div>

            <div className='copyright'><span>2023 @VikashGoswami</span></div>
        </div>





    )
}

export default index;

