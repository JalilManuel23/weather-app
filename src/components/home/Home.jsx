import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { InfoDia } from '../infoDia/InfoDia';
import { useForm } from '../../hooks/useForm';
import './home.css';

export const Home = () => {
    
    const [city, setCity] = useState('Durango');  

    const [formValues, handleInputChange] = useForm({
        ciudad: ''
    });

    const { ciudad } = formValues;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setCity( ciudad );
    }

    return (
        <div className="bg">
            <Navbar />
            <div className="container">
                <div className="row min-h-100">
                    <div className="col-md-6 form1 d-flex flex-column justify-content-center">
                        <h3>Consulta el clima:</h3>
                        <form onSubmit={ handleSubmit }>
                            <div className="input-group mb-3">
                                <input type="text"
                                    name="ciudad" 
                                    value={ ciudad }
                                    className="form-control"
                                    placeholder="Busca una ciudad" 
                                    aria-label="Busca una ciudad" 
                                    aria-describedby="button-addon2" 
                                    onChange={ handleInputChange }
                                />
                                <button className="btn btn-outline-primary" type="submit" id="button-addon2">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <InfoDia ciudad={ city } />
                        {/* <hr />
                        <div className="d-flex justify-content-around">
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
