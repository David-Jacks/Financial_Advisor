import React from 'react'
import { redirect, Navigate, Link } from 'react-router-dom'

function Dashboard() {
  const handleLogin = () =>{
    Navigate('/login');
  }
  return (
    <div id="dash_main">
        <div className="Landing">
          <div className="">
            <h1>Welcome</h1>
            <h2> to Finance advisor</h2>
          </div>
           <p>Need personalized advice?</p>
           <h4>💰 Our new Finance Advisor can help! Provide accurate information about your income, expenses, and goals, and we'll give you tailored tips to reach your financial dreams.  Start planning your future today!</h4>

           <Link to={"/login"}>
           <button>lets Go!!</button>
           </Link>
        </div>
    </div>
  )
}

export default Dashboard