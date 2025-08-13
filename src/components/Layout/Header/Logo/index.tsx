import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
      <Link href="/">
        <Image
          src={`${getImagePrefix()}images/logo/logo.svg`}
          alt="株式会社ユーマインド"
          width={160}
          height={50}
          quality={100}
          className="inline-block"
        />
      </Link>
  );
};

export default Logo;
