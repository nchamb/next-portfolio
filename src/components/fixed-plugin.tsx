import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export function FixedPlugin() {
  return (
    <a href="/CV - Nipun Maha Mudiyanselage IT Specialist.pdf" download>
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <ArrowDownTrayIcon className="w-5 h-5" />{" "}
        Download CV
      </Button>
    </a>
  );
}