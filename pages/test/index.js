import React from 'react';
import { useFormik } from 'formik'

const validate = (values) => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.name) {
        errors.name = 'required'
    } else if (!/^[A-Za-z]+$/i.test(values.name)) {
        errors.name = 'Invalid Name'
    }
    return errors
}

export default function App() {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
            

        },
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit} className='m-5'>
                <div>
                    <label>Email</label>

                    <input type="email" name="email"
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    <br />

                    {formik.touched.email && formik.errors.email && (
                        <span>{formik.errors.email}</span>
                    )}
                </div>

                <div>
                    <label>Name</label>

                    <input type="name" name="name"
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                    <br />

                    {formik.touched.name && formik.errors.name && (
                        <span>{formik.errors.name}</span>
                    )}

                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}