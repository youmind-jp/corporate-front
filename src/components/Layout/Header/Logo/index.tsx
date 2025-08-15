import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`/images/logo/logo.svg`}
        alt="株式会社ユーマインド | ビジネスの課題を技術で解決するWebソリューションパートナー"
        width={160}
        height={28}
        quality={100}
        className="inline-block"
      />
    </Link>
  );
};

export default Logo;
