"use client";
// "use server";

import Center from "./componets/center";
import Rightbar from "./componets/rightbar";
import Leftbar from "./componets/leftbar";
import styles from "../styles/contents.module.css";

export default  function Home  () {


  return(
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex justify-between items-center" style={{ backgroundColor: 'white'}}>
    <Rightbar />
    <Center />
    <Leftbar />
  </div>
//   <div className="flex justify-between items-center">
//   <Rightbar />
//   <Center />
//   <Leftbar />
// </div>



    // <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
    //   <div className="w-full lg:w-0/0">
    //     <Rightbar />
    //   </div>
    //   <div className="w-full lg:w-0/0">
    //     <Center />
    //   </div>
    //   <div className="w-full lg:w-0/0">
    //   <Leftbar />
    //   </div>
    // </div>
//     <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//   <div className="w-full lg:w-auto lg:mx-2">
//     <Rightbar />
//   </div>
//   <div className="w-full lg:w-auto lg:mx-2">
//     <Center />
//   </div>
//   <div className="w-full lg:w-auto lg:mx-2">
//     <Leftbar />
//   </div>
// </div>

    
    // </main>
  )
}
