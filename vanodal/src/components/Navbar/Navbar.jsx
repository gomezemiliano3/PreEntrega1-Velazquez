import React from "react";
import Form from "./Form";
import Sections from "./Sections";
import CartIcon from "../Cart/CartIcon/CartIcon";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Vanodal
                    </a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <Sections/>
                        </ul>
                <CartIcon/>
                        <Form busqueda="Explora los planes"/>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
