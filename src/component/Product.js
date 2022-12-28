import React, { useState,useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addtocart } from './redux/action/Indexx';

const Product = () => {
    const {id}=useParams();
    const[product,setProduct]=useState([])
    const[loading,setLoading]=useState(false)
    const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addtocart(product));
  };
    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
       
    console.log(response)
                  setProduct(await response.data);
                //   setfilter(await response.data);
                //   console.log(filter);
                //   console.log(data)
                  setLoading(false);
                  
                 
      };
      useEffect(() => {
        fetchData();
    
        // eslint-disable-next-line 
      }, []);
      const Loading = () => {
        return <>Loading...</>;
      };
      const ShowProducts=()=>{
        return(
        <>
            <div className="col-md-6">
                <img className='productimg' src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i></p>
                <h3 className="display-6 fw-bold my-4">Price : {product.price}</h3>
                <p className="lead">
                    {product.description}
                </p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
                Add to cart</button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to cart</NavLink>
            </div>
        </>
        )
      }
  return (
    <div className="container py-4">
        <div className="row py-4">
        {loading ? <Loading /> : <ShowProducts />}
        </div>
    </div>
  )
}

export default Product