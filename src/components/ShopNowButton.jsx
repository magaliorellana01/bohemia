import { Link } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';
import './ShopNowButton.css';

export default function ShopNowButton({ label = 'Shop Now', to = '/productos', className = '', showCartIcon = true }) {
    return (
        <Link className={`shop-now-button ${className}`.trim()} to={to}>
            {showCartIcon && <LuShoppingCart aria-hidden="true" />}
            <span>{label}</span>
        </Link>
    );
}
