import React from 'react';
import ContactForm from './ContactForm';
import Layout from './Layout';
import Breadcrumb from './Breadcrumb';
import "../../assest/css/getQuote.css";
import { BiTime, BiMap, BiPhone } from "react-icons/bi";
const GetTouch = () =>
{
    return (
        <Layout>
            <Breadcrumb pageHeader="Contact Us" />
            <section className='get_touch_wrap'>
                <div className='container'>
                    <div className='row gy-4'>
                        <div className='col-lg-6'>
                            <div className='office_address'>
                                <h3 className='main_heading_title mt-0'>
                                    United State Office Address
                                </h3>
                                <p className='paragraph'>
                                    Completely recaptiualize 24/7 communities via standards compliant
                                    metrics whereas web-enabled content
                                </p>
                                <ul className='ps-0'>
                                    <li>
                                        <BiPhone />
                                        <span>
                                            <h3 className='mt-0'>
                                                Phone Number & Email
                                            </h3>
                                            <p className='paragraph mb-0'>+(91)8607013464</p>
                                            <p className='paragraph mb-0'>rkSolutions@gmail.com</p>
                                        </span>
                                    </li>
                                    <li>
                                        <BiMap />
                                        <span>
                                            <h3 className='mt-0'>
                                                Our Office Address
                                            </h3>
                                            <p className='paragraph mb-0'>
                                                898,3rd floor, Vivekananda Block
                                            </p>
                                            <p className='paragraph mb-0'>
                                                Sarawati Vihar,Gurugram
                                            </p>
                                        </span>
                                    </li>
                                    <li className='border-0'>
                                        <BiTime />
                                        <span>
                                            <h3 className='mt-0'>
                                                Official Work Time
                                            </h3>
                                            <p className='paragraph mb-0'>
                                                10:00am – 6:00pm ( Mon – Fri )
                                            </p>
                                            <p className='paragraph mb-0'>
                                                Sat, Sun & Holiday Closed
                                            </p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <ContactForm paragraph={"We’re Ready To Help You"} heading={"Leave a Message"} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GetTouch