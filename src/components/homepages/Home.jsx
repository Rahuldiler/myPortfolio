import React from 'react'
import Layout from '../reusable/Layout'
import ITsolutuion from './ITsolutuion'
import Service from './Service'
import Counter from './Counter'
import TeamMember from './TeamMember'
import FAQ from './FAQ';
import Progress from './Progress'
import Quote from './Quote'

const Home = () =>
{
    return (
        <Layout>
            <ITsolutuion />
            <Service />
            <Counter />
            <TeamMember />
            <FAQ />
            <Progress />
            <Quote />
        </Layout>

    )
}

export default Home