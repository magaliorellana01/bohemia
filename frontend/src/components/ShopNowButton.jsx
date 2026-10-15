import { Link } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';
import './ShopNowButton.css';

export default function ShopNowButton({
    label = 'Shop Now',
    to = '/productos',
    className = '',
    showCartIcon = true,
    asButton = false,
    onClick,
    type = 'button',
    disabled = false,
    ariaPressed,
}) {
    const buttonContent = (
        <>
            {showCartIcon && <LuShoppingCart aria-hidden="true" />}
            <span>{label}</span>
        </>
    );

    if (asButton) {
        return (
            <button
                className={`shop-now-button ${className}`.trim()}
                type={type}
                onClick={onClick}
                disabled={disabled}
                aria-pressed={ariaPressed}
            >
                {buttonContent}
            </button>
        );
    }

    return (
        <Link className={`shop-now-button ${className}`.trim()} to={to}>
            {buttonContent}
        </Link>
    );
}
