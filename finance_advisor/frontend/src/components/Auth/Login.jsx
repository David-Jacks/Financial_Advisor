import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div id="login_main">
        <div className="head">
            <h2>Financial Data Collection</h2>
            <p>👌🏽Input accurate data to get improved and precise advice from finance advisor 👌🏽</p>
        </div> 
        <form action="" className="login_form">
            <div className="one">
                <label htmlFor="">Full Name</label>
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Age</label>
                <input type="number" />
            </div>
            <div className="one">
                <label htmlFor="">Education Level</label>
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Occupation</label>
                <select name="" id="">
                    <option value="">Select your occupation</option>
                </select>
                {/* <input type="text" /> */}
            </div>
            <div className="one">
                <label htmlFor="">Annual Salary</label>
                <input type="number" />
            </div>
            <div className="one">
                <label htmlFor="">Years of Experience</label>
                <input type="number" />
            </div>
            <div className="one">
                <label htmlFor="">Gender</label>
                <select name="" id="">
                    <option value="">Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="one">
                <label htmlFor="">Number of children</label>
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Financial History</label>
                <select name="" id="">
                    <option value="">Choose</option>
                </select>
            </div>
            <div className="terms">
                <input type='checkbox'/>
                <label htmlFor="">I accept terms and conditions</label>
                <Link>read our terms and conditions</Link>
            </div>
            <div className="terms">
                <Link to={"/results"} className='btn'>Get Advice</Link>
            </div>
        </form>
    </div>
  )
}

export default Login