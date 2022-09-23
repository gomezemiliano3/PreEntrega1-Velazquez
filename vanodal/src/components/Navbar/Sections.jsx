import React from 'react';

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" href="#">
                    Inicio
                    <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Planes
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Precios
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Sobre nosotros
                </a>
            </li>
        </>
    );
}

export default Sections;
