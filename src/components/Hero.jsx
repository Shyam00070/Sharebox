import React from "react";
import {
  BookOpen,
  Monitor,
  Armchair,
  ShoppingBag,
  PackagePlus,
  Repeat2,
  Search,
  ArrowUpRight,
  Heart, HeartHandshake, Sparkles, Sparkle
} from "lucide-react";

function Hero() {
  return (
    <div className="flex">
      <div>
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl m-6 max-w-4xl ">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="flex hover:cursor-pointer items-center gap-3 whitespace-nowrap rounded-xl border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#E2E8F0] max-h-8"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                </span>

                <span>COMMUNITY-POWERED · ZERO COST</span>
              </button>
            </div>

            <div className="mt-4">
              <h1 className="text-5xl font-sans text-slate-950 font-extrabold">
                Good things deserve a second life.
              </h1>

              <h1 className="text-5xl font-sans font-extrabold text-indigo-700 mt-2">
                Let yours live on...
              </h1>

              <p className="mt-3 text-md text-slate-700">
                A community-powered platform where unused things find new homes.
                Give away what you no longer need or exchange it for something
                useful, connecting people through a simpler, zero-cost way to
                share.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
              <button className="group flex min-h-44 cursor-pointer flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left transition-colors hover:border-indigo-200 hover:bg-indigo-50/30">
                <div className="flex w-full items-center justify-between">
                  <PackagePlus
                    size={27}
                    className="text-indigo-400"
                    strokeWidth={1.8}
                  />
                  <ArrowUpRight
                    size={20}
                    className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h2 className="mt-5 text-lg font-bold text-slate-950">
                  Offer an Item
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Give useful items a new home. Share books, electronics, or
                  everyday essentials for free.
                </p>
              </button>

              <button className="group flex min-h-44 cursor-pointer flex-col items-start rounded-xl border border-slate-200 bg-white p-5 text-left transition-colors hover:border-indigo-200 hover:bg-indigo-50/30">
                <div className="flex w-full items-center justify-between">
                  <Repeat2
                    size={27}
                    className="text-indigo-600"
                    strokeWidth={1.8}
                  />
                  <ArrowUpRight
                    size={20}
                    className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h2 className="mt-5 text-lg font-bold text-slate-950">
                  Exchange Items
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Have something useful? Trade it with someone for an item you
                  need, without spending money.
                </p>
              </button>

              <button className="group flex min-h-44 flex-col cursor-pointer items-start rounded-xl border border-slate-200 bg-white p-5 text-left transition-colors hover:border-indigo-200 hover:bg-indigo-50/30">
                <div className="flex w-full items-center justify-between">
                  <Search
                    size={27}
                    className="text-indigo-600"
                    strokeWidth={1.8}
                  />
                  <ArrowUpRight
                    size={20}
                    className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h2 className="mt-5 text-lg font-bold text-slate-950">
                  Find an Item
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Discover available items or post a wanted request to find
                  something specific.
                </p>
              </button>
            </div>
            <hr className="my-6 border-slate-200" />
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2 py-4 ">
                 <h1 className="text-md font-bold text-indigo-600">SHAREBOX <span className="text-black">BUILT ON TRUST & KINDNESS</span></h1>
              </div>
              <div className="flex  items-center gap-6 py-4 ">
                 <button className="flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium  transition-colors text-indigo-600">
                   <span className="text-indigo-400" size={20}>&#8377;0</span>
                   <div className="flex flex-col">
                    <h1 className="text-md  text-black font-semibold">Zero Rupees</h1>
                   </div>
                 </button>
                    <button className="flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium  transition-colors text-indigo-600">
                    <Sparkle size={20} className="text-indigo-400" />
                   <div className="flex flex-col">
                    <h1 className="text-md  text-black font-semibold">Zero Hustle</h1>
                   </div>
                 </button>
                    <button className="flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium  transition-colors text-indigo-600">
                   <Heart size={20} className="text-pink-400" />
                   <div className="flex flex-col">
                    <h1 className="text-md  text-black font-semibold">Just Kind Hearts</h1>
                   </div>
                 </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex-1 min-w-md m-6 rounded-xl border shadow-slate-200  border-slate-200 bg-black shadow-xl text-indigo-400 px-6 py-4">
          <h1>Audited Community Stats</h1>
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-3xl font-bold text-white ">1,481 items</h1>
            <p className="text-sm text-slate-50">
              Given a second life through the ShareBox community.
            </p>
          </div>
          <hr className="my-4 border-slate-700" />
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-3xl font-bold text-yellow-300 ">
              <span>&#8377;500</span>
            </h1>
            <p className="text-sm text-slate-50">
              Estimated student expenses spared
            </p>
          </div>
          <hr className="my-4 border-slate-700" />
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-3xl font-bold text-white  ">1,200+ Users</h1>
            <p className="text-sm text-slate-50">
                Every connection makes a difference.              </p>
          </div>
        </div>
        <div className="flex-1 min-w-0 m-6 rounded-xl border border-slate-200  shadow-xl shadow-slate-200">
          <h1 className=" px-6 mt-4  text-lg text-black font-semibold">
            Find value in the{" "}
            <span className="text-indigo-500">unexpected.</span>
          </h1>
          <div className="grid grid-cols-2 gap-4 p-6">
            <button className="flex items-center px-4 gap-2 py-4 bg-white border border-slate-200 font-semibold rounded-xl hover:border-b-indigo-400 cursor-pointer">
              <BookOpen className="mr-2 text-indigo-400" />
              Books & Study
            </button>
            <button className="flex items-center px-4 gap-2 py-4 bg-white border border-slate-200 font-semibold rounded-xl hover:border-b-indigo-400 cursor-pointer">
              <Monitor className="mr-2 text-indigo-400" />
              Electronics
            </button>
            <button className="flex items-center px-4 gap-2 py-4 bg-white border border-slate-200 font-semibold rounded-xl hover:border-b-indigo-400 cursor-pointer">
              <Armchair className="mr-2 text-indigo-400" />
              Furniture
            </button>
            <button className="flex items-center px-4 gap-2 py-4 bg-white border border-slate-200 font-semibold rounded-xl hover:border-b-indigo-400 cursor-pointer">
              <ShoppingBag className="mr-2 text-indigo-400" />
              Clothing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
