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
      <nav className="w-full px-10 py-5 bg-white shadow-md fixed top-0 flex flex-row justify-between items-center">
        <div>
          <SideBar />
        </div>
        <span>
          <h2 className="text-5xl font-bold capitalize">Z.</h2>
        </span>
        <div className="flex flex-row justify-start items-center gap-3">
          <Link
            href={"/"}
            className="px-4 py-2.5 bg-blue-500 text-white font-medium text-base rounded-full"
          >
            Create account.
          </Link>
        </div>
      </nav>
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
            <div className="flex flex-wrap flex-row justify-center items-center gap-12">
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
              <Thumbnail />
            </div>
          </section>
        </div>
      </section>
      <footer className="p-2 bg-black">
        {/* <div className="flex flex-row justify-start items-center">
          <section className="">
            <h2 className="text-3xl text-white font-bold capitalize">Z.</h2>
            <div className="border-y-[1px] border-slate-300">
              <p className="text-sm text-slate-300 font-light capitalize">zetta space</p>
            </div>
          </section>
          <section>
            <ul>
              <li>
                <Link href={"/"} className="text-white">Home</Link>
              </li>
              <li>
                <Link href={"/"} className="text-white">Home</Link>
              </li>
              <li>
                <Link href={"/"} className="text-white">Home</Link>
              </li>
            </ul>
          </section>
          <section></section>
        </div> */}
        <div className="flex px-5 justify-center">
          <p className="font-medium text-white capitalize py-3 text-xs">
            all rights received - zetta space powered by zetta technologies
          </p>
        </div>
      </footer>
    </main>
  );
}
