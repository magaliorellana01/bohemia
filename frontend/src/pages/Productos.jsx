import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ListaProductos from "../components/ListaProductos";
import ShopNowButton from "../components/ShopNowButton";
import "./Productos.css";

export default function Productos() {
    const [searchParams] = useSearchParams();
    const categoriaParam = searchParams.get("categoria");

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaParam || "Todas");

    useEffect(() => {
        setCategoriaSeleccionada(categoriaParam || "Todas");
    }, [categoriaParam]);
    const categorias = [
        { label: "Todas las categor\u00edas", value: "Todas" },
        { label: "Velas arom\u00e1ticas", value: "Velas arom\u00e1ticas" },
        { label: "Productos faciales", value: "Productos faciales" },
        { label: "Productos corporales", value: "Productos corporales" },
        { label: "Aromas", value: "Aromas" },
        { label: "Accesorios", value: "Accesorios" },
        { label: "Kits", value: "Kits" },
    ];
    return (
        <Container>
            <div className="p-5 mb-5 bg-light rounded-3 text-center shadow-sm">
                <h1 className="productos__title">Nuestros Productos</h1>
                <p className="productos__subtitle">Explorá toda nuestra sección de productos</p>
            </div>
            <div className="text-center mb-4">
                <h4 className="mb-3" style={{ color: "#4F4A4A" }}>Filtrar por Categoría</h4>
                <div className="productos__filters" role="group" aria-label="Filtro de categorías">
                    {categorias.map(({ label, value }) => (
                        <ShopNowButton
                            key={value}
                            label={label}
                            showCartIcon={false}
                            asButton
                            className={`productos__filter-button${categoriaSeleccionada === value ? " productos__filter-button--active" : ""}`}
                            ariaPressed={categoriaSeleccionada === value}
                            onClick={() => setCategoriaSeleccionada(value)}
                        />
                    ))}
                </div>
            </div>

            <div style={{ paddingBottom: "100px" }}>
                <ListaProductos categoria={categoriaSeleccionada} />
            </div>
        </Container>
    );
}
