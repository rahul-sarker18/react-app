import React from 'react';
import './Prodact.css'

const Prodact = ({prodact ,hendelclick}) => {
    const {name ,price,img } =prodact;
    return (
        <div className='prodact-div'>
                <div className='ing-contenar'>
                    <img src={img? img : 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                    <button onClick={()=>hendelclick(prodact)} className='add-btn'>add to cart</button>
                </div>

        </div>
    );
};

export default Prodact;