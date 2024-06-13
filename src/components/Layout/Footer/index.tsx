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
                    <p>
                        Your go-to learning center for everything you need to know about circular economy, environmental sustainability, waste management, climate change and carbon literacy
                    </p>
                    <strong>Opening Hours :</strong> Monday - Friday: 8am to 5pm

                    <div className={styles.icons}>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="">
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
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
