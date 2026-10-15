import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cafe from "../assets/img1.png";
import vanilla from "../assets/img2.png";
import strawberry from "../assets/carousel-cutouts/img3-cutout.png";
import citrus from "../assets/carousel-cutouts/img4-cutout.png";
import chocolate from "../assets/carousel-cutouts/img5-cutout.png";
import lavanda from "../assets/img6.png";
import rosas from "../assets/carousel-cutouts/img7-cutout.png";
import frutosRojos from "../assets/carousel-cutouts/img8-cutout.png";
import "./Carousel3D.css";

const velas = [
    { id: "cafe", nombre: "Vela Café", beneficio: "Su aroma tostado crea una sensación cálida y acogedora, ideal para acompañar una pausa.", imagen: cafe, ancho: 174 },
    { id: "vainilla", nombre: "Vela Vanilla", beneficio: "Sus notas dulces y cremosas aportan calidez y suavidad al ambiente.", imagen: vanilla, ancho: 172 },
    { id: "frutilla", nombre: "Vela Strawberry", beneficio: "Su perfil frutal y dulce suma una sensación alegre y vivaz a tus espacios.", imagen: strawberry, ancho: 182 },
    { id: "citrus", nombre: "Vela Citrus", beneficio: "Las notas de naranja, limón y bergamota dejan una impresión fresca y luminosa.", imagen: citrus, ancho: 182 },
    { id: "chocolate", nombre: "Vela Chocolate", beneficio: "Su aroma dulce y envolvente aporta una sensación reconfortante y cálida.", imagen: chocolate, ancho: 190 },
    { id: "lavanda", nombre: "Vela de Lavanda", beneficio: "Sus notas florales suaves crean una atmósfera serena y relajante.", imagen: lavanda, ancho: 178 },
    { id: "rosas", nombre: "Vela de Rosas", beneficio: "Su fragancia floral delicada suma una sensación armoniosa y romántica.", imagen: rosas, ancho: 174 },
    { id: "frutos-rojos", nombre: "Vela Frutos Rojos", beneficio: "Su mezcla frutal dulce y vibrante aporta una nota fresca y alegre al ambiente.", imagen: frutosRojos, ancho: 184 },
];

export default function Carousel3D() {
    const [inicio, setInicio] = useState(0);
    const [mostrarFicha, setMostrarFicha] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
    const pointerStart = useRef(null);

    useEffect(() => {
        const actualizarAncho = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", actualizarAncho);
        return () => window.removeEventListener("resize", actualizarAncho);
    }, []);

    const mover = (direccion) => {
        setMostrarFicha(true);
        setInicio((actual) => (actual + direccion + velas.length) % velas.length);
    };
    const velaSeleccionada = velas[inicio];

    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            mover(-1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            mover(1);
        }
    };

    const handlePointerDown = (event) => {
        if (event.target.closest("button")) return;
        pointerStart.current = event.clientX;
    };

    const handlePointerUp = (event) => {
        if (pointerStart.current === null) return;
        const desplazamiento = event.clientX - pointerStart.current;
        pointerStart.current = null;
        if (Math.abs(desplazamiento) > 45) mover(desplazamiento < 0 ? 1 : -1);
    };

    return (
        <section
            className="carousel3d"
            aria-label="Colección de velas"
        >
            <div className="carousel3d__scene">
                <h2 className="carousel3d__title">Explorá nuestra colección de velas</h2>
                <div
                    className="carousel3d__stage"
                    id="carousel3d-stage"
                    role="region"
                    aria-roledescription="carrusel"
                    aria-label="Ocho velas en una órbita. Usa las flechas del teclado para navegar."
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={() => { pointerStart.current = null; }}
                >
                    {velas.map((vela, index) => {
                        const posicion = (index - inicio + velas.length) % velas.length;
                        const angulo = (posicion / velas.length) * Math.PI * 2 + Math.PI / 2;
                        const profundidad = Math.sin(angulo);
                        const esSeleccionada = posicion === 0;
                        const escala = 0.75 + ((profundidad + 1) / 2) * 0.29 + (esSeleccionada ? 0.15 : 0);
                        const radioX = viewportWidth <= 480
                            ? Math.min(viewportWidth * 0.32, 150)
                            : viewportWidth <= 768
                                ? Math.min(viewportWidth * 0.34, 300)
                                : Math.min(viewportWidth * 0.36, 440);
                        const radioY = viewportWidth <= 480 ? 60 : viewportWidth <= 768 ? 76 : 85;
                        const style = {
                            "--orbit-x": `${(Math.cos(angulo) * radioX).toFixed(1)}px`,
                            "--orbit-y": `${(profundidad * radioY).toFixed(1)}px`,
                            "--orbit-z": `${Math.round(profundidad * 110)}px`,
                            "--orbit-scale": escala.toFixed(3),
                            "--orbit-order": Math.round((profundidad + 1) * 10),
                            "--candle-width": `${vela.ancho}px`,
                            "--candle-opacity": (0.78 + ((profundidad + 1) / 2) * 0.22).toFixed(2),
                        };

                        return (
                            <div
                                className="carousel3d__item"
                                key={vela.id}
                                style={style}
                                role="button"
                                tabIndex={0}
                                aria-label={`Traer ${vela.nombre} al frente`}
                                aria-pressed={esSeleccionada}
                                onClick={() => {
                                    if (!esSeleccionada) {
                                        setMostrarFicha(true);
                                        setInicio(index);
                                    }
                                }}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        setMostrarFicha(true);
                                        setInicio(index);
                                    }
                                }}
                                onMouseEnter={() => {
                                    if (esSeleccionada) setMostrarFicha(true);
                                }}
                            >
                                <img src={vela.imagen} alt={vela.nombre} draggable="false" />
                            </div>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className="carousel3d__arrow carousel3d__arrow--previous"
                    aria-label="Mostrar la vela anterior"
                    onClick={() => mover(-1)}
                >
                    <FaChevronLeft aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className="carousel3d__arrow carousel3d__arrow--next"
                    aria-label="Mostrar la vela siguiente"
                    onClick={() => mover(1)}
                >
                    <FaChevronRight aria-hidden="true" />
                </button>
            </div>

            {mostrarFicha && (
                <article className="carousel3d__sensory" aria-live="polite" aria-atomic="true">
                    <h3 className="carousel3d__sensory-name">{velaSeleccionada.nombre}</h3>
                    <p className="carousel3d__sensory-description">{velaSeleccionada.beneficio}</p>
                </article>
            )}
        </section>
    );
}
