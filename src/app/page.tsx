"use client";

import { HomeFilled24 } from "@/components/icons";

/**
 * Renders the home page layout with a loading indicator and a home icon.
 *
 * Displays a loading message above a home icon within a vertically centered container.
 */
export default function Home() {
  console.log(123123123123);
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen">
      <Loadingg />
      <HomeFilled24 width={32} height={32} className="text-red-500" />
    </div>
  );
}

/**
 * Displays a loading message.
 *
 * Renders a simple div with the text "Loading...".
 */
function Loadingg() {
  return <div>Loading...</div>;
}
