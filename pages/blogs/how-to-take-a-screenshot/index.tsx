import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const HowToTakeAScreenshot = () => {
    return <>
        <Head>
            <title>Scrnly Blogs - How to take a screenshot </title>
            <meta name="description" content="Taking screenshots is a simple and useful tool for capturing and sharing information from your device. However, the method for taking a screenshot can vary depending on the type of device you are using" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.PNG" />

            <meta property="og:title" content="How to take a screenshot"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Taking screenshots is a simple and useful tool for capturing and sharing information from your device. However, the method for taking a screenshot can vary depending on the type of device you are using"/>
            <meta property="og:keywords" content="Taking screenshots,Taking screenshots on smartphone,How to take screenshot on iPad,How to take screenshot on mac,How to take screenshot on laptop,How to take screenshot on tablets"/>
            <meta property="og:image" content="/blog-2.jpg"/>

        </Head>
        <main className=" flex flex-col bg-gray-200">
            <header className="h-[55px] flex flex-row justify-between px-10 items-center bg-white">
                <div className="flex flex-row items-center">
                    <Image src="/logo.PNG" width={50} height={50} alt="Scrnly Logo"/>
                    <span className="text-xl font-bold pl-2">Scrnly</span>
                </div>
                <div>
                    <Link href="/" className="tracking-wide hover:underline font-bold"> Home </Link>
                </div>
            </header>
            <section className="flex-1 px-10">
                <h1 className="text-4xl font-extrabold py-10"> How to take a screenshot </h1>
                <p className="indent-4 text-lg">
                Taking screenshots is a simple and useful tool for capturing and sharing information from your device. However, the method for taking a screenshot can vary depending on the type of device you are using. In this article, we will discuss how to take a screenshot on different devices, including smartphones, tablets, and computers.
                </p>

                <div className="pb-5">
                    <h4 className="text-2xl pt-4 pb-2 font-bold">Smartphones</h4>
                    <div className="px-6 pt-2">
                        <p className="text-lg pb-4">
                            <span className="text-2xl font-bold pr-4">1. iPhone -</span>To take a screenshot on an iPhone, press and hold the power button and the home button at the same time. The screen will flash and you will hear a camera shutter sound, indicating that the screenshot has been taken. The screenshot will be saved in the Photos app.
                        </p>
                        <p className="text-lg pb-4">
                            <span className="text-2xl font-bold pr-4">2. Android -</span>The method for taking a screenshot on an Android device can vary depending on the manufacturer and model. On most devices, you can press and hold the power button and the volume down button at the same time. On some devices, you may need to press and hold the power button and the home button.
                        </p>
                    </div>
                </div>
                <div className="pb-5">
                    <h4 className="text-2xl pt-4 pb-2 font-bold">Tablets</h4>
                    <div className="px-6 pt-2">
                        <p className="text-lg pb-4">
                            <span className="text-2xl font-bold pr-4">1. iPad -</span>To take a screenshot on an iPad, press and hold the power button and the home button at the same time. The screen will flash and you will hear a camera shutter sound, indicating that the screenshot has been taken. The screenshot will be saved in the Photos app.
                        </p>
                        <p className="text-lg pb-4">
                            <span className="text-2xl font-bold pr-4">2. Android -</span>The method for taking a screenshot on an Android tablet can vary depending on the manufacturer and model. On most devices, you can press and hold the power button and the volume down button at the same time. On some devices, you may need to press and hold the power button and the home button.
                        </p>
                    </div>
                </div>
                
                <div className="pb-5">
                    <h4 className="text-2xl pt-4 pb-2 font-bold">Computers</h4>
                    <div className="px-6 pt-2">
                        <p className="text-lg pb-4">
                            <span className="text-2xl font-bold pr-4">1. Windows -</span>To take a screenshot on a Windows computer, press the "Print Screen" key on your keyboard. This will take a screenshot of the entire screen. To take a screenshot of just one window, press the "Alt" and "Print Screen" keys at the same time.
                        </p>
                        <p className="text-lg pb-4">
                            <span className="text-2xl font-bold pr-4">2. Android -</span>To take a screenshot on a Mac, press the "Command," "Shift," and "3" keys at the same time. This will take a screenshot of the entire screen. To take a screenshot of just one window, press the "Command," "Shift," and "4" keys at the same time, then press the "Spacebar" and click on the window you want to capture.
                        </p>
                    </div>
                </div>
                
                <p className="py-5">
                In conclusion, taking a screenshot is a simple and useful tool for capturing and sharing information from your device. The method for taking a screenshot can vary depending on the type of device you are using. By following the steps outlined in this article, you should be able to take a screenshot on any device.
                </p>
                
            </section>
        </main>
    </>
}

export default HowToTakeAScreenshot