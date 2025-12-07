import Image from "next/image";

const RelatedShowcase = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-200 flex flex-col gap-18 px-[3vmin] ">
      <div className="w-full flex items-center gap-8 relative py-10 px-8 h-[55vmin] rounded-3xl">
        <div className="h-full w-1/4 p-1 rounded-md bg-white shadow-md hover:shadow-lg shadow-neutral-500 transition-all duration-150">
          <div className=" h-full p-3 bg-purple-200/80 rounded-sm">
            <h1 className="text-4xl font-bold">Boost your work experience</h1>
            <p className="mt-[5%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo
              amet error? Impedit voluptates odit sint repudiandae. Architecto!
            </p>
          </div>
        </div>
        <div className="h-full w-1/4 p-1 rounded-md bg-white shadow-md hover:shadow-lg shadow-neutral-500 transition-all duration-150">
          <div className=" h-full p-3 bg-blue-200/80 rounded-sm">
            <h1 className="text-4xl font-bold">Boost your work experience</h1>
            <p className="mt-[5%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo
              amet error? Impedit voluptates odit sint repudiandae. Architecto!
            </p>
          </div>
        </div>
        <div className="h-full w-1/4 p-1 rounded-md bg-white shadow-md hover:shadow-lg shadow-neutral-500 transition-all duration-150">
          <div className=" h-full p-3 bg-orange-200/80 rounded-sm">
            <h1 className="text-4xl font-bold">Boost your work experience</h1>
            <p className="mt-[5%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo
              amet error? Impedit voluptates odit sint repudiandae. Architecto!
            </p>
          </div>
        </div>
        <div className="h-full w-1/4 p-1 rounded-md bg-white shadow-md hover:shadow-lg shadow-neutral-500 transition-all duration-150">
          <div className=" h-full p-3 bg-yellow-100 rounded-sm">
            <h1 className="text-4xl font-bold">Boost your work experience</h1>
            <p className="mt-[5%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo
              amet error? Impedit voluptates odit sint repudiandae. Architecto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedShowcase;
