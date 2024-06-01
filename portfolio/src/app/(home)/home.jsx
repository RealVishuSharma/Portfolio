import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Main = () => {
  return (
    <>
         <div className="w-screen h-screen  flex justify-start items-center flex-col mb-5">
        <div className="w-44 h-80  flex items-end">
          <Avatar className="w-44 h-44">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="w-84 h-16  flex items-start justify-center mb-5 mt-5">
          <p className="text-5xl  font-extrabold">Hi, I'am Vishu Sharma.</p>
        </div>

        <div className="w-full h-20  flex items-center justify-start flex-col">
          <p>
            I'am a Full Stack Web Developer. I can provide clean code and pixel
            perfect design.
          </p>
          <p>
            I also make websites more and more interactive with web animations.
          </p>
        </div>

        <div className="flex justify-center items-center">
        <div className="border-2 rounded-full border-black m-3 mt-0">
            <Image src="/OIP.jpeg" width={30} height={30} className= "m-1" alt="FaceBook"/>
        </div>

        <div className="border-2 rounded-full border-black m-3 mt-0">
            <Image src="/twitter.jpeg" width={30} height={30}  className= "m-1" alt="Twitter"/>
        </div>

        <div className="border-2 rounded-full border-black m-3 mt-0">
            <Image src="/github.jpeg" width={30} height={30} className= "m-1" alt="Github" href="www.github.com/realvishusharma"/>
        </div>
        </div>

      </div>
    </>
  )
}

export default Main
