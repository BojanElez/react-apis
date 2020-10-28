import React, { useState, useEffect } from 'react';

const API_KEY = '-1KaYHGDqwANtGJnzdJdakEkbylj4aikWRfxy5adhTo';

const Infinite = () => {
    const [pictures, setPictures] = useState([]);
    const [pageNumber, setPageNumber] = useState(12);
    const [displayMore, setDisplayMore] = useState(false);

    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    const fetchData = () => {
        fetch(`https://api.unsplash.com/search/photos?per_page=${pageNumber}&query=cheesecake&client_id=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setPictures(data.results);
            }).catch(err => console.log(err));
    }

    const myStyle = {
        width: '300px',
        flex: '0 1 calc(21% - 1px)'
    }

    window.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 45) {
            setTimeout(() => {
                setPageNumber(pageNumber + 4);
            }, 500)
        }
    });

    return (
        <div className="container" >
            <div className="infinite" >
                {pictures.map((pic) => (
                    <div className="card" style={myStyle} key={pic.id}>
                        <img className="card-img-top" src={pic.urls.full} alt="Card image" style={{ width: "100%" }} />
                        <div className="card-body">
                            <h6 className="card-title">Uploaded: {pic.alt_description}</h6>
                            <div className="card-body">{pic.description}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Infinite