import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {

  const [state,setState] = useState({days:0,hours:0, minutes:0, seconds:0})
  var launchDate = new Date("Feb 1, 2023 00:00:00").getTime()
  function changeTime(){
    var now = new Date().getTime()
    var distance = launchDate - now 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (distance < 0) {
      clearInterval(timer)
      setState({days:0,hours:0, minutes:0, seconds:0})
    }
    else{
      setState({days:days,hours:hours, minutes:minutes, seconds:seconds})
    }
  }

  var timer = setInterval(changeTime,1000)
  return (
    <>
      <Head>
        <title>Scrnly - Convert your images to mockup</title>
        <meta name="description" content="Convert your images to mockup, create beautiful screenshots of your website, add text in existing screenshot and much more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <main className="flex flex-col items-center justify-center w-screen h-screen ">
        <header className="h-[150px] flex flex-row items-center justify-center">
            <Image src="/logo.PNG" width={50} height={50} alt="Scrnly Logo"/>
            <h1 className="text-xl font-extrabold tracking-wide">Scrnly</h1>
        </header>
        <section className="text-center mb-10">
          <h6 className="text-lg uppercase font-semibold text-gray-700">We're Still</h6>
          <h1 className="text-6xl font-extrabold mt-1">Cooking Our Website.</h1>
          <p className="text-md font-semibold text-gray-600 mt-8">We are going to launch our website very soon.</p>
          <p className="text-md font-semibold text-gray-600 mt-1">Stay Tune.</p>
        </section>
        <section className="flex-1 flex flex-row justify-center gap-4 pt-5">
          <div className="w-[100px] h-[120px] bg-gray-300 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg flex flex-col justify-center items-center gap-2">
            <span className="text-4xl font-semibold"> { state.days } </span>
            <span className="text-md font-normal"> Days </span>
          </div>
          <div className="w-[100px] h-[120px] bg-gray-300 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg flex flex-col justify-center items-center gap-2">
            <span className="text-4xl font-semibold"> { state.hours } </span>
            <span className="text-md font-normal"> Hours </span>
          </div>
          <div className="w-[100px] h-[120px] bg-gray-300 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg flex flex-col justify-center items-center gap-2">
            <span className="text-4xl font-semibold"> { state.minutes } </span>
            <span className="text-md font-normal"> Minutes </span>
          </div>
          <div className="w-[100px] h-[120px] bg-gray-300 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg flex flex-col justify-center items-center gap-2">
            <span className="text-4xl font-semibold"> { state.seconds } </span>
            <span className="text-md font-normal"> Seconds </span>
          </div>
        </section>
        <footer className="lg:h-[80px]">
          <Link href="/blogs" className="py-4 px-10 bg-black text-white rounded tracking-wide"> Explore Blogs </Link>
        </footer>
      </main>
    </>
  )
}
