
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { Package, Users, Repeat2 } from "lucide-react";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse.credential) {
      setError("Google sign-in did not return a credential.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/google",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            credential: credentialResponse.credential,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Account creation failed.");
      }

      navigate("/");
    } catch (err) {
      setError(err.message || "Unable to create your account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">

        <Link to="/" className="mb-10 flex items-center gap-2">
          <span className="grid size-11 place-items-center rounded-xl bg-indigo-600 text-white">
            <Package size={25} />
          </span>
          <span className="text-2xl font-bold tracking-tight">
            ShareBox
          </span>
        </Link>

        <p className="mb-3 text-sm font-semibold text-indigo-600">
          JOIN THE COMMUNITY
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Make sharing meaningful.
        </h1>

        <p className="mt-3 leading-6 text-slate-500">
          Create your ShareBox account to give items a second life
          and discover things your community can share.
        </p>

        <div className="mt-8 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError("Google sign-in was unsuccessful.")}
            text="signup_with"
            shape="rectangular"
            theme="outline"
            size="large"
            width="320"
          />
        </div>

        {loading && (
          <p className="mt-4 text-center text-sm text-slate-500">
            Creating your account...
          </p>
        )}

        {error && (
          <p role="alert" className="mt-4 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="mt-8 space-y-4 rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <Users size={20} className="text-indigo-600" />
            <p className="text-sm text-slate-600">
              Connect with your local community.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Repeat2 size={20} className="text-indigo-600" />
            <p className="text-sm text-slate-600">
              Give away or exchange useful items.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign in
          </Link>
        </p>

        <Link
          to="/"
          className="mt-5 block text-center text-sm text-slate-400 hover:text-slate-600"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

export default Signup;
