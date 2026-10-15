import { useState } from 'react';
import './NewsletterSection.css';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const suscribir = (event) => {
        event.preventDefault();
        setMensaje('El formulario todavía no está conectado.');
    };

    return (
        <section className="newsletter-section" aria-labelledby="newsletter-title">
            <div className="newsletter-section__copy">
                <h2 id="newsletter-title">Sé parte de nuestra comunidad!</h2>
                <p>Obtené descuentos exclusivos suscribiéndote a nuestro newsletter.</p>
            </div>

            <form className="newsletter-section__form" onSubmit={suscribir}>
                <label className="visually-hidden" htmlFor="newsletter-email">Tu correo electrónico</label>
                <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Ingresá tu email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setMensaje('');
                    }}
                    required
                />
                <button className="shop-now-button newsletter-section__submit" type="submit" disabled={!email.trim()}>
                    Suscribirme
                </button>
                {mensaje && <p className="newsletter-section__message" role="status">{mensaje}</p>}
            </form>
        </section>
    );
}
