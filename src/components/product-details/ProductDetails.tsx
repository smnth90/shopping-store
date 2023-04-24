import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from 'axios';
import { selectedProduct, productAddToCart } from "../../redux/actions/product-actions";

export const ProductDetails= () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state: any) => state.products.selectedProduct);
    const {title, id, price, image, description} = product;

    useEffect(() => {
        const fetchProductById = async () => {
            const res: any = await axios
                .get(`https://fakestoreapi.com/products/${productId}`)
                .catch( err => {
                    console.error(`error in getting products ${err}`);
                });
            console.log({res});
            if (res.status === 200) {
                dispatch(selectedProduct(res.data));
            }
        }
        if (productId && productId !== "") {
            fetchProductById();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);

    const addToCart = () => {
        dispatch(productAddToCart(id));
    }

    return (
        <div className="container mt-2" style={{height: '100%'}}>
            <div className="ui row justify-content-between align-items-center p-2" style={{height: '100%'}}>
                <div className="card col-lg-5 col-xs-12 mb-2">
                    <img src={image} alt={title} />
                </div>
                <div className="content col-lg-5 col-xs-12">
                    <div className="mb-5">
                        <h2 className="header-title">
                            {title}
                        </h2>
                    </div>
                    <div className="mb-4">
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="price">$ {price}</h4>
                    </div>
                    <button className="btn btn-success" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}