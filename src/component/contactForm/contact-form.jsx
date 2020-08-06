import React from 'react';
import './contact-form.scss';
import Introduce from '../../component/screens/introduce/introduce';
import {reduxForm, Field,formValueSelector,reset} from 'redux-form';



var ContactForm = (props) => {
  const {prestine, submitting, handleSubmit} = props;
    return (
        <div className='contact__form'>
            <form className='contact__form-content' onSubmit={handleSubmit}>
                <Field type='text' name='name' component='input' placeholder='your name' required/>
                <Field type='text' name='company' component='input' placeholder='your company' required/>
                <Field type='email' name='email' component='input' placeholder='email address' required/>
                <Field type='tel' name='phone' component='input' placeholder='phone number' required/>
                <button type='submit' disable={prestine || submitting} id='contact__form-btn'>Contact</button>
            </form>
            <Introduce/>
        </div>
    )
}

const onSubmit = value => 
{
    const client = value;
    console.log(client);
    alert('Thank you ! I will contact you soon.');
    fetch('https://pure-ocean-83022.herokuapp.com/',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json; charset=utf-8'
        }, 
        body: JSON.stringify(client)})
    .then( res => res.json())
    .catch( err => console.log(err));
}

const submitSuccess = (result, dispatch) => {
    dispatch(reset('Client'));
}

ContactForm = reduxForm({form: 'Client', onSubmit, onSubmitSuccess: submitSuccess})(ContactForm)

const selector = formValueSelector('Client')

// ContactForm = connect( state => 
//     {
//         const clientName = selector(state,'name')
//         const clientCompany = selector(state,'company')
//         const clientEmail = selector(state,'email')
//         const clientPhone = selector(state,'phone')
    
//         return {clientName : '', clientCompany: '', clientEmail: '', clientPhone: ''}

//     })(ContactForm)

    

export default ContactForm;