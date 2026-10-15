import React, { useContext } from "react";
import { Row, Col, Spinner, Form } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../context/ProductsContext";
import { useSearch } from "../context/SearchContext";
import "./ListaProductos.css";

const ListaProductos = ({ categoria }) => {
    const { productos, cargando } = useContext(ProductsContext);
    const { searchTerm } = useSearch();

        const safeNormalize = (str) => {
            if (!str) return "";
            try {
                return String(str)
                    .toLowerCase()
                    .replace(/[áàäâã]/g, 'a')
                    .replace(/[éèëê]/g, 'e')
                    .replace(/[íìïî]/g, 'i')
                    .replace(/[óòöôõ]/g, 'o')
                    .replace(/[úùüû]/g, 'u')
                    .replace(/[ñ]/g, 'n')
                    .replace(/[ç]/g, 'c');
            } catch (e) {
                try { return String(str).toLowerCase(); } catch { return ""; }
            }
        };

    const synonymMap = {
        "Velas C\u00c3\u00adtricas": ["citr", "citric", "fresco"],
        "Velas Florales": ["flor"],
        "Velas arom\u00e1ticas": ["vela"],
        "Productos faciales": ["facial"],
        "Productos corporales": ["corporal"],
        "Aromas": ["aroma"],
        "Accesorios": ["accesorio"],
        "Kits": ["kit", "set"],
        "Kits de Regalo": ["kit", "set"]
    };

    const productosFiltrados = productos.filter((producto) => {
        const normalizedSearch = safeNormalize(searchTerm);
        const nameNorm = safeNormalize(producto.name);
        const searchMatch = !normalizedSearch || nameNorm.includes(normalizedSearch);

        const cat = categoria || "Todas";
        const categoryValueNorm = safeNormalize(producto.category || "");

        let categoryMatch = true;
        if (cat && cat !== "Todas") {
            const syns = synonymMap[cat];
            if (syns && syns.length > 0) {
                    categoryMatch = syns.some(sub => categoryValueNorm.includes(safeNormalize(sub)));
            } else {
                categoryMatch = categoryValueNorm.includes(safeNormalize(cat));
            }
        }

        return searchMatch && categoryMatch;
    });

    if (cargando) {
        return (
            <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "300px" }}>
                <Spinner animation="border" role="status" style={{ color: "var(--color-primary)" }}>
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <>
            <div className="productos__toolbar">
                <Form.Select
                    className="productos__sort"
                    size="sm"
                    value=""
                    disabled
                    aria-label="Orden de productos disponible proximamente"
                >
                    <option value="">Ordenar productos</option>
                    <option value="relevancia">Mas relevantes</option>
                    <option value="menor-precio">Menor precio</option>
                    <option value="mayor-precio">Mayor precio</option>
                </Form.Select>
            </div>

            <Row>
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <Col lg={3} md={6} sm={6} xs={12} key={producto.id} className="mb-4">
                            <ProductCard
                                producto={producto}
                                imageFit={["vela-cafe", "vela-strawberry", "vela-chocolate", "vela-citrus", "vela-rosas", "vela-frutos-rojos", "vela-lavanda"].includes(producto.id) ? "contain" : "cover"}
                                imageBackground="#fff"
                            />
                        </Col>
                    ))
                ) : (
                    <Col xs={12} className="text-center py-5">
                        <h4 className="text-muted">No encontramos velas con ese nombre 🕯️</h4>
                        <p>Intenta con otra palabra clave.</p>
                    </Col>
                )}
            </Row>
        </>
    )
};

export default ListaProductos;
