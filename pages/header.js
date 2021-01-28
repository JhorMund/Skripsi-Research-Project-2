import Link from 'next/link';
import { useSelector } from 'react-redux';

const linkStyle = {
    marginRight: 15
};

const Header = () => {
    const cart = useSelector(state => state.cart.items);
    const wishlist = useSelector(state => state.wishlist.items);

    return (
        <div>
            <Link href="/components">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/cart">
                <a style={linkStyle}>Cart({Object.keys(cart).length})</a>
            </Link>
            {/* <Link href="/wishlist">
                <a style={linkStyle}>Wishlist({Object.keys(wishlist).length})</a>
            </Link> */}
        </div>
    )
}

export default Header;