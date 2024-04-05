import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/about";
import React from "react";
import Kelompok from "../components/kelompok";
import Gallery from "../components/gallery";
import Jadwal from "../components/jadwal";
import Maps from "../components/maps";
import Contact from "../components/contact";
import footer from "../components/footer";
import Footer from "../components/footer";

function FirstPage(props){
    return (
        <>
        <Navbar />
            <Header />
            <About />
            <Kelompok />
            <Gallery />
            <Jadwal />
            <Maps />
            <Contact />
            <Footer />
        </>
    )
}

export default FirstPage;


