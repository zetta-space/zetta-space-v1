import React from "react";

function Footer() {
  return (
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
          powered by zetta technologies
        </p>
      </div>
    </footer>
  );
}

export default Footer;
