'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'


export default function page() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
