import React, { useEffect, useState } from "react";
import { addToDb, getstorage } from "../../utilities/fakedb";
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
    useEffect(()=> {
      const setdstorage =getstorage();
      let save = [];

      for (const id in setdstorage) {
        const addedProdact = prodacts.find(prodact => prodact.id === id);
         if(addedProdact){
           const quantity =setdstorage[id];
           addedProdact.quantity =quantity;
           save.push(addedProdact)
         }
       }
       setcart(save)
    }, [prodacts]) ;

    // click to add in cart 
    const [cart , setcart] =useState([]);
    const addtocad =(slectProdact)=>{
      let newcart =[];
      const extsts =cart.find(peodact => peodact.id === slectProdact.id);
      if(!extsts){
        slectProdact.quantity =1;
        newcart = [...cart ,slectProdact];
      }else{
        const rest = cart.filter(prodact => prodact.id !== slectProdact.id);
        extsts.quantity =extsts.quantity + 1;
        newcart =[...rest, extsts]
      }


        setcart(newcart)
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
