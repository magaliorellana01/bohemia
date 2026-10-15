import { useContext, useEffect, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { ProductsContext } from '../context/ProductsContext';
import ShopNowButton from './ShopNowButton';
import serum from '../assets/serum.png';
import cremaTubo from '../assets/crema-tubo.png';
import vela from '../assets/vela.png';
import crema from '../assets/crema.png';
import velaDos from '../assets/vela2.png';
import skinCare from '../assets/skin.care.png';
import vincha from '../assets/vincha.png';
import CardCarrousel from './CardCarrousel';
import './SellersSection.css';

const imagenesDestacadas = [
    { src: serum, alt: 'Serum' },
    { src: cremaTubo, alt: 'Crema en tubo' },
    { src: vela, alt: 'Vela' },
    { src: crema, alt: 'Crema' },
    { src: velaDos, alt: 'Vela' },
    { src: skinCare, alt: 'Producto de cuidado de la piel' },
    { src: vincha, alt: 'Vincha' },
];

const cantidadVisible = () => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 4;
};

export default function SellersSection() {
    const { productos = [] } = useContext(ProductsContext);
    const [indice, setIndice] = useState(0);
    const [visibles, setVisibles] = useState(4);
    const productosDestacados = productos.slice(0, 7);
    const maxIndice = Math.max(0, productosDestacados.length - visibles);

    useEffect(() => {
        const actualizarVisibles = () => setVisibles(cantidadVisible());
        actualizarVisibles();
        window.addEventListener('resize', actualizarVisibles);
        return () => window.removeEventListener('resize', actualizarVisibles);
    }, []);

    useEffect(() => {
        setIndice((actual) => Math.min(actual, maxIndice));
    }, [maxIndice]);

    const avanzar = () => setIndice((actual) => Math.min(actual + 1, maxIndice));
    const retroceder = () => setIndice((actual) => Math.max(actual - 1, 0));

    return (
        <section className="sellers-section" aria-labelledby="sellers-section-title">
            <div className="sellers-section__heading">
                <h2 className="sellers-section__title" id="sellers-section-title">Best Sellers</h2>
                <ShopNowButton label="Ver más" className="sellers-section__more" showCartIcon={false} />
            </div>

            <div className="sellers-carousel">
                <button
                    className="sellers-carousel__arrow sellers-carousel__arrow--previous"
                    type="button"
                    aria-label="Ver productos anteriores"
                    onClick={retroceder}
                    disabled={indice === 0}
                >
                    <LuChevronLeft aria-hidden="true" />
                </button>

                <div className="sellers-carousel__viewport">
                    <div
                        className="sellers-carousel__track"
                        style={{
                            '--items-count': productosDestacados.length || 1,
                            '--visible-count': visibles,
                            '--carousel-index': indice,
                        }}
                    >
                        {productosDestacados.map((producto, index) => (
                            <div className="sellers-carousel__item" key={producto.id}>
                                <CardCarrousel
                                    producto={producto}
                                    imagen={imagenesDestacadas[index]?.src}
                                    altImagen={imagenesDestacadas[index]?.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="sellers-carousel__arrow sellers-carousel__arrow--next"
                    type="button"
                    aria-label="Ver más productos"
                    onClick={avanzar}
                    disabled={indice >= maxIndice}
                >
                    <LuChevronRight aria-hidden="true" />
                </button>
            </div>
        </section>
    );
}
