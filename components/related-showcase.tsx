import Image from "next/image";

const RelatedShowcase = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-200 flex flex-col gap-18 px-[14vmin] ">
      <div className="w-full flex items-center relative py-10 px-8 h-[55vmin] bg-white rounded-3xl">
        <div className="h-full w-1/2 ">
          <h1 className="text-6xl">Boost your work experience</h1>
          <p className="mt-[5%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo amet
            error? Impedit voluptates odit sint repudiandae. Architecto!
          </p>
        </div>
        <div className="h-full w-1/2 bg-orange-100/70 py-14 px-18 rounded-2xl relative ">
            <div className="h-full w-full bg-linear-180 from-transparent p-1 pb-2 to-orange-600/80  rounded-xl relative z-10 " >
                <div className="w-full h-full bg-gray-200 rounded-md">
                    <Image src={"https://i.pinimg.com/736x/0e/ae/2f/0eae2ffa620351f9ea5f855c959720d6.jpg"} alt="Image" width={500} height={400} className="w-full h-full object-cover rounded-md" ></Image>
                </div>
            </div>
        </div>
          <div className="absolute w-[700px] blur-[90px] aspect-2/1 bg-orange-600/80 -right-10 top-3/5"></div>
          <div className="absolute w-[300px] blur-[100px] aspect-1/2 bg-orange-600/50 -right-60 top-1/4"></div>
      </div>
      <div className="w-full h-[55vmin] bg-white rounded-3xl relative"></div>
      <div className="w-full h-[55vmin] bg-white rounded-3xl"></div>
    </div>
  );
};

export default RelatedShowcase;
