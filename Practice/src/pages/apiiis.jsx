import React, { useEffect, useState } from 'react'

const apiiis = () => {

        const [products, setProducts] = useState([]);


        useEffect(()=>{
            const fetchData = async ()=>{
                const response = await fetch('https://fakestoreapi.com/products')
                console.log(response);
                const result = await response.json();
                console.log(result);
                setProducts(result);
                console.log(products);
            }
        },[])


  return (
    <div>
      {
        products.map(()=>(
            <div className="div">
                <p key={products}>{products.title}</p>
            </div>
        ))
      }
    </div>
  )
}

export default apiiis
