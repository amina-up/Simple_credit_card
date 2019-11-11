import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-credit contiiner">
      <div className="row">
        <div className="col">
          <h1 className="title">Credit Card</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            src="https://st2.depositphotos.com/3248189/9001/v/950/depositphotos_90016566-stock-illustration-credit-card-chip.jpg"
            className="img-puce"
          />
        </div>
      </div>
      <div className="row ml-1 cred-num">
        <span className="bc-num mt-3">1895 2315 6549 8495</span>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <span className="mt-2">56415</span>
        </div>
        <div className="col-sm-1 offset-3">
          <span className="small-title">VALID THRU</span>
        </div>
        <div className="col-sm-1">
          <div className="row">
            <span className="small-title">month/year</span>
          </div>
          <div className="row">
            <span className="validy ml-3 mt-2">11/50</span>
          </div>
        </div>
      </div>

      <div className="end-card">
        <p>CARDHOLDER</p>
        <img
          src="https://riojawinetrips.com/wp-content/uploads/2019/06/visa-mastercard-logo.jpg"
          className="img-pucee"
        ></img>
      </div>
    </div>
  );
};
export default Card;
