import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Blog = () =>{
    return <>
        <Head>
            <title>Scrnly Blogs </title>
            <meta name="description" content="Choose from varity of blogs and increase your knowledge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.PNG" />
        </Head>
        <main className="h-screen w-screen flex flex-col bg-gray-200">
            <header className="h-[55px] flex flex-row justify-between px-10 items-center bg-white">
                <div className="flex flex-row items-center">
                    <Image src="/logo.PNG" width={50} height={50} alt="Scrnly Logo"/>
                    <span className="text-xl font-bold pl-2">Scrnly</span>
                </div>
                <Link href="/" className="tracking-wide hover:underline font-bold"> Home </Link>
            </header>
            <section className="flex-1 flex flex-col justify-start items-center gap-5 mt-5">
                <h1 className="text-5xl font-bold my-10">Our Blogs</h1>
                <div className="flex flex-row gap-4 flex-wrap justify-center">
                    <Link href="/blogs/how-to-take-a-screenshot">
                        <div className="h-[150px] w-[400px]">
                            <Image className="w-full" src="/blog-1.jfif" width={150} height={150} alt="How to take a screenshot"/>
                        </div>
                        <div className="w-[400px] bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
                            <h4 className="text-xl px-4 py-2">How to take a screenshot</h4>
                            <p className="text-xs px-4 pb-2">Taking screenshots is a simple and useful tool for capturing and sharing information from your device. However, the method for taking a screenshot....</p>
                        </div>
                    </Link>
                    <Link href="/blogs/how-to-create-a-beautiful-screenshot">
                        <div className="h-[150px] w-[400px]">
                            <Image className="w-full" src="/blog-2.jpg" width={150} height={150} alt="How to take a screenshot"/>
                        </div>
                        <div className="w-[400px] bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
                            <h4 className="text-xl px-4 py-2">How to create a beautiful Screenshot</h4>
                            <p className="text-xs px-4 pb-2">Creating beautiful screenshots for your app, website, or product can be a great way to showcase its features and attract users. Here is a guide on how to generate beautiful screenshots....</p>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    </>
}

export default Blog