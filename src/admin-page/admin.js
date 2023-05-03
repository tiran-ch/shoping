import React, {useState} from "react";
import {api} from "../api/index";
import "./admin.css";

export default function Admin() {
    const [image, setImage] = useState();
    const [addImage, setAddImage] = useState();
    const [productBrand, setProductBrand] = useState();
    const [productModel, setProductModel] = useState();
    const [aboutProduct, setAboutProduct] = useState();

    const handleApi = () => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("brand", productBrand);
        formData.append("model", productModel);
        formData.append("about", aboutProduct);
        api.post("product", formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });

        setAddImage("");
        setProductBrand("");
        setProductModel("");
        setAboutProduct("")

    };

    const addImageData = (e) => {
        setImage(e.target.files[0]);
        setAddImage(URL.createObjectURL(e.target.files[0]));
    };

    const selectBrand = (e)=>{
        setProductBrand(e.target.value);
    };

    const selectModel = (e)=>{
        setProductModel(e.target.value);
    };

    const about =(e)=>{
        setAboutProduct(e.target.value)
    };

    return (
        <div className="admin">
            <div className="main-admin">
                <div className="title"><h1>Add Product</h1></div>

                <div className='add'>
                    <div className="add-image">
                        <input type="file" id="img" name="image" onChange={e => addImageData(e)}/>
                        <img src={addImage} alt=""/>
                    </div>

                    <div className="product-data">

                        <div>
                            <select name="cars" id="cars" onChange={e=>selectBrand(e)}>
                                <option value="">""</option>
                                <option value="apple">apple</option>
                                <option value="samsung">samsung</option>
                                <option value="xiaumi">xiaumi</option>
                                <option value="onePlus">onePlus</option>
                                <option value="acer">acer</option>
                                <option value="nokia">nokia</option>
                                <option value="lenovo">lenovo</option>
                            </select>
                            <input type="text" value={productModel} name="" placeholder="model" onChange={(e)=>selectModel(e)}/>
                        </div>

                        <div className="about-product">
                            <label htmlFor="w3review">about phone</label>
                            <textarea id="w3review" value={aboutProduct} name="w3review" rows="10" cols="50" onChange={(e)=>about(e)}>
                            </textarea>
                        </div>

                    </div>
                </div>


                <div className="add-product">
                    <button type="submit" onClick={() => handleApi()}>Add Product</button>
                </div>

            </div>
        </div>
    )
}
