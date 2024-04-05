import '../App.css';
import '../Responsive.css';

const Contact = () => {
    return (
        <div id="contactpelaksanaan" className="contact" style={{backgroundImage: 'url("/image/10893332.jpg")'}}>
            <h1>Ada pertanyaan? Hubungi kami!</h1>
            <div className="contact-overlay">
                <div className="contact-person">
                    <h2>Azhar</h2>
                    <a href="https://wa.me/6281317539390" className="contact-btn">Contact<img src="/whatsapp.png"></img></a>

                </div>

                <div className="contact-person">
                    <h2>Iqbal</h2>
                    <a href="https://wa.me/6289617881050" className="contact-btn">Contact<img src="/whatsapp.png"></img></a>

                </div>

                <div className="contact-person">
                    <h2>Ibad</h2>
                    <a href="https://wa.me/6281586844216" className="contact-btn">Contact<img src="/whatsapp.png"></img></a>

                </div>
            </div>
            <div className="dekorasi"></div>
        </div>
    );
}

export default Contact;
