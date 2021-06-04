import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {

    let icono = 'nublado';
    let color = 'icono ';

    switch( icono ) {
        case 'nublado': {
            color += 'nublado';
        } break;
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 form1 d-flex flex-column justify-content-center">
                        <h3>Consulta el clima:</h3>
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Busca una ciudad" aria-label="Busca una ciudad" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <FontAwesomeIcon icon={faCloud} className={ color } />
                                <p className="temp-actual">30°C</p>
                                <p className="tiempo">Nublado</p>
                            </div>
                            <p className="ciudad">Durango, Dgo.</p>
                            <div className="d-flex align-items-center">
                                <p className="temp-maxima">30°C</p>
                                <p className="temp-minima align-bottom">15°C</p>
                            </div>
                        </div>
                        <hr />
                        <div className="semana d-flex justify-content-around">
                            <div>
                                <p>Lunes</p>
                                <FontAwesomeIcon icon={faCloud} />
                                <p>30°C</p><p>15°C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
