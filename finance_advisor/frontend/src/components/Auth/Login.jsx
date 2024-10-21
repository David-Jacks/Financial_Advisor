import React from 'react'

function Login() {
  return (
    <div id='login_main'>
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
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Annual Salary</label>
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Years of Experience</label>
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Gender</label>
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Number of children</label>
                <input type="text" />
            </div>
            <div className="one">
                <label htmlFor="">Financial History</label>
                <input type="text" />
            </div>

        </form>
    </div>
  )
}

export default Login