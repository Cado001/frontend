import { useEffect, useState } from "react"
export default function CardContainer() {
    const [blogPosts, setBlogPosts] = useState([])
    // 1. As soon as component loads -fetch data
    useEffect(() => {
        fetch('http://localhost:8080')
            .then((res) => res.json())
            .then((data) => setBlogPosts(data))
            .catch(err => console.log(err))
    }, [])
    // 2. Put data array in state varaible
    // 3. Map data array in state variable
    // 4. Return jsx from the map -
    return (
        <>
            <h2>This is Card Container</h2>
            <div className="cardContainer">
                {blogPosts.map((singlePost, index) => {
                    console.log('singlePost ->', singlePost)
                    return (
                        <div className="singleCard">
                            <img src={`https://source.unsplash.com/random/ ${index}`} alt="srcset" />
                            <h2>title: {singlePost.title}</h2>
                            <p> {singlePost.content} </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}