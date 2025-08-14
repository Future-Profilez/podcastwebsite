import React from 'react'
import Layout from '../../layout/Layout'
import Podcast from './Podcast'
import HeroSection from './HeroSection'
import TopicsGrid from './TopicsGrid'
import WhyChooseUs from './WhyChooseUs'
import InvestorSection from './InvestorSection'

export default function Main() {
  return (
    <>
      <Layout>
        <HeroSection />
        <InvestorSection/>
        <Podcast />
        <TopicsGrid />
        <WhyChooseUs />
        <Podcast />
      </Layout>
    </>
  )
}
