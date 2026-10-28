import OfferItem from "./OfferItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Plus,
  ChevronDown,
  ClipboardList,
  Info,
  Radar,
  User
} from "lucide-react";
import ShareBoxLogo from "./ShareboxLogo";

function Navbar() {
    const navigate = useNavigate();
    const [item , SetItem] = useState(false);
  return (
    <nav className="w-full min-h-20 bg-white/90 border-b border-slate-200/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full items-center justify-between gap-5 px-5 lg:px-8">


        <div className="flex shrink-0 items-center gap-5">
          <ShareBoxLogo />

          <button
            type="button"
            className="flex hover:cursor-pointer items-center gap-3 whitespace-nowrap rounded-lg border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#E2E8F0]"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
            </span>

            <span>Chennai TechHub / Guindy</span>
            <ChevronDown size={16} className="shrink-0 text-slate-500" />
          </button>
        </div>


        <div className="flex min-w-0 flex-1 items-center justify-end gap-4">

   
          <div className="min-w-[140px] max-w-sm flex-1">
            <input
              type="search"
              placeholder="Search items..."
              aria-label="Search items"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-indigo-600"
            >
              <ClipboardList size={18} />
              <span>Requests</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-indigo-600"
            >
              <Radar size={18} />
              <span>Radar Map</span>
            </button>

             <button
              type="button"
              className="flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-indigo-600"
            >
              <User size={18} />
              <span>Login</span>
            </button>

            <button
            onClick={() => navigate("/about")}
              type="button"
              className="flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-indigo-600"
            >
              <Info size={18} />
              <span>About</span>
            </button>
          </div>

          <button
           onClick={() => navigate("/offer-item")}
            type="button"
            className="flex shrink-0 hover:cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-[#080B14] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#312E81]"
          >
            <Plus size={18} className="mr-2" />
            Offer an Item
          </button>
        </div>
      </div>
          {item && <OfferItem onClose={() => SetItem(false)} />}
    </nav>
  );
}

export default Navbar;
