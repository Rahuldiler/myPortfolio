import React from 'react';
import Breadcrumb from '../reusable/Breadcrumb';
import Layout from '../reusable/Layout';
import "../../assest/css/Servicecss/serviceDetails.css";
import service1 from "../../assest/images/servicedet1.jpg";
import service12 from "../../assest/images/servicedet2.jpg";
import service13 from "../../assest/images/servicedet4.jpg";
import service14 from "../../assest/images/servicedet3.jpg";
import { BiCheckCircle } from "react-icons/bi";
import { Accordion } from 'react-bootstrap';
const ServiceDetails = () =>
{
    return (
        <>
            <Layout>
                <Breadcrumb pageHeader="Service Detail" />
                <section className='service_detai_page'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>

                            </div>
                            <div className='col-md-8'>
                                <div className='it_slt_bsns_t_sec'>
                                    <img src={service1} alt={service1} />
                                    <h2 className='service_title'>Cloud Solution & Business</h2>
                                    <p>
                                        Welcome to our Cloud Services! We offer comprehensive cloud solutions to help
                                        businesses harness the power of cloud computing and optimize their operations.
                                        Our team of cloud experts is committed to delivering secure, scalable, and
                                        reliable cloud services.
                                    </p>
                                </div>
                                <div className='it_slt_bsns_md_sec'>
                                    <img src={service13} alt={service13} />
                                    <ul>
                                        <h3 className='sub_heading_title'>Here's what our service includes :</h3>
                                        <li>
                                            <p className='detail_text'>
                                                <BiCheckCircle /> Cloud Infrastructure Setup.
                                            </p>
                                        </li>
                                        <li>
                                            <p className='detail_text'>
                                                <BiCheckCircle /> Cloud Migration.
                                            </p>
                                        </li>
                                        <li>
                                            <p className='detail_text'>
                                                <BiCheckCircle /> Cloud Security.
                                            </p>
                                        </li>
                                        <li>
                                            <p className='detail_text'>
                                                <BiCheckCircle /> Cloud Application Development.
                                            </p>
                                        </li>
                                        <li>
                                            <p className='detail_text'>
                                                <BiCheckCircle /> Cloud Consulting and Strategy.
                                            </p>
                                        </li>
                                        <li>
                                            <p className='detail_text'>
                                                <BiCheckCircle /> Cloud Monitoring and Optimization.
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                                <div className='it_slt_bsns_lt_sec'>
                                    <img src={service12} alt={service12} />
                                    <h2 className='service_title'>FAQ's about cloud service</h2>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" open>
                                            <Accordion.Header className='service_title'>Do You Provide Cloud Monitoring and Optimization.</Accordion.Header>
                                            <Accordion.Body>
                                                We provide ongoing monitoring and optimization of your cloud infrastructure
                                                to ensure optimal performance, cost-efficiency, and resource utilization.
                                                Our team continuously monitors key metrics, identifies potential bottlenecks
                                                or performance issues, and implements necessary optimizations to enhance
                                                your cloud environment.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className='service_title'>Does Your Expert Cloud Consulting and Strategy</Accordion.Header>
                                            <Accordion.Body>
                                                Our experts offer cloud consulting services to help you make informed decisions about
                                                adopting cloud technologies. We assist in defining cloud strategies, selecting the right
                                                cloud service providers, and developing roadmaps
                                                for successful cloud adoption and integration into your existing IT infrastructure.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        {/* <Accordion.Item eventKey="2">
                                            <Accordion.Header className='service_title'>Creation timelines for the standard lorem passage.</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item> */}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default ServiceDetails