import React from 'react'
import style from "@/styles/lms/LearnerUI/profile.module.css";

const Billing = () => {
  return (
    <div className={style.billingContainer}>
        <p className={style.billingHeading}>Billing</p>
        <div>
            <p className={style.billingSubHeading}>Your Credit Card</p>
            <div className={style.billingInnerDiv}>
                <span className={style.billingText}>
                    You do not have a stored credit card.
                </span>
                <button>ADD CARD</button>
            </div>
            <div>
                <p className={style.billingSubHeading}>Subscriptions</p>
                <p className={style.billingText}>You do not have any subscriptions.</p>
            </div>
            <div>
                <p className={style.billingSubHeading}>Payment Plans</p>
                <p className={style.billingText}>You do not have any payment plans.</p>
            </div>
        </div>

    </div>
  )
}

export default Billing