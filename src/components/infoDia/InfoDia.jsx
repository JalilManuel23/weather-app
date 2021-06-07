import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const InfoDia = ({ ciudad }) => {

    const { main, weather } = useFetch( ciudad );

    const { temp, temp_min, temp_max } = main;
    const { main: mainWeather, description, icon } = weather;

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <img src={ `http://openweathermap.org/img/wn/${ icon }@2x.png` } alt={ description } />
                <p className="temp-actual">{ temp }°C</p>
                <h6>{ mainWeather }</h6>
                <p className="tiempo">{ description }</p>
                <p className="ciudad">{ ciudad }</p>
            </div>


            <div className="d-flex align-items-center">
                <p className="temp-maxima">{ temp_max }°C</p>
                <p className="temp-minima align-bottom">{ temp_min }°C</p>
            </div>
        </div>
    )
}