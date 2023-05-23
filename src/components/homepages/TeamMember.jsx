import React, { useEffect, useState } from 'react';
import "../../assest/css/team.css";
import pankaj from "../../assest/images/teammem1.jpg";
import suhail from "../../assest/images/teammem2.jpeg";
import
{
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsLinkedin
} from "react-icons/bs";
import { Link } from 'react-router-dom';
const TeamMember = () =>
{
    const [scroll, setScroll] = useState(false);




    useEffect(() =>
    {
        window.addEventListener("scroll", () =>
        {
            setScroll(window.scrollY > 5)
        })
    }, [])
    return (

        <section className={scroll ? "team_mem_wrapper active" : "team_mem_wrapper "}>
            <p className='sub_heading_title text-center'>
                GREAT TEAM MEMBERS
            </p>
            <h2 className='main_heading_title text-center'>
                WE HAVE EXPERT TEAM
            </h2>
            <div className='team_leaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='team_style_card'>
                                <div className='img_wrap'>
                                    <img src={pankaj} alt={pankaj} />
                                    <div className='social'>
                                        <div>
                                            <Link to="/">
                                                <BsFacebook />
                                            </Link>
                                            <Link to="/">
                                                <BsInstagram />
                                            </Link>
                                            <Link to="/">
                                                <BsTwitter />
                                            </Link>
                                            <Link to="/">

                                                <BsLinkedin />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='service_title text-center my-3'>
                                    Pankaj Yadav
                                </h3>
                                <p className='detail_text2 text-center mb-3'>Sr. MERN Developer</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='team_style_card'>
                                <div className='img_wrap'>
                                    <img src={suhail} alt={suhail} />
                                    <div className='social'>
                                        <div>
                                            <Link to="/">
                                                <BsFacebook />
                                            </Link>
                                            <Link to="/">
                                                <BsInstagram />
                                            </Link>
                                            <Link to="/">
                                                <BsTwitter />
                                            </Link>
                                            <Link to="/">

                                                <BsLinkedin />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='service_title text-center my-3'>
                                    Suhail Sidduiqi
                                </h3>
                                <p className='detail_text2 text-center mb-3'>Web Designer</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='team_style_card'>
                                <div className='img_wrap'>
                                    <img src={pankaj} alt={pankaj} />
                                    <div className='social'>
                                        <div>
                                            <Link to="/">
                                                <BsFacebook />
                                            </Link>
                                            <Link to="/">
                                                <BsInstagram />
                                            </Link>
                                            <Link to="/">
                                                <BsTwitter />
                                            </Link>
                                            <Link to="/">

                                                <BsLinkedin />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='service_title text-center my-3'>
                                    Pankaj Yadav
                                </h3>
                                <p className='detail_text2 text-center mb-3'>Sr. MERN Developer</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='team_style_card'>
                                <div className='img_wrap'>
                                    <img src={suhail} alt={suhail} />
                                    <div className='social'>
                                        <div>
                                            <Link to="/">
                                                <BsFacebook />
                                            </Link>
                                            <Link to="/">
                                                <BsInstagram />
                                            </Link>
                                            <Link to="/">
                                                <BsTwitter />
                                            </Link>
                                            <Link to="/">

                                                <BsLinkedin />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='service_title text-center my-3'>
                                    Suhail Sidduiqi
                                </h3>
                                <p className='detail_text2 text-center mb-3'>Web Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default TeamMember