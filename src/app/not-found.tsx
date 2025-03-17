import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold text-base-600">
        Seems like you're lost
      </h2>
      <p className="text-base-500 mb-3">
        We couldn't find the page you were looking for.
      </p>
      <Link
        href="/"
        className="text-base-500 hover:text-base-600 px-5 py-1 bg-base-200 rounded-full"
      >
        Return Home
      </Link>
    </div>
  );
}
