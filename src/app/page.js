"use client";
import NavBar from "@/components/NavBar/navbar.js";
import ExtensionCard from "@/components/ExtensionCard/ExtensionCard";
import extensionsData from "@/lib/data.json";
import { useState } from "react";

export default function Home() {
  const [extensionInfo, setExtensionInfo] = useState(extensionsData);

  const [allSelected, setAllSelected] = useState(true);
  const [activeSelected, setActiveSelected] = useState(false);
  const [inactiveSelected, setInactiveSelected] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-(--neutral-200)">
      <main className="flex-1">
        <NavBar></NavBar>
        <div className="dashboardTab w-9/10 my-1.5 mx-auto flex flex-col items-center gap-4">
          <h2 className="tabHeader text-2xl font-bold text-(--neutral-800)">
            Extension List
          </h2>
          <div className="tabBtnLayout flex items-center  w-1/1 justify-center gap-4">
            <button
              className={`w-fit py-1 px-4 rounded-2xl ${allSelected ? "bg-red-600 text-white" : "bg-white text-(--neutral-900)"} cursor-pointer shadow-md `}
            >
              All
            </button>
            <button
              className={`w-fit  py-1 px-4 rounded-2xl cursor-pointer shadow-md ${activeSelected ? "bg-red-600 text-white" : "bg-white text-(--neutral-900)"}`}
            >
              Active
            </button>
            <button
              className={`w-fit  py-1 px-4 rounded-2xl cursor-pointer shadow-md ${inactiveSelected ? "bg-red-600 text-white" : "bg-white text-(--neutral-900)"}`}
            >
              Inactive
            </button>
          </div>

          {/* rendering the whole cards in the data.json*/}

          {extensionInfo.map((ext) => (
            <ExtensionCard
              key={ext.name}
              extension={ext}
              onToggle={() =>
                setExtensionInfo((prevState) =>
                  prevState.map((item) =>
                    item.name === ext.name
                      ? { ...item, isActive: !item.isActive }
                      : item,
                  ),
                )
              }
              onRemove={() =>
                setExtensionInfo((prevState) =>
                  prevState.filter((item) => item.name !== ext.name),
                )
              }
            />
          ))}
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
