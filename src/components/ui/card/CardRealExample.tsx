import Image from "next/image";
import { Card, CardContent, CardTitle } from "./Card";
import BannerExampleImg from "@/assets/images/banner_example_image.png";
import OfficialBadgeIcon from "@/assets/images/official_badge_icon.svg";
import heartIcon from "@/assets/images/heart_icon.svg";
import chevronRightIcon from "@/assets/images/chevron_right.svg";
import ProductCardImg from "@/assets/images/product_example.png";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Badge } from "../badge/Badge";

export function CardRealExample() {
  return (
    <Card className="w-[336px] h-[420px] p-0">
      <div className="relative w-full h-full ">
        <Image
          src={BannerExampleImg}
          fill
          alt="배너 예시 이미지"
          className="absolute inset-0 object-cover rounded-xl z-0"
        />
        <div className="flex flex-col p-5 text-white z-2 relative h-full justify-end pb-5 font-noto-sans-jp">
          <div className="flex items-center gap-1 mb-3">
            <p className="text-2xl font-bold">エミス</p>
            <Image src={OfficialBadgeIcon} alt="공식 배지" />
          </div>
          <p className="mb-1 text-xs">今、人気刀千亍厶国内最安值挑戦中</p>
          <p className="mb-6 text-xs">SALE NOW, 11:00AM - </p>
          <Link
            href="/"
            className="ml-auto px-2 py-1 text-xs bg-gray-950/60 text-gray-0 rounded-sm"
          >
            1 / 23 +
          </Link>
        </div>
      </div>
    </Card>
  );
}

export function ProductCardExample() {
  return (
    <Card className="w-[140px] h-auto p-0 rounded-none border-none shadow-none">
      <div className="w-full h-full relative">
        <Badge
          intent="info"
          className="w-[30px] h-[30px] font-bold flex justify-center absolute rounded-none"
        >
          4
        </Badge>
        <Image
          src={ProductCardImg}
          alt="배너 예시 이미지"
          width={140}
          height={140}
        />
        <button className="cursor-pointer absolute bottom-2 right-2">
          <Image src={heartIcon} alt="하트 아이콘" />
        </button>
      </div>

      <CardTitle className="pt-3 text-xs flex pb-1">
        <p className="flex-1 line-clamp-1">One after another Hello</p>
        <Image src={chevronRightIcon} alt="체버 오른쪽 아이콘" />
      </CardTitle>
      <CardContent className="text-xs px-0 pr-2">
        <p className="line-clamp-1 break-all">FUNKY SQUARE SHOULDER BAG</p>
        <p className="font-bold pb-1">new color 追加</p>
        <div className="flex gap-1 font-bold pb-1">
          <span className="text-primary-500">5%OFF</span>
          <span>¥9,760</span>
        </div>
        <div className="flex flex-wrap gap-1 text-xs pb-1">
          <span className="rounded-xs px-1 border bg-secondary-500 border-secondary-500 text-gray-0 text-[10px] mr-0">
            特急発送
          </span>
          <span className="rounded-xs px-1 border border-gray-500 text-gray-900 text-[10px]">
            オリジナル
          </span>
          <span className="rounded-xs px-1 border border-gray-500 text-gray-900 text-[10px]">
            数量限定
          </span>
          <span className="rounded-xs px-1 border border-gray-500 text-gray-900 text-[10px]">
            店舗在庫◎
          </span>
        </div>
        <div className="flex gap-1 text-xs">
          <div className="flex items-center gap-0.5 text-[10px] text-gray-500">
            <Heart fill="#878787" className="w-2 h-2" />
            <span>8,012</span>
          </div>
          <div className="flex items-center gap-0.5 text-[10px] text-gray-500">
            <Star fill="#878787" className="w-2 h-2" />
            <span>4.8 (152)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
