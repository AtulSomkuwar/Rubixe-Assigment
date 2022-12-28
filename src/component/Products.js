import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);
//   const [data, setdata] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");
   
console.log(response)
              setData(await response.data);
              setfilter(await response.data);
              console.log(filter);
              console.log(data)
              setLoading(false);
              
             
  };
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line 
  }, []);
//   let componentMounted = true;
//   const getProducts = async () => {
//     setLoading(true);
//     const response = await fetch("https://fakestoreapi.com/products");
//     // if (componentMounted) {

//       setData(await response.json());
//       setfilter(await response.json());
//       setLoading(false);
//       console.log(filter);
//       console.log(data)
//     // }
//     // return () => {
//     //   componentMounted = false;
//     // };
//   };
//   useEffect =(()=>{
//         getProducts();
//   },[])

    
  const Loading = () => {
    return <>Loading...</>;
  };
  const filterProducts=(category)=>{
        const updateList = data.filter((item)=>{
            return item.category===category
        })
        setfilter(updateList)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <div className="sec-container">
          <div className="sec-conatiner-left">
          <h2>WHO WE ARE</h2>
            <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), Block Chain and Internet of Things (IoT). </p>
            
            <p>
            Rubixe™ mission is to enable bussinesses to leverage the full potential of distuptive technologyies and stay competitive in the market, turning complex challenges into solution, providing a strategic competitive advantages that are more efficient, effective and predictable
            </p>
          </div>

          <div className="sec-container-right">
            <img id="Studying-atmosphere" src="assets/Studying-atmosphere.jpg"></img>
          </div>
        </div>

        <div className="thr-container">
          <h3>WHERE WE STARTED</h3>
          <p>We started in 2015,With a passionate team who to bring game-changing solution disrupting 
          technologies.We experties in delivering enterprise-level solutions in the field of Artificial Intelligence(AI) Cyber Security,Robotics Process Automation(RPA),Internet of Things(IoT),and BlockChain technology</p>
        </div>
        </div>
        {filter.map((products) => {
          return (
            <>
              
                  <div className="card-body">
                   
                    <NavLink >
                      
                    </NavLink>
                  </div>
              
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
           
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
