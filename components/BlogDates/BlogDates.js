import styles from './style.module.css'
import Link from 'next/link'

export const BlogDates = () => {
    return (
        <>
            <div className={styles.colBg + ' AnimeStarts '}>

                <h4 className='AnimeElement'>Latest Blog</h4>
                <hr />

                <Link href='/about/blog/blog14'>
                    <a className='AnimeElement'>Nurturing Balance Through Yoga: A Path to Inner and Outer Growth</a>
                </Link>
                <p className='greyText AnimeElement'>10-March-2025</p>

                <Link href='/about/blog/blog13'>
                    <a className='AnimeElement'>Celebrations at Vikas Mantra Public School: Nurturing Joy, Unity & Learning</a>
                </Link>
                <p className='greyText AnimeElement'>22-Feburary-2025</p>

            </div>
        </>
    )
}