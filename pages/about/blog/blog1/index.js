import styles from './style.module.css'
import BlogDates from '../../../../components/BlogDates/BlogDates'
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb'

const Blog1 = () => {
  const pageTitle = 'About'

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className='pt-4'>
        <div className='container position-relative'>
          <div className={styles.blogRow1 + 'row py-5'}>
            <div className='col-md-6'>
              <h2>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</h2>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionContainer + ' whitebg position-relative ' + ' ' + styles.BlogvectorImg2 + ' ' + styles.BlogvectorImg3} >
        <div className='container'>
          <div className='row py-5 align-items-center '>
            <div className='col-md-6'>
              <p>
                Teaching our children the value of making eco-friendly decisions
                in their everyday lives can be difficult in a culture that
                promotes mass consumption. But it’s more important than ever
                today to bring up ecologically conscious kids.
              </p>
              <br />
              <p>
                Here we bring to you a few yet effective eco-friendly practices
                you can start right away to lead an eco-friendly and sustainable
                life.
              </p>
            </div>

            <div className='col-md-6 position-relative'>
              <img
                src='/assets/blog1.png'
                alt='image'
                className={styles.BlogCnt1Img}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-8'>
              <div>
                <h4>Source of Food</h4>

                <p>
                  Most of the kids tend to take food for granted. Therefore, you
                  can explain the source of the food to them to make them more
                  aware of the food they eat. You can also explain to them the
                  importance and rarity of the natural and original food, the
                  way it is sown, grown, yielded , and harvested. Doing so will
                  not only make them conscious of the food they eat but also
                  will make them sustain and conserve food for the future
                  generation.
                </p>

                <h4>The 3 R’S</h4>

                <p>
                  Teach them one of the most important environmental conscious
                  elements, which is the practice of the 3 R’s – Reduce, Reuse,
                  Recycle. Teach them to reduce waste, reuse the materials they
                  use, and recycle whatever they can.
                </p>

                <p>
                  Supporting, encouraging, and educating them to your kids will
                  not only result in meaningful and creative crafts but will
                  also enable them to live a more conscious, mindful, and frugal
                  lifestyle.
                </p>

                <h4>Saving</h4>

                <p>
                  Educate your kids to pay closer attention to their environment
                  and surroundings. Teach them to avoid wasting food and water,
                  avoid unnecessary usage of water during brushing and bathing,
                  turning off electrical appliances like the TV, fan, AC, and
                  lights when not in use.
                </p>

                <p>
                  These things may seem small, but such acts practiced on a
                  daily basis will definitely evoke a sense of responsibility
                  and love towards nature.
                </p>

                <h4>Spending Time In Nature</h4>

                <p>
                  Try to spend more time with your kids in nature. Educate them
                  about the various kinds of soils, leaves, flowers, plants,
                  seeds, trees, fruits, vegetables, etc., along with their
                  benefits. You can also teach the biological names of them if
                  your child is very much into these things or belong to a
                  secondary section.
                </p>

                <p>
                  To make things interesting, you can even build a home garden
                  and sow small plants and trees.
                </p>

                <p>
                  Teach kids about the many advantages of trees, including the
                  oxygen they produce, the shade they offer, the fruits and
                  vegetables they produce, the wood they supply, the shelter
                  they provide, and everything else. You can also teach how
                  birds and little animals find shelter in the trees. Try
                  gardening with them and explain what they eat, from where it
                  comes, how to grow them, etc.
                </p>

                <p>
                  All these actions will not only assist kids in learning about
                  their surroundings but will also increase their awareness of
                  the state of our environment and foster a love for it. Such
                  simple yet effective eco-friendly practices will definitely
                  make them feel good about themselves and make them happy as a
                  result.
                </p>

                {/* <img src='/assets/vectors/Vector2.png' alt="image" className={styles.BlogvectorImg3} /> */}
              </div>
            </div>
            <div className='col-md-4'>
              <BlogDates />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Blog1
