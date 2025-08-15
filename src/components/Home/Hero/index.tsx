'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="overflow-hidden lg:h-[770px] h-[500px]"
      id="main-banner"
    >
      <div className="mx-auto lg:max-w-screen-xl relative">
        <div className="px-4 pt-28 md:pt-40 md:pb-28 py-20 r container mx-auto">
          <div className="z-1 lg:w-[480px] md:max-w-[768px] absolute w-[calc(100%-30px)] mx-auto">
            <div className="flex justify-center mb-5 lg:mt-[128px]">
              <h2 className="text-white sm:text-24 text-[min(5vw,1.5rem)] mb-0 font-bold">
                動くシステム、動き続けるビジネス
              </h2>
            </div>
            <div className="font-medium text-16 text-start mb-10">
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
                className="bg-primary border border-primary rounded-lg text-18 sm:text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-5 sm:px-7 z-50"
                href="/#case-studies"
              >
                事例紹介
              </Link>
              <Link
                className="border border-primary rounded-lg text-18 sm:text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-5 sm:px-7"
                href="/#contact"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          <div
            className="left-0 lg:left-[430px] z-0 absolute top-[140px] lg:top-[190px] opacity-50 lg:opacity-100 h-[300px] lg:h-[500px] w-full flex flex-col justify-center"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)',
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
        </div>

        <div className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-220 rounded-full left-0 top-[100px] z-3 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Hero;
