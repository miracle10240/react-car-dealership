import React, { useState, useEffect} from "react";
import Header from "../Header/Header";
import Gallery from "./Gallery";
import Footer from "../Footer/footer";
import { useParams } from "react-router-dom";

const Product = () => {

    const [gallery, setGallery] = useState({})
    let { id } = useParams();
    useEffect(() => {
        fetch('http://jsonholder.com/car/' + id, { mode: 'cors' })
        .then((res) => res.json())
        .then((data) => {
            setGallery(data)
        })
        .catch((err) => {
           console.log(err.message);
        });
    }, []);

    return (
        <div>
            <Header />
            <Gallery 
                gallery = {gallery}
            />
            <Footer />
        </div>
    )
}

export default Product