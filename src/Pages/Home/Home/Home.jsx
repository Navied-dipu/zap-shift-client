import React from 'react'
import Banner from '../Banner/banner'
import Services from '../../Services/Services'
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee'
import WorksBanner from '../Banner/WorksBanner'
import Benefits from '../Benifits/Benefits'
import BeMerchant from '../BeMerchant/BeMerchant'
import Reviews from '../Reviews/Reviews'

export default function Home() {
  return (
    <div>
    
    <Banner></Banner>
    <WorksBanner></WorksBanner>
    <Services></Services>
    <ClientLogoMarquee></ClientLogoMarquee>
    <Benefits></Benefits>
    <BeMerchant></BeMerchant>
    <Reviews></Reviews>
    </div>
  )
}
