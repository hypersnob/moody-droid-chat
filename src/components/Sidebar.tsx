"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSONAS, getPersonaData } from "@/lib/utils";
import { Menu, Github, ChevronLeft } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Avatar from "./Avatar";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className={clsx(
          "fixed top-[2.25rem] right-4 z-50 md:hidden transition-colors",
          isOpen ? "text-base-300" : "text-base-400"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-40 w-xs bg-white border-r border-base-100 transition-transform duration-300 ease-in-out",
          "md:translate-x-0 md:static",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-22 px-4 border-b border-base-100">
            <h2 className="text-xl font-semibold text-base-500">Droids:</h2>
            <button
              onClick={toggleSidebar}
              className="md:hidden text-base-400"
              aria-label="Close sidebar"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Contacts list */}
          <nav className="flex-1 overflow-y-auto">
            <ul>
              {PERSONAS.map((persona) => {
                const personaData = getPersonaData(persona);
                const isActive = pathname === `/chat/${persona}`;

                return (
                  <li key={persona}>
                    <Link
                      href={`/chat/${persona}`}
                      className={clsx(
                        "flex items-center px-4 py-6 transition-colors border-b border-base-100",
                        isActive ? "bg-base-50" : "hover:bg-base-50"
                      )}
                      onClick={() => {
                        if (isOpen) setIsOpen(false);
                      }}
                    >
                      <Avatar persona={persona} size="sm" />
                      <div className="ml-3">
                        <p className="font-medium text-base-500 text-sm">
                          {personaData.name}
                        </p>
                        <p className="text-xs text-base-400">@{persona}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="flex justify-between items-end p-6">
            <a
              href="https://github.com/hypersnob/moody-droid-chat"
              target="_blank"
              className="text-base-300 hover:text-base-400 transition-colors  "
            >
              <Github size={24} />
            </a>
            <Link
              href="/about"
              className="text-xs text-base-400 hover:text-base-500 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
