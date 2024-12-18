import React from 'react'
import EnrollmentForm from '../InnerPages/EnrollmentForm'
const Enroll = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
    <div className="container max-w-6xl px-4 py-16 mx-auto">
      <div className="text-center mb-16 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-5">
          Join Our Eye Medical Foundation
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Partner with us in our mission to provide quality eye care and advance
          medical research. Together, we can make a difference in people's lives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-accent rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Access to cutting-edge research and treatments</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Collaboration with leading medical institutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Professional development opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Support in improving patient care</span>
              </li>
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <div className="text-sm">Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm">Research Papers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Enrollment Form</h2>
          <EnrollmentForm/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Enroll