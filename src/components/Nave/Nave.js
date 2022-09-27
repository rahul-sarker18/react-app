import React from "react";
import logo from "../../images/Logo.svg";
import './Nave.css'

const Nave = () => {
  return (
    <div className="nav">
      <div className="nave-logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-write">
        <a href="/home">Home</a>
        <a href="/slect">Slect</a>
        <a href="/cart">Cart</a>
        <a href="/order">Order</a>
      </div>
    </div>
  );
};

export default Nave;
