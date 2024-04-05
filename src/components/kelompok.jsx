import React, { useState, useEffect } from "react";
import "../App.css";



const Kelompok = () => {
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrollingDown(scrollTop > (window.lastScrollTop || 0));
            window.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Menyimpan nilai scroll terakhir
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (


        <div className="kelompok" id="kelompokpelaksanaan">

            <img
                src="/image/lettering-lettering-text-our-team.png"
                alt="team-lettering"
                className={isScrollingDown ? "fade-in" : "fade-out"}
            />
            <div className="kelompok-item">
                <div className="kelompok-left">
                    <img
                        src="/image/business-3d-three-young-women-with-phones.png"
                        alt="team-members"
                        className={isScrollingDown ? "fade-in" : "fade-out"}
                    />
                </div>

                <div className="kelompok-right">
                    <h2>🟠
                        Ketua kel 1</h2>
                    <div className="ketua">
                        <div className="ketua-item">
                            <img src="/image/WhatsApp Image 2024-04-03 at 14.51.18_89c4a879.jpg"></img>
                            <h3>Fito</h3>
                            <a href="tel:+6287871980969">
                                <button className="ketua-btn">Contact</button>
                            </a>
                        </div>

                        <div className="ketua-item">
                            <img src="/image/WhatsApp Image 2024-04-03 at 14.47.32_8271a42e.jpg"></img>
                            <h3>Rayhan</h3>
                            <a href="tel:+6285774888260">
                                <button className="ketua-btn">Contact</button>
                            </a>
                        </div>
                    </div>
                    <h2>🟢Ketua kel 2</h2>
                    <div className="ketua">
                        <div className="ketua-item">
                            <img src="image/WhatsApp Image 2024-04-03 at 17.03.18_1ac3abab.jpg"></img>
                            <h3>Azhar</h3>
                            <a href="tel:+6281317539390">
                                <button className="ketua-btn">Contact</button>
                            </a>
                        </div>

                        <div className="ketua-item">
                            <img src="/image/WhatsApp Image 2024-04-03 at 14.31.27_9afff31d.jpg"></img>
                            <h3>Ibad</h3>
                            <a href="tel:+6281586844216">
                                <button className="ketua-btn">Contact</button>
                            </a>
                        </div>
                    </div>
                    <h2>🔵Ketua kel 3</h2>
                    <div className="ketua">
                        <div className="ketua-item">
                            <img src="image/WhatsApp Image 2024-04-03 at 17.13.29_5a327e99.jpg"></img>
                            <h3>Zaira</h3>
                            <a href="tel:+6285280736268">
                                <button className="ketua-btn">Contact</button>
                            </a>
                        </div>

                        <div className="decor"></div>
                        <div className="decor1"></div>

                        <div className="ketua-item">
                            <img src="image/WhatsApp Image 2024-04-03 at 19.28.42_300ca7f2.jpg"></img>
                            <h3>Aulia</h3>
                            <a href="tel:+6285559757950">
                                <button className="ketua-btn">Contact</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kelompok;
