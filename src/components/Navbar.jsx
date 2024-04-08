// import React from 'react'
// import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
//         <h1 className='w-30 text-3xl font-bold text-[#236e56]'>React.</h1>
//         <ul className='flex hidden'>
//             <li className='p-4'>SERVICES</li>
//             <li className='p-4'>ABOUT US</li>
//             <li className='p-4'>CONTACT US</li>
//             <li className='p-4'>CAREERS</li>
//         </ul>
//         <div>
//         <AiOutlineMenu size={20} />
//         </div>

//         <div>
//         <div className='flex left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[white]'>
//         <h1 className='w-30 text-3xl font-bold text-[#236e56] m-4'>React.</h1>
//           <ul className='pt-12 uppercase'>
//             <li className='p-4'>SERVICES</li>
//             <li className='p-4'>ABOUT US</li>
//             <li className='p-4'>CONTACT US</li>
//             <li className='p-4'>CAREERS</li>
//             </ul>
//         </div>
//         </div>

//     </div>

//   )
// }

// export default Navbar

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assests/projectimages/Logo.png";

const navigation = [
  { name: "SERVICES", href: "#", current: true },
  { name: "ABOUT US", href: "#", current: false },
  { name: "CONTACT US", href: "#", current: false },
  { name: "CAREERS", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-purple-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon
                      className="flex flex-1 block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-1 flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={Logo} alt="My Image" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
