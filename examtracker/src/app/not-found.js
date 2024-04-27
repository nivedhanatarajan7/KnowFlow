import Link from "next/link"
import "./globals.css"
import Navbar from "./components/NavBar";
const NotFound = () => {
    return (
        <div>
            <Navbar />
            <main className="error">
                <h1>404 - Page Not Found</h1>
                <p>We cannot find the page you are looking for!</p>
                <p>Go back to the <Link href="/schedule">Schedule Dashboard</Link></p>
            </main>
            
        </div>
    )
}

export default NotFound;