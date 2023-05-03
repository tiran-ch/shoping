import React, {useEffect, useState} from "react";
import "./shop.css";
import {api} from "../api/index";
import basket from "../images/add-to-basket.png";
import {useNavigate, useParams} from "react-router-dom";

export default function Shop() {
    const { product } = useParams();
    const [products, setProducts] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/shop/all-products`);
    }, []);



    useEffect(()=>{
        api.get(`filter${product}`)
            .then(res => {
                setProducts(res.data)
            });

        console.log(product);
        if (product === "all-products") {
            api.get("product")
                .then(res => {
                    setProducts(res.data);
                    console.log(res.data)
                });
        }
    },[product]);



    const productItem = (id)=>{
        window.open(`/item/product/${id}`,'_blank')
    };
    console.log(products, "dsasasasasasasasasasasasasasasasasasasasasasasasasa");


    return (
        <div className="shop">
            <main>
                <div className="main-block">
                    {
                        products !== undefined &&
                        products.map(product =>(
                            <div key={product.id} className="products" onClick={()=> productItem(product.id)}>
                                <div className="img">
                                    <img src={`http://localhost:3001/images/${product.images}`} alt=""/>
                                </div>
                                <div className="datas">
                                    <p>{product.brand} {product.model}</p>
                                    <p>about: <span>{product.about}</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}