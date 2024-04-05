import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { gsap } from "gsap";

const About = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollOffset = window.scrollY;
            setIsScrolled(scrollOffset > 100);
            setIsHidden(scrollOffset > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(textRef.current, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5
            });
        }
    }, []);

    return (
        <div id="aboutpelaksanaan"  id={`about ${isScrolled ? 'scrolled' : ''}`}>
            <div className={`about-container ${isHidden ? 'hidden' : ''}`}>
                <p ref={textRef}>kita menyediakan informasi penting seputar Survey pada tanggal 20 April, termasuk penjadwalan, kontak, ketua acara, dan lokasi Tikum. Tujuan survey ini adalah untuk memberikan pandangan yang lebih kaya tentang tempat UTBK dan sekitarnya</p>
                <button className="btn-link-grup">Gabung</button>
            </div>
        </div>

    );
};

export default About;
