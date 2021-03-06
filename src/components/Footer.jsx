import React, { Children } from 'react';
import '../assets/styles/components/Footer.scss'

const Footer = ({ children }) => {
    return (
        <footer className="footer">
            <a href="/">Terminos de uso</a>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
        </footer>
    )
}

export default Footer;