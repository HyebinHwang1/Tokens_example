import Image from "next/image";
import { Card } from "./Card";
import BannerExampleImg from "@/assets/images/banner_example_image.png";
import OfficialBadgeIcon from "@/assets/images/official_badge_icon.svg";
import { Button } from "../button/Button";
import Link from "next/link";

export default function CardRealExample() {
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
          <Button
            variant="ghost"
            asChild
            className="ml-auto w-auto h-auto px-2 py-1 text-xs bg-gray-950/60 text-gray-0 hover:text-transparent"
          >
            <Link href="/">1 / 23 +</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
