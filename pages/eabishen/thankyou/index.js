import style from './style.module.css'
import Navbar from '../../components/Header/CampaignNav'
import Link from 'next/link'


const ThankYou = () => {

    return (
        <>
            <Navbar />
            <section className={style.formSection}>
                <div className={style.formContainer + ' ' + ' container'}>
                    <div className='row align-items-center'>

                        <div className="col-md-8 offset-md-1">
                            <h1 className={style.thankyou}>Thank you for registering</h1>
                            <h4 className={style.contact}>One of our representatives will contact you soon.</h4>
                        </div>

                        <div className="col-md-3">
                            <Link href='/campaign'><a className={style.goHome}>Go Home</a></Link>
                        </div>

                    </div>
                </div>
            </section>

            <section className='text-center bg-dark py-2'>
                <p className={'m-0 ' + style.copyText}>Copyrights © 2022. All rights reserved.</p>
            </section>

        </>
    );
}

export default ThankYou;