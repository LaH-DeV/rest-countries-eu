import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Made for <a href="https://global4net.com">global4net</a> by <a href="https://github.com/LaH-DeV">Przemysław Dylewski</a></p>
            <p> {currentYear}</p>
        </footer>
    )
}

export default Footer;