import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ImageOff } from "lucide-react";

function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/items");

        if (!response.ok) {
          throw new Error("Failed to fetch items. Please try again.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid response received from server.");
        }

        setItems(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <p className="mt-10 text-center text-slate-500">
        Loading items...
      </p>
    );
  }

  if (error) {
    return (
      <p role="alert" className="mt-10 text-center text-red-500">
        {error}
      </p>
    );
  }

  return (
    <section className="m-6 min-h-screen rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold text-slate-900">
        Discover Items
      </h2>

      <p className="mb-6 text-sm text-slate-500">
        Find useful items shared by your community.
      </p>

      {items.length === 0 ? (
        <p className="py-12 text-center text-slate-500">
          No items available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item._id}
              role="link"
              tabIndex={0}
              onClick={() => navigate(`/product/${item._id}`)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(`/product/${item._id}`);
                }
              }}
              className="cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div className="flex h-52 items-center justify-center overflow-hidden bg-slate-100">
                {item.itemImage?.[0] ? (
                  <img
                    src={item.itemImage[0]}
                    alt={item.itemName}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                ) : null}

                <div
                  className={`flex flex-col items-center gap-2 text-slate-400 ${
                    item.itemImage?.[0] ? "hidden" : ""
                  }`}
                >
                  <ImageOff size={32} />
                  <span className="text-sm">Image unavailable</span>
                </div>
              </div>

              <div className="p-5">
                <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {item.sharingType}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {item.itemName}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                  {item.itemDescription}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} className="shrink-0" />
                  <span>{item.itemLocation}</span>
                </div>

                <p className="mt-4 text-sm font-semibold text-indigo-600">
                  View details →
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;