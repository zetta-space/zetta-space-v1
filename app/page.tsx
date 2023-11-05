import SideBar from "@/components/SideBar";
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
          <Link href={"/"} className="px-4 py-2.5 bg-blue-500 text-white font-medium text-base rounded-full">Create account.</Link>
        </div>
      </nav>
      <section className="mt-12 py-32 px-4">
        <div>welcome explore</div>
        <div>slide view</div>
        <div>
          <section>cards</section>
        </div>
      </section>
    </main>
  );
}
