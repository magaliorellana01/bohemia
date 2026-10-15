import { useContext, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ShopNowButton from '../components/ShopNowButton';
import { ProductsContext } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';
import './DetalleProducto.css';

const formatoPrecio = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
});

export default function DetalleProducto() {
    const { id } = useParams();
    const { productos = [] } = useContext(ProductsContext);
    const { addToCart } = useCart();
    const producto = productos.find((item) => item.id === id);
    const [aromaSeleccionado, setAromaSeleccionado] = useState('');
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        setAromaSeleccionado('');
        setCantidad(1);
    }, [id]);

    if (!producto) {
        return (
            <Container className="product-detail product-detail--missing">
                <h1>Producto no encontrado</h1>
                <p>Puede que ya no esté disponible en el catálogo.</p>
                <ShopNowButton label="Volver a productos" showCartIcon={false} />
            </Container>
        );
    }

    const tieneOpciones = Array.isArray(producto.options) && producto.options.length > 0;

    const handleAgregar = (event) => {
        event.preventDefault();
        if (tieneOpciones && !aromaSeleccionado) {
            toast.info('Elegí un aroma para continuar.');
            return;
        }

        addToCart(producto, cantidad, aromaSeleccionado || null);
        const detalleAroma = aromaSeleccionado ? ` (${aromaSeleccionado})` : '';
        toast.success(`Agregaste ${producto.name}${detalleAroma} al carrito.`);
    };

    return (
        <Container className="product-detail">
            <Row className="align-items-center g-4 g-lg-5">
                <Col lg={6}>
                    <div className="product-detail__image-frame">
                        <img src={producto.image} alt={producto.name} className="product-detail__image" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="product-detail__content">
                        <p className="product-detail__category">{producto.category}</p>
                        <h1 className="product-detail__title">{producto.name}</h1>
                        <p className="product-detail__description">{producto.description}</p>
                        <p className="product-detail__price">{formatoPrecio.format(Number(producto.price) || 0)}</p>

                        <form className="product-detail__form" onSubmit={handleAgregar}>
                            {tieneOpciones && (
                                <Form.Group className="product-detail__field" controlId="product-aroma">
                                    <Form.Label>Aroma</Form.Label>
                                    <Form.Select
                                        value={aromaSeleccionado}
                                        onChange={(event) => setAromaSeleccionado(event.target.value)}
                                        required
                                    >
                                        <option value="">Elegí un aroma</option>
                                        {producto.options.map((opcion) => (
                                            <option key={opcion} value={opcion}>{opcion}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            )}

                            <div className="product-detail__field">
                                <label htmlFor="product-quantity">Cantidad</label>
                                <div className="product-detail__quantity">
                                    <button
                                        type="button"
                                        aria-label="Disminuir cantidad"
                                        onClick={() => setCantidad((actual) => Math.max(1, actual - 1))}
                                    >
                                        −
                                    </button>
                                    <input
                                        id="product-quantity"
                                        type="number"
                                        min="1"
                                        step="1"
                                        value={cantidad}
                                        onChange={(event) => setCantidad(Math.max(1, Number.parseInt(event.target.value, 10) || 1))}
                                    />
                                    <button
                                        type="button"
                                        aria-label="Aumentar cantidad"
                                        onClick={() => setCantidad((actual) => actual + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <ShopNowButton label="Agregar al carrito" asButton type="submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
