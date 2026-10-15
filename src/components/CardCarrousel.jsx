import './CardCarrousel.css';

const formatoPrecio = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
});

export default function CardCarrousel({ producto, imagen = producto.image, altImagen = producto.name }) {
    return (
        <article className="card-carrousel">
            <img
                className="card-carrousel__image"
                src={imagen}
                alt={altImagen}
                loading="lazy"
            />
            <div className="card-carrousel__details">
                <h3 className="card-carrousel__title">{producto.name}</h3>
                <p className="card-carrousel__price">{formatoPrecio.format(Number(producto.price) || 0)}</p>
            </div>
        </article>
    );
}
