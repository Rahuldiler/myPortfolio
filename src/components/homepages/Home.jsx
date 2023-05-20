import React from 'react'
import Layout from '../reusable/Layout'
import ITsolutuion from './ITsolutuion'
import Service from './Service'
import Counter from './Counter'
import TeamMember from './TeamMember'

const Home = () =>
{
    return (
        <Layout>
            <ITsolutuion />
            <Service />
            <Counter />
            <TeamMember/>
        </Layout>

    )
}

export default Home