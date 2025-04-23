import { Badge } from "@/components/ui/badge/Badge";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-primary-100">Primary 100</h1>

      <h1 className="text-2xl font-bold mt-10 mb-5">Badge</h1>
      <section className="flex gap-4">
        <Badge weight="outline" intent="info">
          Info
        </Badge>
        <Badge weight="outline" intent="success">
          Success
        </Badge>
        <Badge weight="outline" intent="danger">
          Danger
        </Badge>
      </section>
    </div>
  );
}
