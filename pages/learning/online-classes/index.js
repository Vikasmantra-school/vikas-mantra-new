import React from 'react'
import styles from './style.module.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

function OnlineClasses() {
  const pageTitle = 'Learning'

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60' + ' ' + styles.tilteSpace}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2>Online Classes</h2>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          'whitebg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'bglogo VectorSpiral'
        }
      >
        <div className='container'>
          <div className='row'>
            <div className={'col-md-2'}></div>

            <div className='col-md-10'>
              <div className={'imgUp' + ' ' + styles.onlineImg}>
                <img
                  src='/assets/virtual-class.png'
                  alt='image'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>

          <div className={'row' + ' ' + 'pt60' + ' ' + styles.classContent}>
            <div className='col-md-10'>
              <h2 className='ulineRed'>The covid -19 pandemic</h2>

              <p className='pt-4'>
                has resulted in the closure of educational institutions across
                the country. Since the traditional classroom learning can be
                unsafe for the teachers and students, we have come up with a
                quick fix of seeking assistance through online learning
                platforms. These are the tough times, not only for the students
                but also for people all over the world. The struggle is real
                mentally and economically, however when it comes to students,
                they are attempting to understand the reality of accepting the
                new normal of not being able to go out, not getting to meet
                their friends and to cope with the changed routine.
              </p>

              <p>
                At the same time, it is imperative for the institution to
                address the educational needs of the students. In Vikas mantra
                public school, we are determined to transcend beyond the
                classroom learning to e-learning platforms. When the technology
                is employed in the right manner, the advantages of online
                learning know no bound. In VMPS we are making sure that the
                teachers are familiarized with utilizing the digital platforms
                to teach and monitor the student’s academic performance.
              </p>

              <p>
                In VMPS, we are now proudly delivering quality education through
                the medium of technology to all of our students. Some of the
                digital platforms which have been employed by our institution
                are zoom for video communication between the students and the
                teachers, Google classroom for sharing of information’s,
                worksheets/assignments and feedback with the students and lively
                virtual tools like quizzes/ videos for better understand of the
                concepts.
              </p>

              <p>
                For the kindergarteners, we are uploading recorded video lessons
                and worksheet regularly in the Google classroom for the
                convenience of the students. And for the primary and middle
                class students we are providing zoom classes everyday as well as
                the materials/ assignments are posted in the Google classroom.
                Furthermore we are routinely uploading co-scholastic video
                lessons (music, yoga, dance, art and craft and physical
                education) in the Google classroom to keep them engaged and to
                improve their fine and gross motor skills during the period of
                lockdown at home.
              </p>

              <p>
                With the extending lockdown and the closure of school can
                indefinitely turn over the lives of the students, so it is
                crucial for us as an institution to deliver our best service and
                support towards our students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineClasses
