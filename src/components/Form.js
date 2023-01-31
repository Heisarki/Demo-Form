import React from 'react'
import form from './form.module.css';
import dp from '../images/dp.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


export default function Form() {
    return (
        <div className={form.form_container}>
        < div className = { form.main } >
                {/* Header */}
        < div className = { form.cover_container } >
                    <div className={ form.info}>
                        <h>Personal details</h>
                        <p>Update your informationand find out how it's used.</p>
                    </div>
                    <div className={ form.upload_cover}>
                        {/* <input type='file'></input> */}
                        <p>Upload Cover Photo</p>
                    </div>
                </div>

                <div className={ form.details_container}>
                    {/*Socail media link */}
                        <div className={form.profile}>
                            <div className={form.profile_dp}>
                            <img src={dp} />
                        </div>
                        {/* <input type='file'></input> */}
                        <p>Upload Photo</p>
                        <div className={ form.socials_container}>
                            <p><FaFacebookF /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                        </div>
                    </div>
                    
                    {/* Form */}
                    <form className={ form.form}>
                            <div className={form.fullname}>
                            <div className ={ form.label_input}>
                                <label htmlFor='f_name'>First Name</label>
                                <input placeholder='John' id = 'f_name' type='text'/>
                            </div>
                            <div className = { form.label_input}>
                                <label htmlFor='l_name'>Last Name</label>
                                <input placeholder='David' id = 'l_name' type='text'/>
                            </div>
                        </div>

                        <div className= {form.label_input}>
                            <label htmlFor='message' >Bio Description</label>
                            <textarea id = 'message' placeholder='Message' rows='3'/>
                        </div>

                        <div className={ form.contacts}>
                            <div className ={ form.label_input}>
                                <label htmlFor='email' >Email address</label>
                                <input id='email' placeholder='username@email.com' type='email' />
                                <p>Will use this email id to send you confirmation</p>
                            </div>
                            <div className = { form.label_input}>
                                <label htmlFor='phone' >Phone number</label>
                                <input id ='phone'placeholder='+91 9538652030' type='tel' />
                                <p>Will use this number if they need to contact you</p>
                            </div>
                        </div>

                        <div className={ form.address}>
                            <div className = { form.label_input}>
                                <label htmlFor='address_1'>Address 1</label>
                                <input id ='address_1' type='text'/>
                            </div>
                            <div className = { form.label_input}>
                                <label htmlFor='address_2'>Address 2</label>
                                <input id ='address_2' type='text'/>
                            </div>
                        </div>

                        <div className={ form.address_details}>
                                <div className={form.sub_address}>
                                <div className = { form.label_input}>
                                    <label htmlFor='city'>City</label>
                                    <input id = 'city' type='text' />
                                </div>
                                <div className = { form.label_input}>
                                    <label htmlFor='state'>State</label>
                                    <input id = 'state' type='text' />
                                </div>
                            </div>
                                <div className={form.sub_address}>
                                <div className = {form.label_input}>
                                    <label htmlFor='country'>Country</label>
                                    <input id = 'country' type='text' />
                                </div>
                                <div className = {form.label_input}>
                                    <label htmlFor='zip'>Zipcode</label>
                                    <input id = 'zip' type= 'number' />
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                    <div className={form.btn}>
                        < button className = { form.btn_1 } >Cancel</button>
                        <button className={form.btn_2}>Confirm</button>
                    </div>
            </div>
        </div>
    )
}


