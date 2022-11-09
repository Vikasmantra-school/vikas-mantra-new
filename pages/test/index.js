import { useState } from 'react'
import styles from './style.module.css'
import axios from 'axios'
const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name,email,number)
        const data = {
            Name: name,
            Email: email,
            Number: number
        }
        axios.post('https://sheet.best/api/sheets/4a367836-82f9-44ed-913b-a2260b87ae47', data).then((response) => {
            console.log(response)
            //clearing-form-fields
            setName('')
            setEmail('')
            setNumber('')

        })
    }


    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <form onSubmit={handleSubmit}>

                    <div className={styles.inputstyle}>
                        <label htmlFor='name'>
                            Name
                        </label>
                        <input type="text" id="name" name="name" placeholder='Your Name *'
                            required
                            className='input'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className={styles.inputstyle}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" placeholder='Your Email *'
                            required
                            className='input'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </div>

                    <div className={styles.inputstyle}>
                        <label htmlFor='number'>Number</label>
                        <input type="number" name="phone" placeholder='Your Phone *'
                            required
                            className='input'
                            onChange={(e) => setNumber(e.target.value)}
                            value={number} />
                    </div>

                    <div className={styles.inputstyle}>

                        <button type="submit" className='btn btn-primary'> sumbit</button>

                    </div>

                </form>
            </div>
        </section>
    )
}

export default Form

