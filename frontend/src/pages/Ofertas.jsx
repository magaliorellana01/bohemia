import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import kit1 from '../assets/kits/kit1.png';
import kit2 from '../assets/kits/kit2.png';
import kit3 from '../assets/kits/kit3.png';
import kit4 from '../assets/kits/kit4.png';
import kit5 from '../assets/kits/kit5.png';
import kit6 from '../assets/kits/kit6.png';
import './Ofertas.css';

const productosEnOferta = [
  {
    id: 'kit-sunday',
    name: 'Kit Sunday',
    description: 'Kit de rutina de día que incluye: 1 serum facial, 1 crema hidratante y 1 crema para manos.',
    price: 10000,
    image: kit1,
  },
  {
    id: 'kit-vinchas',
    name: 'Kit Vinchas',
    description: 'Incluye 3 vinchas de skincare.',
    price: 10000,
    image: kit2,
  },
  {
    id: 'kit-full',
    name: 'Kit Full',
    description: 'Incluye 1 vincha de skincare, 1 serum facial y 1 rodillo facial.',
    price: 10000,
    image: kit3,
  },
  {
    id: 'kit-soft',
    name: 'Kit Soft',
    description: 'Incluye 3 pads reutilizables, 1 tónico facial y 3 esponjas corporales.',
    price: 10000,
    image: kit4,
  },
  {
    id: 'kit-home-spa',
    name: 'Kit Home Spa',
    description: 'Incluye 1 vela de vainilla, 1 difusor de vainilla, 1 pack de sales de baño, 1 mascarilla facial desinflamante, 1 rodillo facial y 1 vincha de skincare.',
    price: 10000,
    image: kit5,
  },
  {
    id: 'kit-night',
    name: 'Kit Night',
    description: 'Incluye 1 gel limpiador facial, 1 serum regenerador, 1 crema hidratante de noche y 1 contorno de ojos.',
    price: 10000,
    image: kit6,
  },
];

export default function Ofertas() {
  return (
    <>
      <div className="bg-light py-5 mb-4 text-center shadow-sm">
        <Container>
          <h1 className="ofertas__title">Ofertas por tiempo limitado</h1>
          <p className="ofertas__subtitle">Disfrutá nuestro 30% off en Kits esenciales</p>
        </Container>
      </div>

      <Container className="ofertas__products" style={{ paddingBottom: '50px' }}>
        <Row className="g-4">
          {productosEnOferta.map((producto) => (
            <Col lg={4} md={6} xs={12} key={producto.id}>
              <ProductCard producto={producto} showFullDescription />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
