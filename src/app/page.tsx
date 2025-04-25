import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card";
import Image from "next/image";
import ImageExample from "@/assets/images/example.png";
import NoImage from "@/assets/images/no-image.svg";
import { ArrowRightIcon, HeartIcon, StarIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-primary-100">Primary 100</h1>
      <Card className="w-48 pt-0">
        <CardHeader className="relative w-full px-0">
          <Image src={ImageExample} alt="Card Image" fill className="h-auto" />
        </CardHeader>
        <CardContent>
          <CardTitle>Card Title</CardTitle>
          <CardDescription className="flex flex-col">
            <div className="flex items-center justify-between">
              <span>One After Another </span>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
            <p>Funk Square Shirts</p>
            <p>new color 追加</p>
            <div>
              <span>5%OFF</span>
              <span>¥9,760</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="border">特急発送</span>
              <span className="border">オリジナル</span>
              <span className="border">数量限定</span>
              <span className="border">店舗在庫◎</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <HeartIcon />
                9,000
              </div>
              <div className="flex items-center gap-1">
                <StarIcon />
                4.8(152)
              </div>
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
