import velaCafe from "../assets/velas-aromaticas/vela-aromatica1.png";
import kitSunday from "../assets/kits/kit1.png";
import cremaNutritiva from "../assets/cremas-faciales/crema1.png";
import mantecaCorporal from "../assets/cremas-corporales/crema1.png";
import bandejaCeramica from "../assets/accesorios-velas/bandeja1.png";
import aceitesEsenciales from "../assets/aromas/aceites.png";
import velaVainilla from "../assets/velas-aromaticas/vela-aromatica2.png";
import balsamosLabiales from "../assets/cremas-faciales/balsamos.png";
import velaStrawberry from "../assets/carousel-cutouts/img3-cutout.png";
import serumFacial from "../assets/cremas-faciales/serum1.png";
import jabonesFrutales from "../assets/cremas-corporales/jabones.png";
import velaChocolate from "../assets/carousel-cutouts/img5-cutout.png";
import sprayAromatizante from "../assets/aromas/spray.png";
import velaCitrus from "../assets/carousel-cutouts/img4-cutout.png";
import vinchasSkincare from "../assets/kits/kit2.png";
import kitHomeSpa from "../assets/kits/kit5.png";
import velaRosas from "../assets/carousel-cutouts/img7-cutout.png";
import exfolianteCorporal from "../assets/cremas-corporales/crema2.png";
import kitFull from "../assets/kits/kit3.png";
import sahumerios from "../assets/aromas/sahumerios.png";
import velaFrutosRojos from "../assets/carousel-cutouts/img8-cutout.png";
import kitNight from "../assets/kits/kit6.png";
import difusor from "../assets/accesorios-velas/difusor.png";
import cremaHidratante from "../assets/cremas-faciales/crema2.png";
import bombasBano from "../assets/cremas-corporales/sales.png";
import hornito from "../assets/accesorios-velas/hornito1.png";
import kitSoft from "../assets/kits/kit4.png";
import velaLavanda from "../assets/img6.png";
import portaIncienso from "../assets/accesorios-velas/porta-inciensos.png";

// Catálogo local de ejemplo mientras se prepara la API propia.
export const productosIniciales = [
    {
        id: "vela-cafe",
        name: "Vela Caf\u00e9",
        price: 10000,
        description: "Aroma c\u00e1lido a caf\u00e9 y vainilla para crear un ambiente acogedor.",
        category: "Velas arom\u00e1ticas",
        image: velaCafe,
    },
    {
        id: "kit-sunday",
        name: "Kit Sunday",
        price: 10000,
        description: "Rutina de d\u00eda con serum, crema hidratante y crema para manos.",
        category: "Kits",
        image: kitSunday,
    },
    {
        id: "crema-nutritiva",
        name: "Crema Nutritiva",
        price: 10000,
        description: "Hidrataci\u00f3n diaria con textura suave para una piel luminosa.",
        category: "Productos faciales",
        image: cremaNutritiva,
    },
    {
        id: "manteca-corporal",
        name: "Manteca Corporal",
        price: 10000,
        description: "Nutrici\u00f3n cremosa con karit\u00e9, coco y almendra para una piel suave.",
        category: "Productos corporales",
        image: mantecaCorporal,
    },
    {
        id: "bandeja-ceramica",
        name: "Bandeja de Cer\u00e1mica",
        price: 10000,
        description: "Ideal para decorar y organizar tus velas y accesorios favoritos.",
        category: "Accesorios",
        image: bandejaCeramica,
    },
    {
        id: "aceites-esenciales",
        name: "Aceites esenciales",
        price: 10000,
        description: "Aromas concentrados para usar en hornitos o difusores.",
        category: "Aromas",
        image: aceitesEsenciales,
        options: ["Lavanda", "Menta", "Eucalipto", "Árbol de té", "Naranja dulce", "Romero"],
    },
    {
        id: "vela-vainilla",
        name: "Vela de Vainilla",
        price: 10000,
        description: "Notas de vainilla, almendra y coco para un ambiente c\u00e1lido.",
        category: "Velas arom\u00e1ticas",
        image: velaVainilla,
    },
    {
        id: "balsamos-labiales",
        name: "B\u00e1lsamos labiales",
        price: 10000,
        description: "B\u00e1lsamos de distintos aromas que hidratan y suavizan los labios.",
        category: "Productos faciales",
        image: balsamosLabiales,
    },
    {
        id: "vela-strawberry",
        name: "Vela Strawberry",
        price: 10000,
        description: "Aroma dulce a frutillas para un ambiente alegre y acogedor.",
        category: "Velas arom\u00e1ticas",
        image: velaStrawberry,
    },
    {
        id: "serum-facial",
        name: "Serum Facial",
        price: 10000,
        description: "Textura ligera para acompa\u00f1ar tu rutina diaria de cuidado facial.",
        category: "Productos faciales",
        image: serumFacial,
    },
    {
        id: "jabones-frutales",
        name: "Jabones Frutales",
        price: 10000,
        description: "Jabones perfumados con notas frutales para tu rutina diaria.",
        category: "Productos corporales",
        image: jabonesFrutales,
    },
    {
        id: "vela-chocolate",
        name: "Vela Chocolate",
        price: 10000,
        description: "Aroma envolvente a chocolate para un ambiente c\u00e1lido y dulce.",
        category: "Velas arom\u00e1ticas",
        image: velaChocolate,
    },
    {
        id: "spray-aromatizantes",
        name: "Spray Aromatizantes",
        price: 10000,
        description: "Una bruma perfumada para renovar el aroma de tus espacios.",
        category: "Aromas",
        image: sprayAromatizante,
    },
    {
        id: "vela-citrus",
        name: "Vela Citrus",
        price: 10000,
        description: "Notas c\u00edtricas frescas para llenar tus espacios de energ\u00eda.",
        category: "Velas arom\u00e1ticas",
        image: velaCitrus,
    },
    {
        id: "vincha-skincare",
        name: "Kit Vincha de Skincare",
        price: 10000,
        description: "3 vinchas de skincare.",
        category: "Accesorios",
        image: vinchasSkincare,
    },
    {
        id: "kit-home-spa",
        name: "Kit Home Spa",
        price: 10000,
        description: "Incluye 1 vela de vainilla, 1 difusor de vainilla, 1 pack de sales de ba\u00f1o, 1 mascarilla facial desinflamante, 1 rodillo facial y 1 vincha de skincare.",
        category: "Kits",
        image: kitHomeSpa,
    },
    {
        id: "vela-rosas",
        name: "Vela de Rosas",
        price: 10000,
        description: "Aroma floral de rosas que aporta un toque delicado y envolvente.",
        category: "Velas arom\u00e1ticas",
        image: velaRosas,
    },
    {
        id: "exfoliante-corporal",
        name: "Exfoliante Corporal",
        price: 10000,
        description: "Una exfoliaci\u00f3n suave para dejar la piel tersa y renovada.",
        category: "Productos corporales",
        image: exfolianteCorporal,
    },
    {
        id: "kit-full",
        name: "Kit Full",
        price: 10000,
        description: "Incluye 1 vincha de skincare, 1 serum facial y 1 rodillo facial.",
        category: "Kits",
        image: kitFull,
    },
    {
        id: "sahumerios",
        name: "Sahumerios",
        price: 10000,
        description: "Fragancia envolvente para crear un ambiente c\u00e1lido y relajante.",
        category: "Aromas",
        image: sahumerios,
    },
    {
        id: "vela-frutos-rojos",
        name: "Vela de Frutos Rojos",
        price: 10000,
        description: "Aroma frutal y dulce que envuelve tus espacios con calidez.",
        category: "Velas arom\u00e1ticas",
        image: velaFrutosRojos,
    },
    {
        id: "kit-night",
        name: "Kit Night",
        price: 10000,
        description: "Incluye 1 gel limpiador facial, 1 serum regenerador, 1 crema hidratante de noche y 1 contorno de ojos.",
        category: "Kits",
        image: kitNight,
    },
    {
        id: "difusor",
        name: "Difusor",
        price: 10000,
        description: "Perfuma tus espacios de forma continua con un aroma sutil.",
        category: "Aromas",
        image: difusor,
    },
    {
        id: "crema-hidratante",
        name: "Crema Hidratante",
        price: 10000,
        description: "Hidrataci\u00f3n diaria con una textura suave y confortable.",
        category: "Productos faciales",
        image: cremaHidratante,
    },
    {
        id: "bombas-bano",
        name: "Bombas de Ba\u00f1o",
        price: 10000,
        description: "Bombas efervescentes para convertir tu ba\u00f1o en un momento de relax.",
        category: "Productos corporales",
        image: bombasBano,
    },
    {
        id: "hornito",
        name: "Hornito",
        price: 10000,
        description: "Ideal para disfrutar tus aromas favoritos y crear un ambiente c\u00e1lido.",
        category: "Accesorios",
        image: hornito,
    },
    {
        id: "kit-soft",
        name: "Kit Soft",
        price: 10000,
        description: "Incluye 3 pads reutilizables, 1 t\u00f3nico facial y 3 esponjas corporales.",
        category: "Kits",
        image: kitSoft,
    },
    {
        id: "vela-lavanda",
        name: "Vela de Lavanda",
        price: 10000,
        description: "Aroma floral de lavanda para acompa\u00f1ar tus momentos de calma.",
        category: "Velas arom\u00e1ticas",
        image: velaLavanda,
    },
    {
        id: "porta-incienso",
        name: "Porta Incienso",
        price: 10000,
        description: "Un detalle decorativo para acompañar tus sahumerios y aromas.",
        category: "Accesorios",
        image: portaIncienso,
    },
];
