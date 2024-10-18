import React from "react";
import "../css/currency.css";
import { RiExchangeFill } from "react-icons/ri";
import axios from "axios";

function Currency() {
  return (
    <div className="currency-main-div">
      <div className="exchange-text">
        <h1>Döviz Hesaplama Uygulması</h1>
      </div>
      <div className="currency-div">
        <input className="amount" type="number" />
        <select className="from-currency-option">
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
          <option value="tl">TL</option>
        </select>
        <div>
          <RiExchangeFill style={{ fontSize: "70px", margin: "0 15px" }} />
        </div>

        <select className="to-currency-option">
          <option value="tl">TL</option>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
        </select>

        <input className="result" type="number" />
      </div>
    </div>
  );
}

export default Currency;
