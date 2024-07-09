

"use client"

import * as React from "react";

import { JSX, SVGProps, useState } from "react";

const service = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> &any) => {

  const [showContent, setShowContent] = useState(false);

  return (
   
    <section className="py-12 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
          <h1 className="mb-16 font-semibold text-5xl sm:text-7xl xl:text-11xl font- hover:text-red-500 ">
            <span>Get in Touch my team for below services, and grow</span>
            <span className=" rounded-lg px-4 inline-block">the business.</span>
          </h1>
          <p className="font-semibold text-2xl text- tracking-tight  hover:text-cyan-600">Your journey to digital excellence starts here.</p>
        </div>
        <img className="mb-16 mx-auto object-cover rounded-3xl pb-14 -mt-64" style={{ height: '800px'   ,width:"550px",  objectFit:"cover" }} src="/6.png" alt="6" />
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex flex-wrap -m-2.5">
            <div className="w-full md:w-1/3 p-2.5  hover:bg-purple-500">
              <div className="h-full py-12 px-10 text-center bg-white border rounded-lg border-neutral-800 rounded-4xl">
                <h3 className="mb-10 font-semibold text-3xl tracking-tight text-black font-heading">{/* Service 1. */} Web Development</h3>


              
<div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <svg    className="hover:text-red-500 mb-4  dark:text-red-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    >
      <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 019.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 015.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 00-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
    </svg>
    </div>


                
                <p className="font-normal text-lg text-neutral-600 tracking-tight">Our web development service creates responsive and dynamic websites that  tailored to enhance your online presence with the emmerging technology features.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2.5 hover:bg-blue-600">
              <div className="h-full py-12 px-10 text-center bg-white border  border-neutral-800 rounded-lg rounded-4xl">
                <h3 className="mb-10 font-semibold text-3xl tracking-tight text-black font-heading">{/* Service 2. */} Mobile Apps Develop</h3>

                <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <svg    className="hover:text-red-500 mb-4 dark:text-red-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    >
      <path d="M21.7 18.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2l-1.1-.8m-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5M12.3 22H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v9.1c-.6-.6-1.3-1.1-2-1.4V6H3v14h8.3c.2.7.5 1.4 1 2z" />
    </svg>
    </div>

                <p className="font-normal text-lg text-neutral-600 tracking-tight">Our mobile application development service delivers intuitive and scalable apps designed to optimize user experience and expand your digital reach... </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2.5 hover:bg-sky-400">
              <div className="h-full py-12 px-10 text-center bg-white border rounded-lg border-neutral-800 rounded-4xl">


                
                <h3 className="mb-10 font-semibold text-3xl tracking-tighttext-black text-black font-heading">{/* ervice 3. */} React Js</h3>





              
               
<div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <svg    className="hover:text-red-500 mb-4   dark:text-red-600"
      viewBox="0 0 34 32"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
      />
      <path
        fill="currentColor"
        d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
      />
    </svg>
    </div>



                
                <p className="font-normal text-lg text-neutral-600 tracking-tight">We  provides specialized React.js services, that empowering your web applications with robust and efficient frontend development...</p>
              </div>
            </div>
            {showContent && (
              <>
                <div className="w-full md:w-1/3 p-2.5 hover:bg-lime-500">
                  <div className="h-full py-12 px-10 text-center bg-white border rounded-lg border-neutral-800 rounded-4xl">

                    
                    <h3 className="mb-10 font-semibold text-3xl tracking-tight text-black font-heading">{/* Service 4. */} Angular Js</h3>


                    
<div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <svg    className="hover:text-red-500  dark:text-red-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    >
      <path d="M12 2.5l8.84 3.15-1.34 11.7L12 21.5l-7.5-4.15-1.34-11.7L12 2.5m0 2L5 7l1.08 9.22L12 19.5l5.92-3.28L19 7l-7-2.5m0 1.22L16.58 16h-1.71l-.93-2.28h-3.9L9.12 16H7.41L12 5.72m1.34 6.58L12 9.07l-1.34 3.23h2.68z" />
    </svg>
    </div>
  




                    <p className="font-normal text-lg text-neutral-600 tracking-tight">Utilize Angular.js to seamlessly integrate, verify, and search through diverse knowledge platforms in a centralized, secure environment, boosting operational efficiency...</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2.5 hover:bg-yellow-500">
                  <div className="h-full py-12 px-10 text-center bg-white border rounded-lg border-neutral-800 rounded-4xl ">
                    <h3 className="mb-10 font-semibold text-3xl tracking-tight text-black font-heading">{/* Service 5. */} React Native</h3>

<div  style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>
                   <svg    className="hover:text-red-500  mb-4   dark:text-red-600"
      viewBox="0 0 576 512"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    >
      <path d="M250.6 211.74l5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3-7.1-.1-2.3-6.8-2.3 6.8-7.2.1 5.7 4.3zm63.7 0l5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3-7.2-.1-2.3-6.8-2.3 6.8-7.2.1 5.7 4.3zm-91.3 50.5h-3.4c-4.8 0-3.8 4-3.8 12.1 0 4.7-2.3 6.1-5.8 6.1s-5.8-1.4-5.8-6.1v-36.6c0-4.7 2.3-6.1 5.8-6.1s5.8 1.4 5.8 6.1c0 7.2-.7 10.5 3.8 10.5h3.4c4.7-.1 3.8-3.9 3.8-12.3 0-9.9-6.7-14.1-16.8-14.1h-.2c-10.1 0-16.8 4.2-16.8 14.1V276c0 10.4 6.7 14.1 16.8 14.1h.2c10.1 0 16.8-3.8 16.8-14.1 0-9.86 1.1-13.76-3.8-13.76zm-80.7 17.4h-14.7v-19.3H139c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8h-11.4v-18.3H142c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8h-21.7c-2.4-.1-3.7 1.3-3.7 3.8v59.1c0 2.5 1.3 3.8 3.8 3.8h21.9c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8zm-42-18.5c4.6-2 7.3-6 7.3-12.4v-11.9c0-10.1-6.7-14.1-16.8-14.1H77.4c-2.5 0-3.8 1.3-3.8 3.8v59.1c0 2.5 1.3 3.8 3.8 3.8h3.4c2.5 0 3.8-1.3 3.8-3.8v-22.9h5.6l7.4 23.5a4.1 4.1 0 004.3 3.2h3.3c2.8 0 4-1.8 3.2-4.4zm-3.8-14c0 4.8-2.5 6.1-6.1 6.1h-5.8v-20.9h5.8c3.6 0 6.1 1.3 6.1 6.1zM176 226a3.82 3.82 0 00-4.2-3.4h-6.9a3.68 3.68 0 00-4 3.4l-11 59.2c-.5 2.7.9 4.1 3.4 4.1h3a3.74 3.74 0 004.1-3.5l1.8-11.3h12.2l1.8 11.3a3.74 3.74 0 004.1 3.5h3.5c2.6 0 3.9-1.4 3.4-4.1zm-12.3 39.3l4.7-29.7 4.7 29.7zm89.3 20.2v-53.2h7.5c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8h-25.8c-2.5 0-3.8 1.3-3.8 3.8v2.1c0 2.5 1.3 3.8 3.8 3.8h7.3v53.2c0 2.5 1.3 3.8 3.8 3.8h3.4c2.5.04 3.8-1.3 3.8-3.76zm248-.8h-19.4V258h16.1a1.89 1.89 0 002-2v-.8a1.89 1.89 0 00-2-2h-16.1v-25.8h19.1a1.89 1.89 0 002-2v-.8a1.77 1.77 0 00-2-1.9h-22.2a1.62 1.62 0 00-2 1.8v63a1.81 1.81 0 002 1.9H501a1.81 1.81 0 002-1.9v-.8a1.84 1.84 0 00-2-1.96zm-93.1-62.9h-.8c-10.1 0-15.3 4.7-15.3 14.1V276c0 9.3 5.2 14.1 15.3 14.1h.8c10.1 0 15.3-4.8 15.3-14.1v-40.1c0-9.36-5.2-14.06-15.3-14.06zm10.2 52.4c-.1 8-3 11.1-10.5 11.1s-10.5-3.1-10.5-11.1v-36.6c0-7.9 3-11.1 10.5-11.1s10.5 3.2 10.5 11.1zm-46.5-14.5c6.1-1.6 9.2-6.1 9.2-13.3v-9.7c0-9.4-5.2-14.1-15.3-14.1h-13.7a1.81 1.81 0 00-2 1.9v63a1.81 1.81 0 002 1.9h1.2a1.74 1.74 0 001.9-1.9v-26.9h11.6l10.4 27.2a2.32 2.32 0 002.3 1.5h1.5c1.4 0 2-1 1.5-2.3zm-6.4-3.9H355v-28.5h10.2c7.5 0 10.5 3.1 10.5 11.1v6.4c0 7.84-3 11.04-10.5 11.04zm85.9-33.1h-13.7a1.62 1.62 0 00-2 1.8v63a1.81 1.81 0 002 1.9h1.2a1.74 1.74 0 001.9-1.9v-26.1h10.6c10.1 0 15.3-4.8 15.3-14.1v-10.5c0-9.4-5.2-14.1-15.3-14.1zm10.2 22.8c0 7.9-3 11.1-10.5 11.1h-10.2v-29.2h10.2c7.5-.1 10.5 3.1 10.5 11zM259.5 308l-2.3-6.8-2.3 6.8-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3zm227.6-136.1a364.42 364.42 0 00-35.6-11.3c19.6-78 11.6-134.7-22.3-153.9C394.7-12.66 343.3 11 291 61.94q5.1 4.95 10.2 10.2c82.5-80 119.6-53.5 120.9-52.8 22.4 12.7 36 55.8 15.5 137.8a587.83 587.83 0 00-84.6-13C281.1 43.64 212.4 2 170.8 2 140 2 127 23 123.2 29.74c-18.1 32-13.3 84.2.1 133.8-70.5 20.3-120.7 54.1-120.3 95 .5 59.6 103.2 87.8 122.1 92.8-20.5 81.9-10.1 135.6 22.3 153.9 28 15.8 75.1 6 138.2-55.2q-5.1-4.95-10.2-10.2c-82.5 80-119.7 53.5-120.9 52.8-22.3-12.6-36-55.6-15.5-137.9 12.4 2.9 41.8 9.5 84.6 13 71.9 100.4 140.6 142 182.1 142 30.8 0 43.8-21 47.6-27.7 18-31.9 13.3-84.1-.1-133.8 152.3-43.8 156.2-130.2 33.9-176.3zM135.9 36.84c2.9-5.1 11.9-20.3 34.9-20.3 36.8 0 98.8 39.6 163.3 126.2a714 714 0 00-93.9.9 547.76 547.76 0 0142.2-52.4Q277.3 86 272.2 81a598.25 598.25 0 00-50.7 64.2 569.69 569.69 0 00-84.4 14.6c-.2-1.4-24.3-82.2-1.2-123zm304.8 438.3c-2.9 5.1-11.8 20.3-34.9 20.3-36.7 0-98.7-39.4-163.3-126.2a695.38 695.38 0 0093.9-.9 547.76 547.76 0 01-42.2 52.4q5.1 5.25 10.2 10.2a588.47 588.47 0 0050.7-64.2c47.3-4.7 80.3-13.5 84.4-14.6 22.7 84.4 4.5 117 1.2 123zm9.1-138.6c-3.6-11.9-7.7-24.1-12.4-36.4a12.67 12.67 0 01-10.7-5.7l-.1.1a19.61 19.61 0 01-5.4 3.6c5.7 14.3 10.6 28.4 14.7 42.2a535.3 535.3 0 01-72 13c3.5-5.3 17.2-26.2 32.2-54.2a24.6 24.6 0 01-6-3.2c-1.1 1.2-3.6 4.2-10.9 4.2-6.2 11.2-17.4 30.9-33.9 55.2a711.91 711.91 0 01-112.4 1c-7.9-11.2-21.5-31.1-36.8-57.8a21 21 0 01-3-1.5c-1.9 1.6-3.9 3.2-12.6 3.2 6.3 11.2 17.5 30.7 33.8 54.6a548.81 548.81 0 01-72.2-11.7q5.85-21 14.1-42.9c-3.2 0-5.4.2-8.4-1a17.58 17.58 0 01-6.9 1c-4.9 13.4-9.1 26.5-12.7 39.4C-31.7 297-12.1 216 126.7 175.64c3.6 11.9 7.7 24.1 12.4 36.4 10.4 0 12.9 3.4 14.4 5.3a12 12 0 012.3-2.2c-5.8-14.7-10.9-29.2-15.2-43.3 7-1.8 32.4-8.4 72-13-15.9 24.3-26.7 43.9-32.8 55.3a14.22 14.22 0 016.4 8 23.42 23.42 0 0110.2-8.4c6.5-11.7 17.9-31.9 34.8-56.9a711.72 711.72 0 01112.4-1c31.5 44.6 28.9 48.1 42.5 64.5a21.42 21.42 0 0110.4-7.4c-6.4-11.4-17.6-31-34.3-55.5 40.4 4.1 65 10 72.2 11.7-4 14.4-8.9 29.2-14.6 44.2a20.74 20.74 0 016.8 4.3l.1.1a12.72 12.72 0 018.9-5.6c4.9-13.4 9.2-26.6 12.8-39.5a359.71 359.71 0 0134.5 11c106.1 39.9 74 87.9 72.6 90.4-19.8 35.1-80.1 55.2-105.7 62.5zm-114.4-114h-1.2a1.74 1.74 0 00-1.9 1.9v49.8c0 7.9-2.6 11.1-10.1 11.1s-10.1-3.1-10.1-11.1v-49.8a1.69 1.69 0 00-1.9-1.9H309a1.81 1.81 0 00-2 1.9v51.5c0 9.6 5 14.1 15.1 14.1h.4c10.1 0 15.1-4.6 15.1-14.1v-51.5a2 2 0 00-2.2-1.9zM321.7 308l-2.3-6.8-2.3 6.8-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3zm-31.1 7.4l-2.3-6.8-2.3 6.8-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3zm5.1-30.8h-19.4v-26.7h16.1a1.89 1.89 0 002-2v-.8a1.89 1.89 0 00-2-2h-16.1v-25.8h19.1a1.89 1.89 0 002-2v-.8a1.77 1.77 0 00-2-1.9h-22.2a1.81 1.81 0 00-2 1.9v63a1.81 1.81 0 002 1.9h22.5a1.77 1.77 0 002-1.9v-.8a1.83 1.83 0 00-2-2.06zm-7.4-99.4L286 192l-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3-7.1-.1z" />
    </svg>
    </div>
                    <p className="ffont-normal text-lg text-neutral-600 tracking-tight">We  offers React Native services, crafting valuable content strategies and creating seamless mobile experiences...</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2.5  hover:bg-red-500">
                  <div className="h-full py-12 px-10 text-center bg-white border rounded-lg border-neutral-800 rounded-4xl ">
                    <h3 className="mb-10 font-semibold text-3xl tracking-tight text-black font-heading">{/* Service 6. */} TypeScript</h3>


               

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <svg
    className="hover:text-red-500  mb-4   dark:text-red-600"
    viewBox="0 0 24 24"
    fill="currentColor"
    height="3em"
    width="3em"
    {...props}
  >
    <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z" />
  </svg>
</div>



                    <p className="font-normal text-lg text-neutral-600 tracking-tight">We provide TypeScript services for building robust, scalable applications that ensure lasting customer engagement through personalized email marketing campaigns...</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-auto">
            {!showContent && (
              <button onClick={() => setShowContent(true)} className="inline-flex justify-center bg-pink-700 items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-nfuchsia-600  hover:bg-fuchsia-600 focus:bg-fuchsia-600 rounded-lg focus:ring-4 focus:ring-fuchsia-600 transition duration-200">
                All services
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default service

