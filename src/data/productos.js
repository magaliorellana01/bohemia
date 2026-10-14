// Datos temporales del catálogo hasta que exista la API propia.
// src/assets solo contiene el logo y el SVG de React; se reutiliza la imagen
// de respaldo que ProductCard ya mostraba cuando falla una imagen de producto.
const imagenProducto = "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=500&auto=format&fit=crop";

export const productosIniciales = [
    { id: "vela-lavanda", name: "Vela de Lavanda", price: 8500, description: "Vela artesanal de cera de soja con un aroma floral suave y relajante.", category: "Velas Florales", image: imagenProducto },
    { id: "vela-rosa", name: "Vela de Rosas", price: 9200, description: "Una fragancia floral delicada, elaborada a mano para acompañar tus momentos.", category: "Velas Florales", image: imagenProducto },
    { id: "vela-jazmin", name: "Vela de Jazmín", price: 8900, description: "Vela de soja con notas de jazmín para crear un ambiente cálido en casa.", category: "Velas Florales", image: imagenProducto },
    { id: "vela-limon", name: "Vela de Limón", price: 7800, description: "Aroma cítrico y fresco en una vela artesanal de cera de soja natural.", category: "Velas Cítricas", image: imagenProducto },
    { id: "vela-naranja", name: "Vela de Naranja", price: 8100, description: "Una fragancia cítrica luminosa, preparada artesanalmente con cera de soja.", category: "Velas Cítricas", image: imagenProducto },
    { id: "vela-verbena", name: "Vela de Verbena", price: 8400, description: "Vela artesanal con notas verdes y cítricas para refrescar tus espacios.", category: "Velas Cítricas", image: imagenProducto },
    { id: "kit-relax", name: "Kit Relax", price: 15500, description: "Un set de velas artesanales pensado para acompañar tus momentos de descanso.", category: "Kits de Regalo", image: imagenProducto },
    { id: "kit-aromas", name: "Kit de Aromas", price: 17800, description: "Selección de velas de soja para regalar y descubrir nuevas fragancias.", category: "Kits de Regalo", image: imagenProducto },
];
