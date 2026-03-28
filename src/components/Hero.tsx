import React from 'react';
import Puppy from "../../public/puppy-one.png";

const Hero = () => {
    return (
        <section id="hero" className="general">
            <div className="items-center">
                <h1 className="text-8xl font-bold chango">
                    Pass Your French (2026 Guide)
                </h1>
                <img src={Puppy} alt="Cute puppy" className="puppy" />
            </div>
        </section>
    );
};

export default Hero;
