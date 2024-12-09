import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
const CampaignNav = () => {
    return (
        <>
            <section className={styles.CampaignNavSection}>
                <div className='container'>
                    <div className='row align-items-center'>

                        <div className='col-md-2'>
                            <a className={styles.CampaignLogo + ' ' + ' navbar-brand'}>
                                <img src='/images/VMPS-Logo-1.png' alt='vikas logo' />
                            </a>
                        </div>

                        <div className={styles.menuSection + ' col-md-10'}>
                            <nav className="navbar float-end"> 
                                <ul className="d-flex list-unstyled align-items-center">
                                    <li className={styles.mobHide + ' ' + styles.NavPhone + ' d-flex align-items-center'}>
                                        <span class="material-symbols-outlined mx-2">call</span>
                                        <a href="tel:+917092450450"> Phone: +91 7092 450 450 </a>
                                    </li>

                                    <li className={styles.mobHide + ' ' + styles.NavPhone}>
                                        <a href="mailto:info@vikasmantra.org" >Email: info@vikasmantra.org</a>
                                    </li>

                                    <li className={styles.mobHide + ' ' + styles.NavPhone + ' d-flex align-items-center'}>
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star</span>
                                        <span class="material-symbols-outlined">star_half</span>
                                        <span >(41+ Google Reviews)</span>
                                    </li>
                                </ul>

                            </nav>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CampaignNav;