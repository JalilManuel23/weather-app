import React from 'react';
import { Navbar } from '../navbar/Navbar';

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Consulta el clima:</h3>
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Busca una ciudad" aria-label="Busca una ciudad" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
