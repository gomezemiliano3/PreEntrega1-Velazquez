import React from "react";

const ItemListContainer = () => {
    return (
        <div>
            <div>
                <div className="card mb-3">
                    <h3 className="card-header">Producto 1</h3>
                    <div className="card-body">
                        <h5 className="card-title">Subtitulo</h5>
                        <h6 className="card-subtitle text-muted">Subtitulo</h6>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="d-block user-select-none"
                        width="100%"
                        height={200}
                        aria-label="Placeholder: Image cap"
                        focusable="false"
                        role="img"
                        preserveAspectRatio="xMidYMid slice"
                        viewBox="0 0 318 180"
                        style={{ fontSize: "1.125rem", textAnchor: "middle" }}
                    >
                        <rect width="100%" height="100%" fill="#868e96" />
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Imagen
                        </text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">
                            Descripcion del producto.
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">
                            Card link
                        </a>
                        <a href="#" className="card-link">
                            Another link
                        </a>
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
