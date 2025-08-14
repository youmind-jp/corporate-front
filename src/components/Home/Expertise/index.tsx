"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <section className="pt-28 md:pt-40 md:pb-28 py-20 overflow-hidden lg:h-[770px]" id="expertise">
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative">
        <div className="grid grid-cols-12">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-5 lg:block hidden relative"
          >
            <div
              className="absolute top-0 -right-[480px] z-0 transform -translate-x-[320px]"
              style={{
                maskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
              }}
            >
              <Image
                src={"/images/expertise/various-techniques.webp"}
                alt="多種多様な技術を象徴する画像"
                width={1920}
                height={1080}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 col-span-12 z-10 lg:ml-[150px] mb-8"
          >
            <h2 className="sm:text-40 text-24 text-white mb-6">技術・対応領域</h2>
            <ul className="list-disc pl-4 text-white space-y-4 mt-8">
              <li>
                <h3>システム開発</h3>
                <ul className="list-disc pl-4 mt-2 text-white/80 text-16">
                  <li>要件定義 / 設計 / 実装 / 運用保守</li>
                </ul>
              </li>
              <li>
                <h3>データベース</h3>
                <ul className="list-disc pl-4 mt-2 text-white/80 text-16">
                  <li>設計 / 移行 / 性能チューニング（PostgreSQL, MySQL, Oracle 等）</li>
                </ul>
              </li>
              <li>
                <h3>インフラ</h3>
                <ul className="list-disc pl-4 mt-2 text-white/80 text-16">
                  <li>AWS設計 / 構築 / 運用</li>
                </ul>
              </li>
              <li>
                <h3>開発技術</h3>
                <ul className="list-disc pl-4 mt-2 text-white/80 text-16">
                  <li>PHP<br />Laravel / Symfony</li>
                  <li>TypeScript<br />Next.js / React / NestJS / GraphQL / Vue.js / Angular</li>
                  <li>Ruby<br />Ruby on Rails</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="lg:hidden w-full flex justify-center items-center"
      >
        <div
          className="w-full aspect-[100/45] flex items-center justify-center overflow-hidden relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <Image
            src={"/images/expertise/various-techniques.webp"}
            alt="技術・対応領域を象徴する画像"
            width={1920}
            height={1080}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Expertise;
