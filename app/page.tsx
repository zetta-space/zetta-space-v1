import CategoryBadge from "@/components/CategoryBadge";
import SideBar from "@/components/SideBar";
import SliderMenu from "@/components/SliderMenu";
import Thumbnail from "@/components/Thumbnail";
import { categories } from "@/lib/temp/categories.temp";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white w-full">
      <section className="mt-8 py-32 px-4">
        <div className="w-full h-[600px] flex px-10">
          <div className="flex flex-col w-1/2 justify-center place-items-stretch gap-4 my-4">
            <h2 className="text-6xl text-slate-800 font-medium uppercase bg-clip-text">
              Knowledge is the base of Future
            </h2>
            <p className="mr-5">
              Open-platform browse, try new ideas and technologies which craft
              you as a much more stand-out human
            </p>
            <Link href={"/"}> explore</Link>
          </div>
          <div className="w-1/2 h-[600px] flex justify-center">
            <Image
              alt="bg-hero"
              src={"https://i.ibb.co/48qqGnp/vr-of-future.jpg"}
              className="rounded-lg"
              width={1500}
              height={0}
            />
          </div>
        </div>
        <SliderMenu />
        <div className="py-12 w-full mx-auto">
          <section className="flex flex-col justify-start">
            <div className="flex flex-wrap flex-row justify-center items-center gap-8">
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
