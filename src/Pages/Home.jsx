import React from 'react'
import { Button } from '../Ui/Button'
import { Link } from 'react-router-dom'
import { SliderData } from '../InnerPages/Slider'
import Coursel from '../InnerPages/Coursel'
const Home = () => {
  return (
    
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
    </div>
    
    <div className="container mx-auto px-4 text-center max">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-bl from-primary to-blue-600 bg-clip-text text-transparent">
        Empowering Change Through Innovation
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Desight Foundation is dedicated to creating positive impact through innovative solutions and sustainable development through visual care.
      </p><Link to={'/enroll'}>
      <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
        Join Our Mission
      </Button></Link>
      <Coursel slides={SliderData}/>
    </div>
  </div>
  )
}

export default Home