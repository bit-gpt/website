import {Button} from "@/components/ui/button";
import {MoveRight} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col px-8 py-16 font-sans w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <header className="w-full mb-16 flex justify-start">
        <Image src="logo.svg" alt="logo" width={240} height={240}/>
      </header>
      <main className="h-full text-left flex flex-col justify-between">
        <div className="flex">
          <div className="flex-1">
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-white">
              Harness the power of AI with our decentralized, peer-to-peer infrastructure. Accelerate the integration of
              AI into your daily life, while preserving user privacy and data security.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap-reverse justify-center gap-y-4">
          <div className="flex flex-col md:flex-1 md:mr-12 justify-between">
            <p className="text-xl md:text-2xl lg:text-3xl text-white">
              Experience the evolution of AI with BitGPT, where technology meets individual autonomy to shape the future
              of digital democracy.
            </p>
            <div className="flex flex-col w-full md:w-3/5 font-sans-bis mt-12 mb-8">
              {/*@ts-ignore*/}
              <form-widget mode='popup' ucid='0kG0aWwJxAO3sU4XPdJMBCPk8xQ' component="customButton"/>
              <Button size="lg" type="button" className="vrlps-trigger bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Join the Waitlist</Button>
            </div>
          </div>
          <div className="w-[70%] sm:w-[55%] md:w-[42%]">
              <Image
                style={{clipPath: "circle(39%)"}}
                src="/cosmos_0.jpeg"
                alt="cosmos"
                width={500}
                height={500}
              />
            </div>
          </div>
      </main>
    </div>
)
}
