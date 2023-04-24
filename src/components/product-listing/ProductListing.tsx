import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { ProductComponent } from "../product/ProductComponent";
import { setProducts } from "../../redux/actions/product-actions";
import { useParams } from "react-router-dom";

export const ProductListing = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const fetchProducts = async () => {
        const res: any = await axios
            .get('https://fakestoreapi.com/products')
            .catch( err => {
                console.error(`error in getting products ${err}`);
            });
        console.log({res});
        if (res.status === 200) {
            dispatch(setProducts(res.data));
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (!!category) {
            setSelectedCategory(category); 
        }
        else {
            setSelectedCategory("All"); 
        }
    }, [category]);

    return (
        <div className="container-fluid col mt-2">
            <div className="row">
                <ProductComponent selectedCategory={selectedCategory}/>
            </div>
        </div>
    )
}