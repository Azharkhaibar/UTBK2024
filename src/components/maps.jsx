import '../App.css';
import '../Responsive.css';


const Maps = () => {
    return (
        <>
            <div className="maps">
                <h1>Lokasi</h1>
                <div className="maps-container">
                    <div className="left-map">
                        <h2>Hai gess, jangan lupa ya tetap selalu waspada di jalan, btw yang naik motor bisa parkir di
                            tempat yang aman, <span>disarankan parkir di penitipan dekat Stasiun.</span></h2>

                        <h2>biar barengan Sesuaikan Tikum di Stasiun dekat kalian masing masing yah.</h2>
                        <button className="btnmaps"></button>
                    </div>
                    <div className="right-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2573315291424!2d106.82917197506212!3d-6.360731093629298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec3d61f5bcb1%3A0xa52daf86c7985567!2sStasiun%20Universitas%20Indonesia!5e0!3m2!1sid!2sid!4v1712114792132!5m2!1sid!2sid"
                            width="600" height="450" style={{border: '0'}} allowFullScreen={true}
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maps;
