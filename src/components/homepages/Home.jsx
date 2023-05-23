import React from 'react'
import Layout from '../reusable/Layout'
import ITsolutuion from './ITsolutuion'
import Service from './Service'
import Counter from './Counter'
import TeamMember from './TeamMember'
import FAQ from './FAQ';
import Progress from './Progress'
import Quote from './Quote'
import WorkProgress from './WorkProgress'
import Testinomial from './Testinomial'

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
            <WorkProgress />
            <Testinomial />
        </Layout>

    )
}

export default Home