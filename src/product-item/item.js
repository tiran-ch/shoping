import React, {useEffect, useState} from "react";
import {api} from "../api";
import "./item.css";
import {useParams} from "react-router";

export default function Item() {
    const [productItem, setProductItem] = useState();

    const {id} = useParams();


    useEffect(() => {
        api.get(`product/item${id}`)
            .then(res => {
                setProductItem(res.data[0]);
            });

    }, []);

    const Basket = () => {
        const cartData = {id: id, quantity: 1};
        api.post("cart", cartData);

        alert("product added")
    };


    return (
        <div className="item">
            <div className="item-block">
                {
                    productItem !== undefined &&
                    <div className="product-item">
                        <div>
                            <img src={`http://localhost:3001/images/${productItem.images}`} alt=""/>
                        </div>
                        <div className="item-data">
                            <div className="item-title">
                                <h1>{productItem.brand}</h1>
                                <h1>{productItem.model}</h1>
                            </div>
                            <p>{productItem.about}</p>
                            npx sequelize-cli db:migrate

                            <div className="add-in-basket">
                                <button onClick={() => Basket()}>Add Basket</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}