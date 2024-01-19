import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {MoveRight} from "lucide-react";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col px-8 py-16 font-sans w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <header className="w-full mb-16 flex justify-start">
        <h1 className="text-xl md:text-2xl lg:text-3xl tracking-widest uppercase text-white font-sans-bis">BitGPT</h1>
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
            <div className="flex flex-col w-full md:w-4/5 font-sans-bis mt-12">
              <div className="mb-4 text-[#B3B0B5]">For project updates and early access, enter your email.</div>
              <form className="flex justify-start h-14">
                <Input
                  className="rounded-none text-lg text-white placeholder-[#5F5A5F] focus:ring-0 h-full bg-[#1E1A1E]"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="rounded-none h-full bg-[#1E1A1E]">
                  <MoveRight strokeWidth={1} width={30} height={30}/>
                </Button>
              </form>
            </div>
          </div>
          <div className="w-[40%]">
            <video autoPlay loop className="opacity-100 rounded-full"
                   style={{boxShadow: 'rgba(249, 165, 165, 0.84) 0px 0px 30px -5px'}}>
              <source src={"./ai_consciousness.mp4"} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  )
}
