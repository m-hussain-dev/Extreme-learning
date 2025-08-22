import React from "react";

export const About = () => {
  return (
    <div className="bg-amber-600 size-60 relative   grid justify-center items-center">
      <div className="bg-blue-400 absolute top-0 left-0 size-10 "></div>
      <div className="bg-yellow-200 size-10 absolute top-0 right-0"></div>
      <div className="bg-green-300 absolute  bottom-0 left-0 size-10"></div>
      <div className="bg-indigo-600 absolute size-10 bottom-0 right-0 "></div>
      Hello
    </div>
  );
};

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// const About = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { text: "Home", href: "#" },
//     { text: "About", href: "#" },
//     { text: "Services", href: "#" },
//     { text: "Contact", href: "#" },
//   ];

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-2xl font-bold text-gray-800">
//               Logo
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item.text}
//                 href={item.href}
//                 className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 {item.text}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
//             {menuItems.map((item) => (
//               <a
//                 key={item.text}
//                 href={item.href}
//                 className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {item.text}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default About;
