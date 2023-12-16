import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="h-32 flex justify-center items-center text-white" style={{ backgroundColor: "rgb(24, 24, 24)" }}>
            <p>&copy; Copyrights <Link to="/contact">Kotekpsotek</Link> {new Date().getFullYear()}</p>
        </footer>
    )
}