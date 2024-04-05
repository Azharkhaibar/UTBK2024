import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import '../App.css';
import '../Responsive.css';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const Jadwal = () => {
    useEffect(() => {
        gsap.to('.texth2-pelaksanaan', {
            duration: 3,
            text: "Jadwal Survey",
            ease: "none",
        });
    }, []);

    return (
        <div className="pelaksanaan" id="jadwalpelaksanaan">
            <div className="pelaksanaan-container">
                <h2 className="texth2-pelaksanaan"></h2>
                <div className="jadwal">
                    <div className="jadwal-item">
                        <h3>📅Tgl/Hari</h3>
                        <h3>Sabtu, 20 April 2024</h3>
                    </div>
                    <div className="jadwal-item">
                        <h3>⏰Jam</h3>
                        <h3>9.30 wib udah di stasiun UI</h3>
                    </div>
                    <div className="jadwal-item">
                        <h3>📌Tikum</h3>
                        <h3>stasiun Universitas Indonesia</h3>
                    </div>
                    <div className="notes">
                        <h4>Notes : </h4>
                        <p>1. Jaga Barang-barang: Pastiin selalu ngejagain barang-barang kamu dengan baik, terutama di tempat umum kayak stasiun. Jangan sampe barang-barang berharga kamu diambil orang lain.</p>
                        <p>2. Awasi Sekeliling: kamu harus selalu waspada sama sekitar mu. Kadang ada orang yang aneh-aneh, jadi pastiin kmu selalu siap sedia.</p>
                        <p>3. Tetap Nyantai: kamu pastiin juga udah siapin semua yang kmu butuhin buat perjalanan. Jangan ampe ketinggalan barang penting kayak tiket atau dokumen lainnya.</p>
                        <p>4. Jaga Kesehatan: Terakhir, jangan lupa juga jaga kesehatan dan kebersihan diri kmu. Pakai masker kalo perlu, dan jaga jarak fisik kalo bisa.</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jadwal;
