import React from "react";
import {Route, Routes} from "react-router";
import Admin from "../admin-page/admin";
import Shop from "../shop/shop";
import Item from "../product-item/item";
import ProductBasket from "../basket/productBasket";

export default function ReactRouter() {
    return(
        <Routes>
            <Route path="/" element={ <Admin/> } />
            <Route path="/shop/:product" element={ <Shop/> } />
            <Route path="item/product/:id" element={ <Item/> } />
            <Route path="basket" element={ <ProductBasket/> } />
        </Routes>
    )
}