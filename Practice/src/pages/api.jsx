import React, { useEffect, useState } from 'react'
import { use } from 'react';

const api = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products')
            console.log(response)
            const result = await response.json()
            console.log(result)
            setProducts(result)
            console.log(result)
        }
        fetchData();
    }, [])
    return (
        <div>x`x`
            {
                products.map((products) => (
                    <div>
                        {/* <p key={products}>
                {products.title}
            </p> */}
                        <img src={products.images[0]} alt={products.title} />

                    </div>
                ))
            }
        </div>
    )
}

export default api

