import React from 'react'
import Layout from '../reusable/Layout'
import "../../assest/css/aboutcss/aboutmore.css";
import Breadcrumb from '../reusable/Breadcrumb';
import ServiceCard from './ServiceCard';
import TechNeeds from './TechNeeds';
import TeamMember from '../homepages/TeamMember';
const AboutMore = () =>
{
    return (
        <Layout>
            <Breadcrumb pageHeader="About Us" />
            <ServiceCard />
            <TechNeeds />
            <TeamMember />
        </Layout>
    )
}

export default AboutMore