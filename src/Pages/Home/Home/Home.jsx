import React from 'react'
import Banner from '../Banner/banner'
import Services from '../../Services/Services'
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee'
import WorksBanner from '../Banner/WorksBanner'

export default function Home() {
  return (
    <div>
    
    <Banner></Banner>
    <WorksBanner></WorksBanner>
    <Services></Services>
    <ClientLogoMarquee></ClientLogoMarquee>
    </div>
  )
}
