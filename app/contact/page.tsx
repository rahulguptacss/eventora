import React from 'react'
import Header from '../components/Header/page'
import Footer from '../components/Footer/page'
import Breadcrumb from '../components/Breadcrumb/page'
import ContactUs from '../components/ContactUs/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Eventora',
  description: 'Get in touch with our team to plan your unforgettable event.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb 
        title="Contact US" 
        parentTitle="Home"
        parentHref="/"
        currentTitle="Contact US"
      />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
