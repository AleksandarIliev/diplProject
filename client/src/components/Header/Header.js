import { useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated, email } = useContext(AuthContext);
    return (
        <header className="App-header">
            <Link to="/" rel="noopener noreferrer">Home</Link>
            <Link to="/catalog" rel="noopener noreferrer">Catalog</Link>
            {isAuthenticated && (
                <>
                <span>{email}</span>
                <Link to="/addProduct" rel="noopener noreferrer">Add product</Link>
                <Link to="/contact" rel="noopener noreferrer">Contact</Link>
                <Link to="/logout" rel="noopener noreferrer">Logout</Link>
                </>
            )}
            {!isAuthenticated && (
                <>
                <Link to="/login" rel="noopener noreferrer">Login</Link>
                <Link to="/register" rel="noopener noreferrer">Register</Link>
                </>
            )}
        </header>
    );
}