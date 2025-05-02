"use client";

import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import BrandExample from "@/assets/images/brand_example.svg";
import { ArrowRight, HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="flex gap-4">
        <div>
          <h2 className="mb-4">Card Button(ghost button)</h2>
          <Button
            variant="ghost"
            className="flex items-center gap-2 w-auto h-auto bg-gray-100 p-2 rounded-2xl"
          >
            <div className="w-11 h-11 rounded-full relative">
              <Image
                src={BrandExample}
                alt="no image"
                fill
                className="rounded-full"
              />
            </div>
            <div className="text-gray-500 flex flex-col items-start">
              <p className="text-gray-900 text-xs">MARITHÉ FRANÇOIS GIRBAUD</p>
              <div className="flex gap-2 text-[9px]">
                <span># マニッシュ</span>
                <span># マニッシュ</span>
                <span># マニッシュ</span>
              </div>
              <p className="text-[9px]">directed by kazane</p>
            </div>
          </Button>
        </div>

        <div>
          <h2 className="mb-4 flex gap-1">Option Button(default button)</h2>
          <Button className="w-auto p-2" selected>
            <ArrowRight className="w-4 h-4" />
            <span className="text-xs">Color</span>
            <span className="text-[10px]">(モデル)</span>
          </Button>
        </div>

        <div>
          <h2 className="mb-4 flex gap-1">Capsule button(black button)</h2>
          <Button variant="black" className="rounded-full">
            button name
          </Button>
        </div>

        <div>
          <h2 className="mb-4 flex gap-1">icon button(ghost button)</h2>
          <Button
            variant="ghost"
            className="flex flex-col gap-1 text-gray-900 font-[400]"
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-[9px]"> タイトル</span>
            <span className="text-[9px]">home</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
