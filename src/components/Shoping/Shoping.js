import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Prodact from "../prodact/Prodact";
import './Shoping.css'

const Shoping = () => {
    const [prodacts ,setprodacts] =useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setprodacts(data))
    }, []);

    // lode and display show 
     

    // click to add in cart 
    const [cart , setcart] =useState([]);
    const addtocad =(slectProdact)=>{
        setcart([...cart ,slectProdact])
        addToDb(slectProdact.id);
    }
  return (
    <div className="shoping-div">
      <div className="prodact-contenar">
        {
            prodacts.map(prodact => <Prodact prodact ={prodact}
                key ={prodact.id}
                hendelclick ={addtocad}
            ></Prodact>)
        }
      </div>
      <div className="cart-contenar">
        <Cart card ={cart}></Cart>
      </div>
    </div>
  );
};

export default Shoping;
