"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card/Card";

import Image from "next/image";
import ExampleImage from "@/assets/images/example.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-primary-100">Primary 100</h1>
      <Card className="pt-0">
        <Image src={ExampleImage} className="rounded-t-lg" alt="Card Image" />
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
}
