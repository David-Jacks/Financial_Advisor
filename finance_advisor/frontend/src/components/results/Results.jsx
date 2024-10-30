import React from 'react'
import { Link } from 'react-router-dom'

function Results() {
  return (
  <div id="results_main">
    <h2>Financial Advisory Report 💼</h2>
    <h3>Hello, David Jackson 👋</h3>  
    <p>
      Thank you for trusting our financial advisory system. Based on the details you've provided and our tailored model's predictions, here is your personalized financial advice:
    </p>
    <h3>Financial Status Overview</h3>
    <ul>
        <li>Monthly Income: $[Monthly Income Prediction]</li>
        <li>Credit Score: [Credit Score Prediction]</li>
        <li>Savings Ratio: [Savings Percentage]% of your income is allocated to savings.</li>
    </ul>


    <p>
    Our analysis indicates that you're currently in a [Financial Status Prediction] state, which is determined by assessing your income, debts, and spending habits. This status suggests that you are [Financial Risk Category (e.g., "financially stable," "in need of improvements")].
    </p>

    <h2>
    Tailored Recommendations 🔑
    </h2>

    <ol>
        <li>
            <h3> Vehicle Purchase Advice</h3>
            <p>Based on your financial situation and credit score, it is [Recommendation: "advisable" or "not advisable"] to proceed with purchasing a car at this time.
            If you choose to purchase, consider a budget within $[Recommended Budget] to ensure financial security.</p>
        </li>
        <li>
            <h3>Credit Loan Predictions</h3>
            <p>Our prediction model estimates that you [will/will not] qualify for a loan with a favorable interest rate.
            Recommended loan amount: $[Loan Prediction].
            Estimated interest rate: [Interest Rate Prediction]%.</p>
        </li>
        <li>
            <h3>Monthly Expenses Management</h3>
            <p>Your current expenses amount to $[Expenses Prediction], which represents [Expense to Income Ratio]% of your monthly income.
            You may want to reduce discretionary spending in categories such as [Top Expense Categories] to improve your financial health.</p>
        </li>
    </ol>


    <h2>Actionable Steps 📝</h2>
    <p>
    [Tip 1 based on prediction] (e.g., "Consider increasing your savings rate to 20% to prepare for future investments.")
    [Tip 2 based on prediction] (e.g., "Evaluate the need for a car and ensure it aligns with your long-term financial goals.")
    [Tip 3 based on prediction] (e.g., "Review your current credit score and explore opportunities to improve it over the next 6 months.")
    </p>
    <div className="seek_another_div">
      <Link to={"/login"} className="seek_another">
        seek another
      </Link>
      <Link to={"/"} className="seek_another">
        Home
      </Link>
    </div>
  </div>
  )
}

export default Results