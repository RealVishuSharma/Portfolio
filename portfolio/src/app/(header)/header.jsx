import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-screen h-20 ">
        <div className="w-screen h-16  flex justify-around">
          <div className="w-1/4 h-16  flex justify-end items-end">
            <Image src="/logo.jpeg" width={50} height={50} className="mr-4 rounded-full"/>
            <p className="text-5xl text-cyan-500 font-extrabold ">Vishu </p>
          </div>

          <div className="w-1/3 h-16 flex items-end justify-between">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">RESUME</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
          </div>

          <div className="w-1/6 h-16  flex items-end justify-start">
            <p className="text-black ">+91 639 789 9473</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
