import React, {useEffect, useState} from "react";
import {api} from "../api";
import "./productBasket.css";
import removeProduct from "../images/remove.png"

export default function ProductBasket() {
    const [data, setData] = useState();

    useEffect(()=>{
        api.get("product").then(res=>{
            api.get("getCart")
                .then(cartData=>{
            const dates = cartData.data.map((id) => res.data.find((el) => el.id == id.cartId));
            setData(dates);

                });
        });
    },[]);



    // const decrement = (id, e)=>{
    //     const decrementValue = {
    //         id: id,
    //         value: "decrement",
    //     };
    //     api.post("decrement", decrementValue)
    //         .then(res=>{
    //             console.log(res.data);
    //         })
    // };

    // const increment = (id, e)=>{
    //         const incrementValue = {
    //             id: id,
    //             value: "increment",
    //         };
    //         api.post("increment", incrementValue)
    //         .then(res=>{
    //             console.log(e.target.parentElement);
    //             console.log(res.data);
    //         })
    // };

    const removeBasketProduct =(id, e)=>{
         e.target.parentElement.parentElement.remove();
         const removeProductId = {id: id};
         api.post("delete", removeProductId)
    };

    return(
        <div className="ProductBasket">
            {
                data !== undefined &&
                    data.map(res=>{
                        return(
                            <div key={res.id} className="basket-data">
                                <div className="basket-image">
                                    <div className="productName-Image">
                                        <img src={`http://localhost:3001/images/${res.images}`} alt=""/>
                                        <div className="product-name">
                                            <p>{res.brand}</p>
                                            <p>{res.model}</p>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <p>{res.about}</p>
                                    </div>
                                </div>

                                <div className="product-quantity">
                                    {/*<button id="decrement" onClick={(e)=> decrement(res.id, e)}>-</button>*/}
                                    {/*<button></button>*/}
                                    {/*<button id="increment" onClick={(e)=> increment(res.id, e)}>+</button>*/}
                                </div>

                                <div className="remove-basket-product" onClick={(e)=>removeBasketProduct(res.id, e)}>
                                    <img src={removeProduct} alt=""/>
                                </div>
                            </div>
                        )
                    })
            }
            <div className="buy-products">
                <button>BUY</button>
            </div>
        </div>
    )
}
