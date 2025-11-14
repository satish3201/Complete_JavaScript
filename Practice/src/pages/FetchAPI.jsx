import React, { useEffect, useState } from 'react'

const FetchAPI = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(response);
            const result = await response.json();
            console.log(result);
            setPosts(result);
            console.log(posts)
        }
        fetchData();
    }, [])

    return (
        <div>
            {

                posts.map((post) => (
                    <p key={post}>{post.title}</p>
                ))

            }
        </div>
    )
}

export default FetchAPI
