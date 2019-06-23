/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

export default function HomePage() {
  return (
    <section className="flex bg-white">
      <section className="w-full h-screen">
        <div className="flex h-full items-center content-center justify-center">
          <div>
            <h1 className="text-4xl font-bold">
              Find your style; Find your course
            </h1>
            <button
              type="button"
              className="bg-black text-white p-4 text-2xl rounded-full w-4/5 mt-2 ml-10 tracking-wider self-center"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
