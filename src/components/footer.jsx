import '../App.css';
import '../Responsive.css';
import { useState , useEffect} from "react";

const Footer = () => {
    const [ scrolledNewVersion , setScrolledNewVersion ] = useState(false);
    const [ hiddenScrolledNew , setHiddenScrolledNew ] = useState(false);

    useEffect(() => {
        const handleAtNewScroll = () => {

        }
    }, []);

    return(
        <>
            <div className="footer">
                <div className="footer-container">
                    <h3>Semoga berhasil dan lancar dalam menghadapi UTBK! Semoga persiapan yang telah dilakukan memberikan hasil yang memuaskan dan membawa kesuksesan bagi kamu dalam mencapai impianmu.</h3>
                    <a href="#">
                        <img src="/image/right.png"></img>
                    </a>
                </div>

                <div className="terakhir">
                    <h4>Made with ❤ by Azhar</h4>
                </div>
            </div>
        </>
    )
}

export default Footer;