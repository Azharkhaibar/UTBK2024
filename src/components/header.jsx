import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import '../Responsive.css'


const Header = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const headerRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

     useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

      const translateY = -scrollY / 4;

    return(
        <div className="header">
            <div className="header-container" style={{transform: `translateY(${translateY}px)`}}>
                <h1 ref={headerRef} className="texth1-header" >Survey UTBK<br/> UI Depok 2024🔥
</h1>
                <div
                    className="image-scroll"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    ref={containerRef}
                >
                    <div className="image-scroll-container">
                        <img src="/image/Gedung-Pusat-Administrasi-Universitas-UI-Depok.jpeg" alt="1"/>
                        <img src="/image/5e61db2a7e65b.jpg" alt="2"/>
                        <img src="/image/ftui-buka-program-profesi-insinyur-jalur-rpl-catat-infonya_120847.jpeg"
                             alt="3"/>
                        <img src="/image/makara-universitas-indonesia.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
