import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../redux/constants/product-interface";
import { Link } from "react-router-dom";
import "./ProductComponent.css";
import { productAddToCart } from "../../redux/actions/product-actions";

interface Iprops {
    selectedCategory: string
}

export const ProductComponent = ({selectedCategory}: Iprops) => {
    const allProducts = useSelector((state: any) => state.products.products);
    const dispatch = useDispatch();

    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory || selectedCategory==='All') {
          return allProducts;
        }
        return allProducts.filter((item: any) => item.category === selectedCategory);
      }
    
      // Avoid duplicate function calls with useMemo
      var filteredList = useMemo(getFilteredList, [selectedCategory, allProducts]);

    const addToCart = (e: any, id: number) => {
        e.preventDefault();
        dispatch(productAddToCart(id));
    }
    const RenderList = () => filteredList.map((product: Product) => {

        const {title, id, price, image} = product;
        return (
            <div className="col-lg-4 mt-2" key={id}>
                <Link to={`/product/${id}`} className="product-details" style={{textDecoration: 'none'}}>
                    <div className="card">
                        <div className="ui image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                {title}
                            </h5>
                            <div className="d-flex align-items-end justify-content-between">
                                <h4 className="price mt-5">${price}</h4>
                                <button className="btn btn-success" onClick={(e) => addToCart(e, id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <div className="row col-lg-12 m-2">
            <RenderList />
        </div>
    )
}
