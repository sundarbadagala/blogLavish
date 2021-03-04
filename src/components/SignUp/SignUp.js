//change useFormik to Formik, Form, Field. ErrorMessage
import React from 'react'
import './SignUp.css'
import {ErrorMessage, Field, Formik, Form} from 'formik'
import logo from '../Home/images/svg-4.svg'


const initialValues={
    name:'',
    number:'',
    mail:'',
    password:'',
    confirmPassword:''
}

const validate = data =>{
    const errors ={}

    if(!data.name){
        errors.name='Enter Your Name'
    }else if(!data.number){
        errors.number='Enter Your Phone Number'
    }else if(!/^[7-9]\d{9}$/i.test(data.number)){
        errors.number='Invalid Phone Number'
    }else if(!data.mail){
        errors.mail='Enter Your Mail ID'
    }else if(!/^([a-z0-9._-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/i.test(data.mail)){
        errors.mail='Invalid Mail ID'
    }else if(!data.password){
        errors.password='Enter Your Password'
    }else if(data.password.length < 6){
        errors.password='Password is too short'
    }else if(data.password !== data.confirmPassword){
        errors.confirmPassword="Password doesn't match"
    }
    return errors
}

const onSubmit=values=>{
    alert(JSON.stringify(values))
}


function SignUp() {
    return (
        <div className='su-main'>
            <div>
                <img src={logo} alt='' className='su-logo'/>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                className='fm-main'
            >
                <Form className='fm-card'>
                    <div className='fm-div'>
                        <label htmlFor='name' className='fm-label'>Name</label>
                        <Field type='text' name='name' placeholder='Enter Name' className='fm-input' />
                    </div>
                    <div className='fm-div'>
                        <label htmlFor='number' className='fm-label'>Phone Number</label>
                        <Field type='number' name='number'  placeholder='Enter Phone Number' className='fm-input'/>
                    </div>
                    <div className='fm-div'>
                        <label htmlFor='mail' className='fm-label'>E Mail</label>
                        <Field type='email' name='mail'  placeholder='Enter E Mail' className='fm-input'/>
                    </div>
                    <div className='fm-div'>
                        <label htmlFor='password' className='fm-label'>Password</label>
                        <Field type='password' name='password'  placeholder='Enter Password' className='fm-input'/>
                    </div>
                    <div className='fm-div'>
                        <label htmlFor='confirmPassword' className='fm-label'>Confirm Password</label>
                        <Field type='password' name='confirmPassword'  placeholder='Confirm the Password' className='fm-input'/>
                    </div>
                    <div className='fm-error'>
                        <ErrorMessage name='name'/>
                        <ErrorMessage name='number'/>
                        <ErrorMessage name='mail'/>
                        <ErrorMessage name='password'/>
                        <ErrorMessage name='confirmPassword'/>
                    </div>
                    <button type='submit' className='fm-btn'>SUBMIT</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUp
