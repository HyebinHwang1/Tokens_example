import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card";
import Image from "next/image";
import ImageExample from "@/assets/images/example_image_2.png";
import ImageExample3 from "@/assets/images/example_image_3.png";
import ImageExample4 from "@/assets/images/example_image_4.png";
import HangerIcon from "@/assets/images/hanger.svg";
import { ChevronRight, HeartIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { Badge } from "@/components/ui/badge/Badge";
import { useState } from "react";

export function CardStyle({ theme = "white" }: { theme?: "white" | "black" }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card
      className="pt-0 w-60 border-none shadow-none bg-transparent"
      theme={theme}
    >
      <CardHeader className="relative w-full px-0">
        <Image src={ImageExample} alt="Card Image" />
        <div className="absolute bottom-4 flex justify-between w-full items-center">
          <Badge className="text-[10px] bg-[#2f2f2f] px-2 flex items-center ml-2 font-bold">
            <Image src={HangerIcon} alt="Hanger Icon" />
            +3件
          </Badge>

          <Button
            variant="ghost"
            className="w-4 h-4 mr-2 flex items-center"
            onClick={() => setIsLiked(!isLiked)}
          >
            <HeartIcon
              className={`text-white ${isLiked ? "fill-white" : ""}`}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className={`px-0`}>
        <CardTitle className="flex items-center justify-between pb-2">
          <p className="text-xs font-bold">LOOKAST</p>
          <ChevronRight className="w-4 h-4" />
        </CardTitle>
        <CardDescription className="flex gap-1 font-notoSansJP">
          <Badge
            className={`text-[9px] ${theme === "white" ? "bg-[#f3f3f3] text-[#2f2f2f]" : "bg-[#2f2f2f] text-[#f3f3f3]"} px-2 flex items-center`}
          >
            #シンプル
          </Badge>
          <Badge
            className={`text-[9px] ${theme === "white" ? "bg-[#f3f3f3] text-[#2f2f2f]" : "bg-[#2f2f2f] text-[#f3f3f3]"} px-2 flex items-center`}
          >
            #きれいめ
          </Badge>
          <Badge
            className={`text-[9px] ${theme === "white" ? "bg-[#f3f3f3] text-[#2f2f2f]" : "bg-[#2f2f2f] text-[#f3f3f3]"} px-2 flex items-center`}
          >
            #カジュアル
          </Badge>
        </CardDescription>
        <CardFooter className="px-0 flex items-center text-[#999999] text-[9px] pt-2 gap-1">
          <div className="flex items-center">
            <HeartIcon className="w-3 h-3 mr-0.5" fill="#999999" />
            109
          </div>
          <div className="flex items-center">
            <StarIcon className="w-3 h-3 mr-0.5" fill="#999999" />
            1352
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

export function CardThumbnail() {
  return (
    <Card className="pt-0 w-36 border-none shadow-none">
      <CardHeader className="relative w-full px-0">
        <Image src={ImageExample3} alt="Card Image" />
      </CardHeader>
      <CardContent className="px-0 relative bg-white">
        <div className="absolute top-[-44px] translate-x-[-50%] left-1/2">
          <Image src={ImageExample4} alt="Card Image" width={72} height={72} />
        </div>
        <CardTitle className="flex justify-center pb-1 mt-8">
          <p className="text-xs font-bold">Risa</p>
        </CardTitle>
        <CardDescription className="flex justify-center text-[#999999] text-xs">
          160cm
        </CardDescription>
      </CardContent>
    </Card>
  );
}
