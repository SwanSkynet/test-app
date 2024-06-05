import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href="/auth/register">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Register
            </button>
        </Link>
      </div>
    </main>
  );
}
