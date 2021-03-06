import React, { useState } from 'react';

import classes from "./Summary.module.css";
import spinnerClasses from './Spinner.module.css';

const Summary = props => {
  console.log("summary props : " + props.summary);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Checkout Summary</h2>
      </div>

      <div className={classes.details}>
        <div className={classes.subtotal}>
          <span>Items ({props.noOfItems})</span>
          <span>LKR {props.summary.total.toFixed(2)}</span>
        </div>
        <div className={classes.discount}>
          <span>Delivery</span>
          <span>LKR 0.00</span>
        </div>
      </div>

      <div className={classes.total}>
        <span className={classes.total__span1}>Order Total</span>
        <span className={classes.total__span2}>LKR {props.summary.total.toFixed(2)}</span>
      </div>

      <div className={classes.button}>
        {props.isSpinnerActive ? <div className={spinnerClasses.loader}>Loading...</div> :
          <button className={classes.button_buy} onClick={props.order} >ORDER</button>
        }
      </div>

      {props.orderError ?
        <div className={classes.error}>
          Required details invalid or empty.
      </div> : null}

    </div>
  );

};

export default Summary;