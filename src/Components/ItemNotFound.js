import React from 'react';
import { Link } from 'react-router-dom';

const ItemNotFound = (props) => {
    return (
        <section className="fullscreen-banner p-0">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 text-center h-100 d-flex align-items-center">
                        <div className="w-100">
                            <h2>Oops! Página no encontrada</h2>
                            <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                <h6>EL siguiente item no Existe</h6>
                                <Link to={'/list'} className="btn btn-primary">Volver al inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemNotFound;