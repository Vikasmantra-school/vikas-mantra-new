import { BlogDates } from '../../../../components/BlogDates/BlogDates'
import { Breadcrumb } from '../../../../components/Breadcrumb/Breadcrumb'

const Blog1 = () => {
  const pageTitle = 'About'

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className='pt-4'>
        <div className='container position-relative'>
          <div className='row py-5'>
            <div className='col-lg-6 col-md-10'>

              <div className='AnimeStarts'>
                <h2 className='AnimeElement'>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</h2>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className=' whitebg position-relative sectionContainer BlogvectorImg2 BlogvectorImg3 '>
        <div className='container'>
          <div className='row py-5 align-items-start '>
            <div className='col-lg-6 col-md-12'>

              <div className='AnimeStarts'>

                <p className='AnimeElement'>
                  Teaching our children the value of making eco-friendly decisions
                  in their everyday lives can be difficult in a culture that
                  promotes mass consumption. But it’s more important than ever
                  today to bring up ecologically conscious kids.
                </p>
                <p className='AnimeElement'>
                  Here we bring to you a few yet effective eco-friendly practices
                  you can start right away to lead an eco-friendly and sustainable
                  life.
                </p>

              </div>

            </div>

            <div className='col-lg-6 col-md-12 position-relative'>

              <div className='AnimeStarts'>
                <img
                  src='/assets/blogs/blog1.png'
                  alt='image'
                  className='BlogCntImg AnimeElement'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-8 col-md-12'>

              <div className='AnimeStarts'>
                <h4 className='AnimeElement'>Source of Food</h4>

                <p className='AnimeElement'>
                  Most of the kids tend to take food for granted. Therefore, you
                  can explain the source of the food to them to make them more
                  aware of the food they eat. You can also explain to them the
                  importance and rarity of the natural and original food, the
                  way it is sown, grown, yielded , and harvested. Doing so will
                  not only make them conscious of the food they eat but also
                  will make them sustain and conserve food for the future
                  generation.
                </p>
              </div>

              <div className='AnimeStarts'>

                <h4 className='AnimeElement'>The 3 R’S</h4>

                <p className='AnimeElement'>
                  Teach them one of the most important environmental conscious
                  elements, which is the practice of the 3 R’s – Reduce, Reuse,
                  Recycle. Teach them to reduce waste, reuse the materials they
                  use, and recycle whatever they can.
                </p>

                <p className='AnimeElement'>
                  Supporting, encouraging, and educating them to your kids will
                  not only result in meaningful and creative crafts but will
                  also enable them to live a more conscious, mindful, and frugal
                  lifestyle.
                </p>
              </div>

              <div className='AnimeStarts'>

                <h4 className='AnimeElement'>Saving</h4>

                <p className='AnimeElement'>
                  Educate your kids to pay closer attention to their environment
                  and surroundings. Teach them to avoid wasting food and water,
                  avoid unnecessary usage of water during brushing and bathing,
                  turning off electrical appliances like the TV, fan, AC, and
                  lights when not in use.
                </p>

                <p className='AnimeElement'>
                  These things may seem small, but such acts practiced on a
                  daily basis will definitely evoke a sense of responsibility
                  and love towards nature.
                </p>

              </div>

              <div className='AnimeStarts'>

                <h4 className='AnimeElement'>Spending Time In Nature</h4>

                <p className='AnimeElement'>
                  Try to spend more time with your kids in nature. Educate them
                  about the various kinds of soils, leaves, flowers, plants,
                  seeds, trees, fruits, vegetables, etc., along with their
                  benefits. You can also teach the biological names of them if
                  your child is very much into these things or belong to a
                  secondary section.
                </p>

                <p className='AnimeElement'>
                  To make things interesting, you can even build a home garden
                  and sow small plants and trees.
                </p>

                <p className='AnimeElement'>
                  Teach kids about the many advantages of trees, including the
                  oxygen they produce, the shade they offer, the fruits and
                  vegetables they produce, the wood they supply, the shelter
                  they provide, and everything else. You can also teach how
                  birds and little animals find shelter in the trees. Try
                  gardening with them and explain what they eat, from where it
                  comes, how to grow them, etc.
                </p>

                <p className='AnimeElement'>
                  All these actions will not only assist kids in learning about
                  their surroundings but will also increase their awareness of
                  the state of our environment and foster a love for it. Such
                  simple yet effective eco-friendly practices will definitely
                  make them feel good about themselves and make them happy as a
                  result.
                </p>

              </div>

            </div>

            <div className='col-lg-4 col-md-8'>
              <BlogDates />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
export default Blog1
