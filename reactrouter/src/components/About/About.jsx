import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Life is full of challenges and opportunities. Everyone faces difficulties, but those who stay patient and determined always achieve success. Hard work, honesty, and a positive attitude help us overcome every obstacle and reach our goals.
                      </p>
                      <p className="mt-4 text-gray-600">
                         We deserve to be treated fairly and with respect. Even when challenges arise, we must act responsibly and stay true to our values. Sometimes, unexpected situations test us, but with patience and understanding, we can overcome them.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}