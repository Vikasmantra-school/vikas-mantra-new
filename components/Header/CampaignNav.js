import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
const CampaignNav = () => {
    return (
        <>
            <section className={styles.CampaignNavSection}>
                <div className='container'>
                    <div className='row align-items-center py-1'>
                        <div className={' col-md-3 col-sm-3'}>
                            <a className={styles.mainLogo + ' ' + 'navbar-brand'}>
                                <img src='/assets/vmps-color.png' alt='image' />
                            </a>
                        </div>
                        <div className={styles.mobHide + ' col-md-3 col-sm-3'}>
                            <a href="tel:7092 450 450>">
                                Phone: +91 7092 450 450
                            </a>
                        </div>
                        <div className={styles.mobHide + ' col-md-3 col-sm-3'}>
                            <p><a href="info@vikasmantra.org" >Email: info@vikasmantra.org</a></p>
                        </div>
                        <div className={styles.mobHide + ' col-md-3 col-sm-3'}>

                            <ul className='d-flex align-items-center list-unstyled'>

                                <li className={styles.star}>
                                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                </li>

                                <li className={styles.star}>
                                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                </li>

                                <li className={styles.star}>
                                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                </li>

                                <li className={styles.star}>
                                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                </li>

                                <li className={styles.star}>
                                    <FontAwesomeIcon icon={faStarHalf} className={styles.starIcon} />
                                </li>

                                <li className={styles.star}>(50+ Google Reviews)</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CampaignNav;