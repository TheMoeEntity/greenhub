import styles from "./index.module.css";
import logo from "../../public/images/greencal_white.png";
import Image from "next/image";
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.grid}>
                <div>
                    <div className={styles.logo}>
                        UNILAG GREENHUB
                    </div>
                    <p> Greencal Foundation: Where Compassion Meets Need

                    </p>
                    <strong>Opening Hours :</strong> Monday Sat: 8am to 5pm

                    <div className={styles.icons}>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div>
                    <h2 style={{ marginLeft: '30px' }}>CONTACT INFO</h2>
                    <div>
                        <div>
                            <i style={{ fontSize: '20px' }} className="fas fa-map-marker"></i>
                        </div>
                        <div>Opinion Nigeria LTD prince and princess ishieke Abakaliki</div>
                    </div>

                    <div>
                        <div>
                            <i style={{ fontSize: '20px' }} className="fa-solid fa-phone"></i>

                        </div>
                        <div>
                            (+234) 811 617 7509 &nbsp; (234) 803 656 5354
                        </div>
                    </div>
                    <div>
                        <div style={{ width: '50px' }} className={styles.footerIcons}>
                            <i style={{ fontSize: '20px' }} className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            greencalfoundation@gmail.com</div>
                    </div>
                </div>
                <div>
                    <h2>OUR ACTIVITIES</h2>
                    <div>
                        <i className="fa fa-angle-right"></i>
                        Plant Care
                    </div>
                    <div>
                        <i className="fa fa-angle-right"></i>
                        Recycling
                    </div>
                    <div>
                        <i className="fa fa-angle-right"></i>
                        Waste Management
                    </div>
                    <div>
                        <i className="fa fa-angle-right"></i>
                        Circular Economy Bazaar
                    </div>
                    <div>
                        <i className="fa fa-angle-right"></i>
                        Summer Hangout
                    </div>
                    <div>
                        <i className="fa fa-angle-right"></i>
                        Community Engagement
                    </div>
                </div>
            </div>

            {/* <div className={styles.copyright}>
        <div>© {new Date().getFullYear()} Greencal Foundation.</div>
      </div> */}
        </div>
    );
};

export default Footer;
