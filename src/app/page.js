import NavBar from "@/components/NavBar/navbar.js";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-(--neutral-0)">
      <main className="flex-1">
        <NavBar></NavBar>
        <div className="dashboardTab w-9/10 my-0.5 mx-auto flex flex-col items-center">
          <h2
            className="tabHeader text-2xl font-bold 
          text-(--neutral-800)"
          >
            Extension List
          </h2>
        </div>
      </main>

      <div className="flex justify-center text-center text-xs pb-4 text-gray-600">
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
