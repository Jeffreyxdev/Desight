import React from 'react'
import { Button } from '../Ui/Button'
const Home = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
    </div>
    
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Empowering Change Through Innovation
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Desight Foundation is dedicated to creating positive impact through innovative solutions and sustainable development.
      </p>
      <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
        Join Our Mission
      </Button>
    </div>
  </div>
  )
}

export default Home