import { useState } from "react";
import Gallery from "./Gallery";

export default function Page() {

  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const getMailContent = () => {
    const email = "auroonehomes@gmail.com"
    const params = `?subject=${encodeURIComponent("Request for Documents from aurohomes.in")}
    &body=${encodeURIComponent("Hi Team Auro Homes,\n\nI hope you are doing well.\nThe agenda of this email is to request you to share all the documents related to the project for my reference.\n\nLooking forward to hearing from you soon.\n\nBest Regards,\n[Your Name]")}`;

    return `mailto:${email}${params}`;
  }

  const onRequestDocument =(e: React.MouseEvent<HTMLButtonElement>) => {
    window.location.href = getMailContent();
    e.preventDefault();
  }

  return (
    <>
      <section id="navbar" className="bg-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* <!-- Logo --> */}
            <div className="flex items-center">
              {/* <a href="#" className="text-2xl font-bold text-black">Auro Homes</a> */}
              <img className="logo" alt="logo" src="../img/auroHomes.png"></img>
            </div>

            {/* <!-- Desktop Navigation --> */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-black hover:text-gray-700 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* <!-- Mobile Navigation Button --> */}
            <div className="md:hidden">
              <button
                id="menu-btn"
                className="text-black w-10 h-10 relative focus:outline-none"
                onClick={() => setIsMobileMenuHidden(!isMobileMenuHidden)}
              >
                <span
                  className="block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out -translate-y-1.5"
                  id="line1"
                ></span>
                <span
                  className="block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out"
                  id="line2"
                ></span>
                <span
                  className="block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out translate-y-1.5"
                  id="line3"
                ></span>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu --> */}
          <div id="mobile-menu" className={`md:hidden ${isMobileMenuHidden ? "hidden" : ""} animate__animated`}>
            <div className="px-2 pt-2 pb-3 space-y-1" onClick={() => setIsMobileMenuHidden(true)}>
              <a
                href="#home"
                className="block px-3 py-2 text-black hover:bg-neutral-200 rounded-md"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-black hover:bg-neutral-200 rounded-md"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-black hover:bg-neutral-200 rounded-md"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-black hover:bg-neutral-200 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="home" className="bg-white min-h-screen pt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-20">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate__animated animate__fadeInLeft">
                Building Dreams with{" "}
                <span className="text-custom-500">Quality</span> and{" "}
                <span className="text-custom-500">Trust</span>
              </h1>
              <p className="text-gray-700 text-lg md:text-xl mb-8 animate__animated animate__fadeInLeft animate__delay-1s">
                Specializing in premium standalone homes with high ceilings,
                perfect ventilation, and eco-friendly designs - because quality
                construction is a lifetime investment.
              </p>
            </div>

            <div className="w-full md:w-1/2 relative animate__animated animate__fadeInRight">
              <div className="bg-custom-500 absolute -inset-4 blur-lg opacity-30 rounded-lg"></div>
              <div className="relative bg-neutral-200 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-300 p-4 rounded-lg text-center">
                    <h3 className="text-black font-bold text-xl mb-2">
                      High Ceiling
                    </h3>
                    <p className="text-gray-700">Spacious living spaces</p>
                  </div>
                  <div className="bg-neutral-300 p-4 rounded-lg text-center">
                    <h3 className="text-black font-bold text-xl mb-2">
                      Ventilation
                    </h3>
                    <p className="text-gray-700">Natural airflow design</p>
                  </div>
                  <div className="bg-neutral-300 p-4 rounded-lg text-center">
                    <h3 className="text-black font-bold text-xl mb-2">
                      Eco-Friendly
                    </h3>
                    <p className="text-gray-700">Sustainable materials</p>
                  </div>
                  <div className="bg-neutral-300 p-4 rounded-lg text-center">
                    <h3 className="text-black font-bold text-xl mb-2">
                      Quality
                    </h3>
                    <p className="text-gray-700">Built to last</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-neutral-100 bg-image py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeInUp">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-600">
              Building quality homes that stand the test of time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Feature 1 --> */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp">
              <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Independent House Feel
              </h3>
              <p className="text-neutral-600">
                Custom-designed standalone homes that provide privacy and
                freedom
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-1s">
              <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                High Ceilings
              </h3>
              <p className="text-neutral-600">
                Spacious interiors with elevated ceilings for better living
                experience
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-2s">
              <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Superior Ventilation
              </h3>
              <p className="text-neutral-600">
                Optimized airflow design for natural cooling and comfort
              </p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp">
              <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Eco-Friendly Design
              </h3>
              <p className="text-neutral-600">
                Sustainable materials and energy-efficient solutions
              </p>
            </div>

            {/* <!-- Feature 5 --> */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-1s">
              <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-neutral-600">
                Transparent documentation and premium materials
              </p>
            </div>

            {/* <!-- Feature 6 --> */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-2s">
              <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Affordable Pricing
              </h3>
              <p className="text-neutral-600">
                Premium quality at competitive market rates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* <!-- Left Column --> */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInLeft">
              <h2 className="text-4xl font-bold text-black mb-6 max-lg:text-center">
                Our Vision & Mission
              </h2>
              <div className="bg-neutral-200 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-custom-500 mb-4">
                  Vision
                </h3>
                <p className="text-gray-700 mb-4">
                  We believe a home is a once-in-a-lifetime investment. In
                  today's market, where quality often takes a backseat, we're
                  here to bridge the gap. Our commitment is to create homes that
                  stand the test of time, combining superior design, space
                  optimization, and uncompromising quality.
                </p>
              </div>

              <div className="bg-neutral-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-custom-500 mb-4">
                  Mission
                </h3>
                <p className="text-gray-700 mb-4">
                  Our mission is to become pioneers in providing high-quality
                  standalone homes at affordable prices. We focus on the
                  underserved segment of small plot sizes, delivering
                  construction services that exceed expectations.
                </p>
              </div>
            </div>

            {/* <!-- Right Column --> */}
            <div className="w-full lg:w-1/2 space-y-6 animate__animated animate__fadeInRight">
              <div className="bg-neutral-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-custom-500 mb-4">
                  Our Commitment
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-custom-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">
                      Complete transparency in material usage and documentation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-custom-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">
                      Focus on standalone homes with superior quality
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-custom-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">
                      Affordable pricing without compromising on quality
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-200 p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-custom-500 mb-2">
                    50%
                  </h4>
                  <p className="text-gray-700">Focus on Standalone Homes</p>
                </div>
                <div className="bg-neutral-200 p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-custom-500 mb-2">
                    100%
                  </h4>
                  <p className="text-gray-700">Quality Assurance</p>
                </div>
              </div>

              <div className="bg-custom-500 p-6 rounded-lg">
                <p className="text-neutral-100 font-bold text-xl text-center">
                  "Quality pays off, Cutting corners costs more"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-neutral-100 bg-image py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeInUp">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive construction solutions for your dream home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Service Card 1 --> */}
            <div className="group hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg">
                <div className="h-3 bg-custom-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-custom-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    Independent House Construction
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Customized design planning
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      High ceiling architecture
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Premium quality materials
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Service Card 2 --> */}
            <div className="group hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg">
                <div className="h-3 bg-custom-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-custom-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    Quality Assurance
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Material documentation
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Regular quality checks
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Transparency in process
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Service Card 3 --> */}
            <div className="group hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg">
                <div className="h-3 bg-custom-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-custom-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    Eco-Friendly Solutions
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Sustainable materials
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Energy-efficient design
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-custom-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      Natural ventilation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="quality-assurance" className="bg-white py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeInUp">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-lg text-neutral-600">
              Complete transparency and documented quality assurance
            </p>
          </div>

          {/* <!-- Quality Process Timeline --> */}
          <div className="relative mb-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-custom-500"></div>

            {/* <!-- Timeline Items --> */}
            <div className="space-y-16">
              {/* <!-- Item 1 --> */}
              <div className="relative animate__animated animate__fadeInLeft">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      Material Selection
                    </h3>
                    <p className="text-neutral-600">
                      Premium quality materials sourced from certified vendors
                      with complete documentation
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-custom-500 flex items-center justify-center">
                    <span className="text-neutral-100 font-bold">1</span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>

              {/* <!-- Item 2 --> */}
              <div className="relative animate__animated animate__fadeInRight">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-custom-500 flex items-center justify-center">
                    <span className="text-neutral-100 font-bold">2</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      Quality Testing
                    </h3>
                    <p className="text-neutral-600">
                      Regular quality checks and testing at every stage of
                      construction
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Item 3 --> */}
              <div className="relative animate__animated animate__fadeInLeft">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      Documentation
                    </h3>
                    <p className="text-neutral-600">
                      Detailed documentation of materials, processes, and
                      quality checks
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-custom-500 flex items-center justify-center">
                    <span className="text-neutral-100 font-bold">3</span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Quality Standards --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
              <div className="w-12 h-12 bg-custom-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-neutral-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Quality Standards
              </h3>
              <p className="text-neutral-600">
                Adherence to international construction standards and best
                practices
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
              <div className="w-12 h-12 bg-custom-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-neutral-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Regular Monitoring
              </h3>
              <p className="text-neutral-600">
                Continuous monitoring and quality control throughout
                construction
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
              <div className="w-12 h-12 bg-custom-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-neutral-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Certification
              </h3>
              <p className="text-neutral-600">
                Professional certification and documentation for every project
              </p>
            </div>
          </div>

          {/* <!-- Quality Commitment Statement --> */}
          <div className="text-center bg-neutral-100 p-8 rounded-lg animate__animated animate__fadeInUp">
            <h3 className="text-2xl font-bold text-black mb-4">
              "Good Quality is Affordable but Low Cost is Expensive"
            </h3>
            <p className="text-gray-700">
              Our commitment to quality ensures your investment stands the test
              of time
            </p>
          </div>
        </div>
      </section>

      <section id="transparency" className="bg-neutral-100 bg-image py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeInUp">
            <h2 className="text-4xl font-bold text-black mb-4">
              Complete Transparency
            </h2>
            <p className="text-lg text-gray-700">
              We believe in full disclosure of our construction process and
              materials
            </p>
          </div>

          {/* <!-- Transparency Cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* <!-- Documentation Process --> */}
            <div className="bg-neutral-200 p-8 rounded-lg animate__animated animate__fadeInLeft">
              <h3 className="text-2xl font-bold text-custom-500 mb-6">
                Documentation Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-custom-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-neutral-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Detailed material specifications and certifications
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-custom-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-neutral-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Regular progress reports with photographic evidence
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-custom-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-neutral-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Quality test reports and certifications
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Material Tracking --> */}
            <div className="bg-neutral-200 p-8 rounded-lg animate__animated animate__fadeInRight">
              <h3 className="text-2xl font-bold text-custom-500 mb-6">
                Material Tracking
              </h3>
              <div className="space-y-6">
                <div className="bg-neutral-300 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-bold">Cement Quality</span>
                    <span className="text-custom-500">Premium Grade (UltraTech plus cement)</span>
                  </div>
                  <div className="w-full bg-neutral-400 rounded-full h-2">
                    <div
                      className="bg-custom-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-neutral-300 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-bold">Steel Grade</span>
                    <span className="text-custom-500">ISI Certified (Tata steels)</span>
                  </div>
                  <div className="w-full bg-neutral-400 rounded-full h-2">
                    <div
                      className="bg-custom-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-neutral-300 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-bold">Brick Quality</span>
                    <span className="text-custom-500">A Grade (Karimnagar red bricks)</span>
                  </div>
                  <div className="w-full bg-neutral-400 rounded-full h-2">
                    <div
                      className="bg-custom-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Commitment Statement --> */}
          <div className="text-center bg-custom-500 p-8 rounded-lg animate__animated animate__fadeInUp">
            <h3 className="text-2xl font-bold text-neutral-100 mb-4">
              Our Transparency Promise
            </h3>
            <p className="text-neutral-200">
              Every material, every process, and every quality check is
              documented and shared with our clients. Because we believe in
              building trust along with homes.
            </p>
            <button className="mt-6 bg-neutral-100 text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-colors" onClick={onRequestDocument}>
              Request Documentation
            </button>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 place-items-center">
          {/* <!-- Contact Information --> */}
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-black mb-6 text-center px-4 sm:px-6 lg:px-8">
              Gallery
            </h2>
            <p className="text-gray-700 mb-8 text-center px-4 sm:px-6 lg:px-8">
              Explore our curated collection of images showcasing the essence of
              your future dream home
            </p>
            <Gallery />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-100 bg-image py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 place-items-center">
          {/* <!-- Contact Information --> */}
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-black mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8">
              Ready to build your dream home with quality that lasts a lifetime?
              Contact us today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-custom-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-neutral-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-black font-semibold">Our Location</h3>
                  <p className="text-gray-700">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-custom-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-neutral-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-black font-semibold">Phone</h3>
                  <p className="text-gray-700">
                    +91 8885554485, +91 8885554585
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-custom-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-neutral-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-black font-semibold">Email</h3>
                  <p className="text-gray-700">auroonehomes@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section id="footer" className="bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* <!-- Company Info --> */}
            <div className="animate__animated animate__fadeInUp col-start-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Auro Homes</h3>
              <p className="text-gray-700 mb-4">
                Building quality homes that stand the test of time. Your trusted
                partner in construction excellence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#footer"
                  className="text-gray-700 hover:text-custom-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#footer"
                  className="text-gray-700 hover:text-custom-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#footer"
                  className="text-gray-700 hover:text-custom-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="animate__animated animate__fadeInUp col-end-auto">
              <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-custom-500 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-700 hover:text-custom-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-custom-500 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-custom-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-700 hover:text-custom-500 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Bottom Bar --> */}
          <div className="border-t border-neutral-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Auro Homes. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#footer"
                  className="text-gray-400 hover:text-custom-500 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#footer"
                  className="text-gray-400 hover:text-custom-500 text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#footer"
                  className="text-gray-400 hover:text-custom-500 text-sm"
                >
                  Site Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
