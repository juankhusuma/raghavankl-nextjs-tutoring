import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between px-2 py-1 bg-gray-100 items-center">
      <h1>Home</h1>{" "}
      <ul className="flex w-1/4 justify-between">
        <li>About</li>
        <li>Characters</li>
      </ul>
    </div>
  );
}
