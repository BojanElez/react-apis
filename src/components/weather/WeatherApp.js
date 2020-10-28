import React, { useState, useEffect } from 'react'

const API_KEY = '73988c18684fce14a30de40859b01c9c'

const About = () => {
    const [loading, setLoading] = useState(false);
    const [weatherCity, setWeatherCity] = useState([]);
    const [weatherTemp, setWeatherTemp] = useState([]);
    const [weatherSys, setWeatherSys] = useState([]);
    const [weatherImage, setWeatherImage] = useState([]);
    const [citySunrise, setCitySunrise] = useState([]);
    const [citySunset, setCitySunset] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [temperatureConversion, seTemperatureConversion] = useState(false)

    useEffect(() => {
        setLoading(true);
        if (search === '') {
            fetchDataFromLocation();
        } else {
            getData();
            setLoading(false);
        }
    }, [error, search]);

    const fetchDataFromLocation = () => {
        if (error !== 404) {
            if (navigator.geolocation) { //check if geolocation is available
                navigator.geolocation.getCurrentPosition(function (position) {
                    let param = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
                    fetch(`https://api.openweathermap.org/data/2.5/weather?${param}&appid=${API_KEY}`)
                        .then(res => res.json())
                        .then(data => {
                            setWeatherCity(data)
                            setWeatherTemp(data.main)
                            setWeatherSys(data.sys)
                            setLoading(false);
                            setCitySunrise(data.sys);
                            setCitySunset(data.sys);
                            setWeatherImage(` https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`);
                        });
                });
            }
        }
    }

    const getData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setError(data.cod);
                if (data.cod === 200) {
                    setWeatherCity(data)
                    setWeatherTemp(data.main)
                    setWeatherSys(data.sys)
                    setLoading(false);
                } else {
                    console.log("error")
                }
            });
    }

    const conversion = () => {
        seTemperatureConversion(!temperatureConversion)
    }

    const getSearch = (e) => {
        e.preventDefault();
        if (e.target.value == '') {
            setSearch('')
        } else {
            setSearch(e.target.value)
        }
    }

    let domContainer;
    if (error == 404 && search !== '') {
        domContainer = <div className="card border-0">city not found</div>
    } else {
        domContainer =
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">City info</h4>
                    <img className="img-thumbnail border-0" src={weatherImage} width="100px" alt="Card image"></img>
                    <p className="card-text" >name - {weatherCity.name}</p>
                    <p className="card-text" >temp - {temperatureConversion ? weatherTemp.temp + ' K' : (weatherTemp.temp - 273.15 + ' C')}</p>
                    <p className="card-text" >humidity - {weatherTemp.humidity}</p>
                    <p className="card-text" >pressure - {weatherTemp.pressure}</p>
                    <p className="card-text" >country - {weatherSys.country} </p>
                    <p className="card-text" >sunrise - {citySunrise.sunrise} </p>
                    <p className="card-text" >sunset - {citySunset.sunset} </p>
                </div>
            </div>
    }

    if (loading) {
        return <div className="loader"></div>;
    }

    return (
        <div className="weather container">
            <div className="form-group">
                <div className="container">
                    <label htmlFor="usr">Name:</label>
                    <input type="text" className="form-control" onChange={getSearch} value={search} />
                </div>
            </div>
            <div className="container">
                <div>Switch unit</div>
                <label className="switch" >
                    <input type="checkbox" />
                    <span className="slider round" onClick={conversion}></span>
                </label>
                {domContainer}
            </div>
        </div>
    )
}

export default About