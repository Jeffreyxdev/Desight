import React from 'react'
import { Button } from '../Ui/Button'
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
const About = () => {
  return (
   <>
   <Helmet>
         <title>Learn about us </title>
         <meta name="description" content="" />
         <link rel="canonical" href="https://www.desightfoundation.com.ng/about" />
       </Helmet>
      <div className="about-container ">
      <h1 className="about-title mt-7">About Desight Foundation</h1>
      <div className='dash'></div>
      <p className="about-description">
        we are dedicated to improving the health and well-being of communities through innovative medical solutions and eye care. Our mission is to provide accessible healthcare services and support to those in need.Founded By senior DR Maureen Odimegwu Agabaenwere, she through vision for affordale health and eye care all over africa
      </p>
     <h2 className="about-subtitle ">Our Vision <FaRegEye className='ml-[10vw] mt-[-5vh] eye' /></h2>
     <p className='dash1'/>
      <p className="about-description">
        We envision a world where everyone has access to quality eye care, regardless of their background or circumstances. We strive to empower individuals through education, resources, and support.
      </p>
      <h2 className="about-subtitle">Our Values</h2>
      <ul className="about-values">
        <li>Compassion</li>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Collaboration</li>
      </ul>
     
      <h2 className="about-subtitle">Objectives</h2>
      <ul className="about-values">
        <li>Conduct bi-annual eye care outreaches in rural and underserved communities.</li>
        <li>Screen and treat 5,000 individuals annually</li>
        <li>Train 100 local healthcare professionals in eye care services.</li>
        <li>Establish partnerships with 5 African governments to integrate eye health into national health policies.</li>
        <li>Secure funding to sustain outreach programs.</li>
      </ul>
      <h2 className='about-subtitle'>Our AIM</h2>
      <p className='about-description'>
"To provide comprehensive eye care services to underserved communities in Africa, promoting healthy vision and empowering individuals to reach their full potential."
</p>
<h2 className="about-subtitle">Sponsorship Opportunities</h2>
      <ul className="about-values">
        <li>Outreach Program Sponsorship</li>
        <li>Equipment and Medical Supplies Donation</li>
        <li>Staff Training and Capacity Building</li>
        <li>Advocacy and Policy Influence</li>
      </ul>
      <h2 className="about-subtitle">Why Sponsor Us?</h2>
      <p className='about-description'>Partnering with Sightsavers Community Outreach</p>
      <ul className="about-values">
        <li>Supports sustainable eye care solutions for Africa's most vulnerable.</li>
        <li>Enhances corporate social responsibility</li>
        <li>Fosters community development and economic growth.</li>
        <li>Aligns with UN Sustainable Development Goals (SDGs 3, 4, and 8).</li>
      </ul>
      <h2 className="about-subtitle">Get Involved</h2>
      <p className="about-description">
        Join us in our mission to make a difference. Whether through volunteering, donations, or spreading awareness, your support can help us reach more people in need.
      </p><Link to={'/enroll'}>
      <Button size='lg' className='gradient-bg text-white hover:opacity-90 transition-opacity'>Get involved</Button></Link>
    </div>
    </>
  )
}

export default About