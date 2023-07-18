import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center gap-5 bg-black">
        <Link href="/login">
          <button className="bg-white p-3 text-black rounded-lg my-3 hover:bg-gray-400">
            Log In
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="bg-white p-3 text-black rounded-lg my-3 hover:bg-gray-400">
            Sign Up
          </button>
        </Link>
      </div>
      <h1 className="text-5xl font-semibold">Welcome to Home</h1>
    </main>
  );
}
