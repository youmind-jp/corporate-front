'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const rightAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative pt-28 md:pt-40 md:pb-28 py-20 overflow-hidden lg:h-[770px]"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative">
        <div className="grid grid-cols-12">
          <motion.div className="lg:col-span-5 col-span-12 z-1">
            <div className="flex gap-6 items-center justify-center mb-5 lg:mt-[128px]">
              <h2 className="text-white sm:text-24 text-[min(5vw,1.5rem)] mb-0 font-bold">
                動くシステム、動き続けるビジネス
              </h2>
            </div>
            <div className="font-medium text-16 text-start text-white/80 mb-10">
              <p className="mb-4">
                現場の課題を正確に捉え、結果に直結する提案力で、プロジェクトを成功へ導きます。
              </p>
              <p>
                YouMindは、設計から実装、運用まで一貫して対応できる技術パートナーです。
                成長中の企業や新規事業チームの課題を、現場の実務経験に基づく提案力で最短距離で解決します。
              </p>
            </div>
            <div className="flex items-center justify-center gap-8">
              <Link
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50"
                href="/#case-studies"
              >
                事例紹介
              </Link>
              <Link
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
                href="/#contact"
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-7 lg:block hidden relative"
          >
            <div
              className="absolute top-0 -left-[400px] z-0 transform translate-x-[320px]"
              style={{
                maskImage:
                  'linear-gradient(to left, black 85%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to left, black 85%, transparent 100%)',
              }}
            >
              <Image
                src={'/images/hero/moving-system-and-business.webp'}
                alt="システムがビジネスを動かしている様子を表現した画像"
                width={1920}
                height={1080}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-220 rounded-full left-0 top-0 z-3"></div>
      </div>
    </section>
  );
};

export default Hero;
