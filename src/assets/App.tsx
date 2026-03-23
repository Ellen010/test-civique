import Hero from '../components/Hero.tsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";


function App() {
    return (

    <Router>
        <div className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Routes */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                        </>
                    }
                />
                <Route path="/hero" element={<Hero />} />
            </Routes>

            {/* Footer   <Footer /> */}

        </div>
    </Router>
);
}

export default App