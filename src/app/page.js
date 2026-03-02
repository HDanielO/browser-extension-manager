import NavBar from "@/components/NavBar/navbar.js";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <NavBar></NavBar>
      </main>

      <div className="flex justify-center text-center text-sm pb-4 text-gray-600">
        Challenge by{"  "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="underline hover:text-gray-800"
        >
          Frontend Mentor
        </a>
        . Coded by{"   "}
        <a
          href="https://github.com/HDanielO"
          className="underline hover:text-gray-800"
        >
          Hameed Daniel
        </a>
        .
      </div>
    </div>
  );
}
