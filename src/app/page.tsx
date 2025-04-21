import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-primary-100">Tokens Test</h1>
      <Button state="hover">Click me</Button>
    </div>
  );
}
