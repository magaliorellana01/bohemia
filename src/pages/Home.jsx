import { LuTruck, LuLeaf, LuShieldCheck } from 'react-icons/lu';
import Carousel3D from '../components/Carousel3D';
import SellersSection from '../components/SellersSection';
import ShopNowButton from '../components/ShopNowButton';
import NewsletterSection from '../components/NewsletterSection';
import imagenSection1 from '../assets/imgsection1.png';
import imagenSection2 from '../assets/imgsection2.png';
import './Home.css';

export default function Home() {
    return (
        <div className="home-page">
            <Carousel3D />

            <section className="icon-section" aria-label="Beneficios de compra">
                <div className="icon-section__item">
                    <LuTruck className="icon-section__icon" aria-hidden="true" />
                    <h2>Envío Gratis</h2>
                    <p>En compras mayores a $20000</p>
                </div>
                <div className="icon-section__item">
                    <LuLeaf className="icon-section__icon" aria-hidden="true" />
                    <h2>Ingredientes Naturales</h2>
                    <p>Elaboradas con cera vegetal y esencias naturales.</p>
                </div>
                <div className="icon-section__item">
                    <LuShieldCheck className="icon-section__icon" aria-hidden="true" />
                    <h2>Pago Seguro</h2>
                    <p>Tu compra está 100% protegida.</p>
                </div>
            </section>

            <section className="imagen-section" aria-label="Imágenes destacadas">
                <div
                    className="imagen-section__panel"
                    role="group"
                    aria-labelledby="imagen-section-title-aceites"
                >
                    <div
                        className="imagen-section__photo"
                        role="img"
                        aria-label="Frasco de aceite esencial rodeado de plantas"
                        style={{ '--imagen-panel': `url("${imagenSection1}")` }}
                    />
                    <div className="imagen-section__copy">
                        <h2 id="imagen-section-title-aceites">Descubrí nuestros aceites esenciales</h2>
                        <p>Aromas naturales que equilibran tu mente, calman tus emociones y revitalizan tu cuerpo. Nuestros aceites esenciales son 100% puros, extraídos de la naturaleza para acompañarte en tu bienestar diario.</p>
                        <ShopNowButton className="imagen-section__button" />
                    </div>
                </div>
                <div
                    className="imagen-section__panel"
                    role="group"
                    aria-labelledby="imagen-section-title-kits"
                >
                    <div
                        className="imagen-section__photo"
                        role="img"
                        aria-label="Kit de cuidado personal en una caja de regalo"
                        style={{ '--imagen-panel': `url("${imagenSection2}")` }}
                    />
                    <div className="imagen-section__copy">
                        <h2 id="imagen-section-title-kits">Descubrí nuestros kits regalables</h2>
                        <p>Kits de skincare pensados para regalar bienestar. Combinan nuestras cremas naturales con accesorios suaves y prácticos, para una rutina de cuidado completa, relajante y especial.</p>
                        <ShopNowButton className="imagen-section__button" />
                    </div>
                </div>
            </section>

            <SellersSection />
            <NewsletterSection />
        </div>
    );
}
