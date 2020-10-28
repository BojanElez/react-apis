import React from 'react';

const Card = ({ weatherImage, weatherCity }) => {

    return (
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
    )
}

export default Card