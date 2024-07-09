"use client"
import React from 'react'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Themebutton from './Themebutton'






const Navbar = () => {
    let pathname = usePathname() || '/' ;
  return (
   <Disclosure as="nav">
 {({open})=>
    <>
     <div  className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 hover:text-">
        <div  className="flex justfiy-between h-16" >
            <div className="flex justify-between w-full">
                <div className="flex items-start">
                    <Link href= " /">
                    <h1 className="text-2xl font-medium -ml-8 md:-ml-6 sm:ml-96 mt-5" >  Fareed 
                        <span className="text-teal-500" > Bakhsh </span>
                    </h1>
                    </Link>
                </div>

                 <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center hover:text-red-500   dark:hover:text-amber-200" >
                    <Link href="/"
                     prefetch   className={`${
                        pathname === "/"
                          ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                    >
                        Home
                 </Link>

                 <Link href="/services"
                     prefetch   className={`${
                        pathname === "/services"
                          ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                    >
                        Services

                        
                 </Link>


                 <Link href="/projects"
                     prefetch   className={`${
                        pathname === "/projects"
                          ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                    >
                        Projects
                 </Link>







                 <Link href="/feature"
                     prefetch   className={`${
                        pathname === "/feature"
                          ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                    >
                        Feature
                 </Link>




            {/*      <Link href="/about-us"
                     prefetch   className={`${
                        pathname === "/about-us"
                          ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                    >
                        About Us
                 </Link> */}








                 <Link href="/contact-us"
                     prefetch   className={`${
                        pathname === "/contact-us"
                          ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }`}
                    >
                        Contact us
                 </Link>










                 <Themebutton />
                 </div>
              </div>

<div      className="-mr-2 flex items-center sm:hidden">


<Themebutton />

    <Disclosure.Button 
    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500
     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800"
    >
        {open ?(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        ):(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          

        )}

    </Disclosure.Button>
</div>
</div>
</div>

<Disclosure.Panel  className="sm:hidden">
    <div  pt-2 pb-3 space-y-1 >
        <Link   href=" /"
                prefetch
                className={`${
                  pathname == "/"
                    ? "bg-teal-50  border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `} >
                  Home
        </Link>

        <Link   href="/services"
                prefetch
                className={`${
                  pathname == "/services"
                    ? "bg-teal-50  border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `} >
                  Services
        </Link>

        <Link   href="/projects"
                prefetch
                className={`${
                  pathname == "/projects"
                    ? "bg-teal-50  border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `} >
                  Projects
        </Link>

        <Link   href="/feature"
                prefetch
                className={`${
                  pathname == "/feature"
                    ? "bg-teal-50  border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `} >
                Features
        </Link>


        <Link   href="/contact-us"
                prefetch
                className={`${
                  pathname == "/contact-us"
                    ? "bg-teal-50  border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `} >
                  contact us
        </Link>


    </div>
</Disclosure.Panel  >
    </>
    }
   </Disclosure >
  )
}

export default Navbar



// "use client";

// import { Disclosure } from "@headlessui/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Themebutton from "./Themebutton";

// export default function Navbar() {
//   let pathname = usePathname() || "/";
//   return (
//     <Disclosure as="nav">
//       {({ open }) => (
//         <>
//           <div clasName="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div clasName="flex justfiy-between h-16">
//               <div clasName="flex justify-between w-full">
//                 <div clasName="flex items-center">
//                   <Link href="/">
//                     <h1 clasName="text-2xl font-medium">
//                       Fareed <span clasName="text-teal-500">Bahsh</span>
//                     </h1>
//                   </Link>
//                 </div>

//                 <div clasName="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
//                   <Link
//                     href="/"
//                     prefetch
//                     clasName={`${
//                       pathname === "/"
//                         ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                         : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                     }`}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     href="/guestbook"
//                     prefetch
//                     clasName={`${
//                       pathname === "/guestbook"
//                         ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                         : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                     }`}
//                   >
//                     Guestbook
//                   </Link>
//                   <Link
//                     href="/projects"
//                     prefetch
//                     clasName={`${
//                       pathname === "/projects"
//                         ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                         : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                     }`}
//                   >
//                     Projects
//                   </Link>
                 

//                   <Themebutton />
//                 </div>
//               </div>

//               <div clasName="-mr-2 flex items-center sm:hidden">
//                 <Themebutton />




//                 <Disclosure.Button clasName="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
//                   {open ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       clasName="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       clasName="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                       />
//                     </svg>
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel clasName="sm:hidden">
//             <div clasName="pt-2 pb-3 space-y-1">
//               <Link
//                 href="/"
//                 prefetch
//                 clasName={`${
//                   pathname == "/"
//                     ? "bg-teal-50  border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
//                     : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
//                 } `}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/guestbook"
//                 prefetch
//                 clasName={`${
//                   pathname == "/guestbook"
//                     ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
//                     : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
//                 } `}
//               >
//                 Guestbook
//               </Link>
//               <Link
//                 href="/projects"
//                 prefetch
//                 clasName={`${
//                   pathname == "/projects"
//                     ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
//                     : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
//                 } `}
//               >
//                 Projects
//               </Link>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }