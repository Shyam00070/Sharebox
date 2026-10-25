
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeft as BackIcon,
  MapPin,
  Clock3,
  Eye,
  Gift,
  Repeat2,
  Clipboard,
  Bookmark,
  MessageCircle,
  ShieldCheck,
  BookOpen,
  Tag,
  Layers,
  Package,
} from "lucide-react";

function ProductDetails() {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setItem(null);
    setError("");

    fetch(`http://localhost:5000/api/items/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setCurrentImage(0);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load this item. Please try again.");
      });
  }, [id]);

  if (error) {
    return (
      <div className="grid min-h-[60vh] place-items-center px-6">
        <div className="text-center">
          <Package size={40} className="mx-auto mb-4 text-slate-400" />
          <p className="text-lg font-semibold text-slate-800">{error}</p>
          <Link
            to="/"
            className="mt-4 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white"
          >
            Back to items
          </Link>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <p className="text-slate-500">Loading item...</p>
      </div>
    );
  }

  const images = item.itemImage || [];
  const isGiveaway = item.sharingType === "Giveaway";

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">


        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link
            to="/"
            className="inline-flex items-center gap-2 transition hover:text-indigo-600"
          >
            <BackIcon size={16} />
            Back to items
          </Link>
          <span>/</span>
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <span>/</span>
          <span className="max-w-[200px] truncate text-slate-800">
            {item.itemName}
          </span>
        </div>


        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">


          <section className="min-w-0">


            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:h-[400px]">
                {images.length > 0 ? (
                  <img
                    src={images[currentImage]}
                    alt={item.itemName}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="text-center text-slate-400">
                    <Package size={48} className="mx-auto mb-2" />
                    <p>No image available</p>
                  </div>
                )}

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-md transition hover:bg-indigo-50"
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-md transition hover:bg-indigo-50"
                    >
                      <ArrowRight size={20} />
                    </button>

                    <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                      {currentImage + 1} / {images.length}
                    </span>
                  </>
                )}
              </div>


              {images.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                  {images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-24 ${
                        currentImage === index
                          ? "border-indigo-600"
                          : "border-transparent hover:border-slate-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${item.itemName} ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>


            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Clipboard size={21} />
                </div>
                <h2 className="text-lg font-bold">Description</h2>
              </div>

              <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-slate-600">
                {item.itemDescription || "No description available."}
              </p>

   
              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <BookOpen size={20} className="mt-1 text-slate-500" />
                  <div>
                    <p className="text-xs text-slate-500">Category</p>
                    <p className="mt-1 text-sm font-medium">
                      General item
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag size={20} className="mt-1 text-slate-500" />
                  <div>
                    <p className="text-xs text-slate-500">Condition</p>
                    <p className="mt-1 text-sm font-medium">
                      Not specified
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers size={20} className="mt-1 text-slate-500" />
                  <div>
                    <p className="text-xs text-slate-500">Sharing type</p>
                    <p className="mt-1 text-sm font-medium">
                      {item.sharingType}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>


          <section className="flex min-w-0 flex-col gap-5">


            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${
                    isGiveaway
                      ? "bg-indigo-50 text-indigo-700"
                      : "bg-violet-50 text-violet-700"
                  }`}
                >
                  {isGiveaway ? <Gift size={16} /> : <Repeat2 size={16} />}
                  {item.sharingType}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Available
                </span>
              </div>

              <h1 className="mt-5 break-words text-3xl font-bold tracking-tight sm:text-4xl">
                {item.itemName}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  {item.itemLocation || "Location not specified"}
                </span>

                {item.createdAt && (
                  <span className="flex items-center gap-2">
                    <Clock3 size={18} />
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                )}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    alert("Request functionality will be added next.")
                  }
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
                >
                  <MessageCircle size={19} />
                  Request this item
                </button>

                <button
                  type="button"
                  onClick={() => setSaved((prev) => !prev)}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 font-medium transition ${
                    saved
                      ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Bookmark
                    size={19}
                    fill={saved ? "currentColor" : "none"}
                  />
                  {saved ? "Saved" : "Save"}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">
                  {item.ownerName?.[0]?.toUpperCase() || "S"}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold">
                    {item.ownerName || "ShareBox Member"}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Item shared with the community
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    alert("Messaging functionality will be added next.")
                  }
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-100 px-3 py-2.5 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50"
                >
                  <MessageCircle size={17} />
                  Message
                </button>
              </div>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin size={21} />
                <h2 className="text-lg font-bold">Location</h2>
              </div>

              <div className="mt-4 flex min-h-28 items-center gap-3 rounded-xl bg-slate-50 p-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-indigo-600">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold">
                    {item.itemLocation || "Location not specified"}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Item pickup location
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl bg-indigo-50 p-3 text-sm leading-6 text-indigo-700">
                <ShieldCheck size={20} className="mt-0.5 shrink-0" />
                Confirm the pickup details with the item owner before meeting.
              </div>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
