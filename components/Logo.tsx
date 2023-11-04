import LogoImage from "@logos/black.svg";
import Link from "next/link";
import {AspectRatio} from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-48 h-20 mb-2 sm:mb-0">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            alt="logo"
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
