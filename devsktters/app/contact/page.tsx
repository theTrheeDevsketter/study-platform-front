"use client"
import React, { useState } from 'react'

function Contact() {

  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(`mailto:thethreedevsketters@gmail.com`, "_blank");
  };

  return (
    <>
      <h1 className='text-4xl mt-16 text-indigo-500'>Contact</h1>
      <div className="w-full md:w-96 md:max-w-full mx-auto mt-5">
        <div className="p-6 border border-gray-300 sm:rounded-md">

          <form onSubmit={handleSubmit}>
            <label className="block mb-6">
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Maricarme Bloggs"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="maricarme.bloggs@example.com"
                required
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50"
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="
                  h-10
                  px-5
                  text-indigo-100
                  bg-indigo-700
                  rounded-lg
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-indigo-800"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact