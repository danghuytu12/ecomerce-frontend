/* eslint-disable @next/next/no-img-element */
import React from 'react'

const register = () => {
  return (
    <section className="bg-gray-100 overflow-x-hidden py-20">
    <div className="relative container px-4 mx-auto">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-blue-200 my-24 -ml-4 -mr-4"></div>
        <div className="relative px-4 sm:px-8 bg-white">
          <div className="max-w-lg mx-auto text-center">
            <a className="inline-block mb-14 text-3xl font-bold font-heading" href="#">
              <img className="h-9" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto" />
            </a>
            <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading">Signing up with social is super quick</h3>
            <form >
              <input className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="steven@example.dev"/>
              <input className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="password" placeholder="Password"/>
              <label className="flex">
                <span className="text-sm">By singning up, you agree to our Terms, Data Policy and Cookies.</span>
              </label>
              <button className="mt-12 md:mt-16 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">JOIN yofte</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default register
