import styles from './style.module.css'
import Link from 'next/link'

const BlogDates = () => {
    return (
        <>
            <div className={styles.colBg + ' col-md-4'}>

                <h4>Latest Blog</h4>
                <hr />

                <Link href='/about/blog/blog1'>
                    <a>BENEFITS OF YOGA FOR SCHOOL STUDENTS</a>
                </Link>
                <p className='greyText'>26-July-2022</p>

                <Link href='/about/blog/blog2'>
                    <a>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</a>
                </Link>
                <p className='greyText'>26-July-2022</p>

            </div>
        </>
    )
}

export default BlogDates;