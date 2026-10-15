import { Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import ShopNowButton from './ShopNowButton';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const formatoPrecio = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
});

const ProductCard = ({ producto, showFullDescription = false, imageFit = 'cover', imageBackground = '#fff' }) => {
    const { addToCart } = useCart();

    const handleAgregar = () => {
        addToCart(producto);
        toast.success(`Agregaste ${producto.name} al carrito`, {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
        });
    };

    const handleImageError = (event) => {
        event.currentTarget.src = 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=500&auto=format&fit=crop';
    };

    const descripcion = producto.description || 'Descripción no disponible';

    return (
        <Card className="h-100 d-flex flex-column shadow-sm border-0">
            <div style={{ height: '250px', overflow: 'hidden', backgroundColor: imageBackground }}>
                <Link to={`/productos/${producto.id}`} className="product-card__image-link" aria-label={`Ver ${producto.name}`}>
                    <Card.Img
                        variant="top"
                        src={producto.image}
                        alt={producto.name}
                        onError={handleImageError}
                        className="img-fluid"
                        style={{ width: '100%', height: '100%', objectFit: imageFit }}
                    />
                </Link>
            </div>

            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-5" style={{ color: '#333D29' }}>
                    <Link to={`/productos/${producto.id}`} className="product-card__title-link">
                        {producto.name}
                    </Link>
                </Card.Title>

                <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {showFullDescription || descripcion.length <= 80
                        ? descripcion
                        : `${descripcion.slice(0, 80)}...`}
                </Card.Text>

                <Card.Text className="fs-4 fw-bold" style={{ color: '#333D29' }}>
                    {formatoPrecio.format(Number(producto.price) || 0)}
                </Card.Text>

                <div>
                    <ShopNowButton
                        label="Agregar al carrito"
                        asButton
                        onClick={handleAgregar}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
