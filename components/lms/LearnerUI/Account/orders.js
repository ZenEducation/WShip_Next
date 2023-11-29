import React from 'react'
import style from "@/styles/lms/LearnerUI/profile.module.css";

const Orders = () => {
  return (
    <div className={style.orderContainer}>
        <p className={style.orderHeading}>Order History</p>
        <div className={style.orderTableContainer}>
        <table>
            <tr>
                <th>Order#</th>
                <th>Product</th>
                <th>Date</th>
                <th>Expires</th>
                <th>Status</th>
                <th>Current Value</th>
            </tr>
        </table>
        </div>
        <p className={style.orderNote}>You do not have any orders yet.</p>
    </div>
  )
}

export default Orders