"use client";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-7">
      <form className="flex flex-col w-4/12 gap-3">
        <input
          className="p-2 border border-black"
          type="text"
          placeholder="Username"
        />
        <input
          className="p-2 border border-black"
          type="password"
          placeholder="Password"
        />
        <button className="bg-slate-400 p-3 w-4/12" type="submit">
          Log In
        </button>
        <button
          onClick={() => alert("Google")}
          className="bg-slate-400 p-3 w-4/12"
        >
          Google
        </button>
        <button
          onClick={() => alert("GitHub")}
          className="bg-slate-400 p-3 w-4/12"
        >
          GitHub
        </button>
        <Link href="/sign-up">
          <button className="bg-slate-400 p-3 w-4/12">Sign Up</button>
        </Link>
        <Link href="/">
          <button className="bg-slate-400 p-3 w-4/12">Home</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
