import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    const fetchProductCategories = async () => {
        const res: any = await axios
            .get('https://fakestoreapi.com/products/categories')
            .catch( err => {
                console.error(`error in getting products ${err}`);
            });
        console.log({res});
        if (res.status === 200) {
            setCategories(res.data);
        }
    }

    useEffect(() => {
        fetchProductCategories();
    }, []);

    return (
        <div className="container-fluid col mt-2">
            <h4>Filter by Category</h4>
            <div className="row justify-content-between mt-3">
                {categories.map(category => (
                    <div className="col-lg-4 mt-2" >
                        <Link to={`/categories/${category}`} style={{textDecoration: 'none'}}>
                            <div className="card ">
                                <div className="ui image">
                                    <img src={ "/assets/" + category + '.jpg'} alt={category} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {category}
                                    </h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}