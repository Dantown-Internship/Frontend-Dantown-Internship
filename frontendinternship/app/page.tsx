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
    {/* <Center /> */}
    {/* <Leftbar /> */}
  </div>
//   <div className="flex justify-between items-center" style={{ backgroundColor: 'white' }}>
//   <Rightbar className="flex-shrink-0 w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5" />
//   <Center className="flex-shrink w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5" />
// </div>
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
