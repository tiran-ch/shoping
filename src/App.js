import React, {useEffect, useState} from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import ReactRouter from "./router/Router";
import basket from "./images/add-to-basket.png";

function App() {
      const navigate = useNavigate();

    const selectBrand = (e) => {
        navigate(`/shop/${e.target.value}`);
    };

    return (
    <div className="App">
        <header>
            <div className='header-block'>
                <ul>
                    <li><a href="">model</a></li>
                    <li><a href="">model</a></li>
                    <li><a href="">model</a></li>
                    <li><a href="">model</a></li>
                    <li><a href="">model</a></li>
                </ul>

                <select name="" id="" onChange={e => selectBrand(e)}>
                    <option value="all-products">all products</option>
                    <option value="samsung">samsung</option>
                    <option value="apple">apple</option>
                    <option value="xiaumi">xiaumi</option>
                    <option value="samsung">samsung</option>
                    <option value="nokia">nokia</option>
                    <option value="samsung">samsung</option>
                </select>

                <img src={basket} alt="" id="basket" onClick={()=>{
                    window.open('/basket','_blank')
                }}/>
            </div>
        </header>

       <ReactRouter/>
    </div>
  );
}

export default App;
