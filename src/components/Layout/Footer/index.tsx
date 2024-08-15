import styles from "./index.module.css";
import logo from "../../public/images/greencal_white.png";
import Image from "next/image";
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.grid}>
                <div>
                    <h2 className='text-2xl'>
                        UNILAG GREENHUB
                    </h2>
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
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Useful Links</h2>
                    <ul className="text-white dark:text-gray-400 font-medium">
                        <li className="mb-4 text-white">
                            <Link href='/about'>
                                About UNILAG GREENHUB
                            </Link>
                        </li>
                        <li className="mb-4 text-white">
                            <Link href='/activities'>
                                Activities
                            </Link>
                        </li>
                        <li className="mb-4 text-white">
                            <Link href='/volunteer'>
                                Volunteer
                            </Link>
                        </li>
                        <li className="mb-4 text-white">
                            <Link href='/contact'>
                                Contact Us
                            </Link>
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
