import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
      <p>
        This might be a navigated to route but this is still yet to be
        implemented
      </p>
    </div>
  );
}
