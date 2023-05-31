import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
const ContactForm = ({ title, heading, paragraph }) =>
{
    return (
        <>
            <form className='contact_us_form'>
                <p className='detail_text2 text-center'>{title}</p>
                <h3 className='main_heading_title text-center'>
                    {heading}
                </h3>
                <p className='paragraph'>
                    {paragraph}
                </p>
                <div className="form-row">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <input type="text" class="form-control" name='fullName' placeholder="Full Name" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" name='email' placeholder="Email Address" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" name='phone' placeholder="Phone" />
                        </div>
                        <div class="col-md-6">
                            <select class="form-select" name='queryOption'>
                                <option selected>Web Development</option>
                                <option value="1">UI Design</option>
                                <option value="2">CMS Developement</option>
                                <option value="3">WordPress Developement</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <textarea class="form-control" name="message" placeholder='Type Your Message' id="messageBox" rows="4"></textarea>
                        </div>
                        <div className='d-flex submt_btn_div justify-content-center'>
                            <a className="blue_btn" href="/myportfolio">
                                Send A Message <BiRightArrowAlt />
                            </a>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}

export default ContactForm