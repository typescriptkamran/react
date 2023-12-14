import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ProductCard from "@/components/ui/ProductCard";
import Chat from "@/components/ui/Chat";
import Team from "@/components/ui/Team";

export default function Home() {
  return (
    <div className="px-4 lg:px-8 xl:px-16">
      <div>
        <Hero />
      </div>

        <div className="my-5 mx-5 lg:mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-6 lg:my-5">
          <button className="btn btn--secondary">Free Website Review </button>
          <button className="btn btn--primary">Send email</button>
        </div>

           <div className="flex flex-col lg:flex-row lg:space-x-6 mt-5 lg:mt-10">
          <div className="lg:w-1/2">
            <Team />
          </div>
          <div className="lg:w-1/2">
            <Chat />
          </div>
        </div>

        
      </div>
    </div>
  );
}
