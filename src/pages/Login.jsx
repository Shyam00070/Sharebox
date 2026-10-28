
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { Package, ShieldCheck } from "lucide-react";

function Login() {
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
        throw new Error(data.message || "Sign-in failed.");
      }

      navigate("/");
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
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
          WELCOME BACK
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Good things start with sharing.
        </h1>

        <p className="mt-3 leading-6 text-slate-500">
          Sign in to discover items, share what you no longer need,
          and connect with your community.
        </p>

        <div className="mt-8 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError("Google sign-in was unsuccessful.")}
            text="signin_with"
            shape="rectangular"
            theme="outline"
            size="large"
            width="320"
          />
        </div>

        {loading && (
          <p className="mt-4 text-center text-sm text-slate-500">
            Signing you in...
          </p>
        )}

        {error && (
          <p role="alert" className="mt-4 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="mt-8 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
          <ShieldCheck className="mt-0.5 shrink-0 text-indigo-600" size={20} />
          <p className="text-sm leading-5 text-slate-500">
            Secure sign-in powered by Google. ShareBox never asks
            you to create a separate password.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          New to ShareBox?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Create an account
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

export default Login;
