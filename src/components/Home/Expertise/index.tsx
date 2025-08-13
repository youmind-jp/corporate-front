"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const Expertise = () => {
  return (
    <section className="md:pt-48 sm:pt-28 pt-12" id="expertise">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-32"
          >
            <Image
              src= {`${getImagePrefix()}images/portfolio/img-portfolio.png`}
              alt="Crypto Portfolio"
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              技術・対応領域
            </h2>
            <ul className="list-disc pl-5 text-white/80 space-y-4 mt-8">
              <li>
                システム開発
                <ul className="list-disc pl-5 mt-2 text-white/60 text-16">
                  <li>要件定義 / 設計 / 実装 / 運用保守</li>
                </ul>
              </li>
              <li>
                データベース
                <ul className="list-disc pl-5 mt-2 text-white/60 text-16">
                  <li>設計 / 移行 / 性能チューニング（PostgreSQL, MySQL, Oracle 等）</li>
                </ul>
              </li>
              <li>
                インフラ
                <ul className="list-disc pl-5 mt-2 text-white/60 text-16">
                  <li>AWS設計 / 構築 / 運用</li>
                </ul>
              </li>
              <li>
                開発技術
                <ul className="list-disc pl-5 mt-2 text-white/60 text-16">
                  <li>PHP<br />Laravel / Symfony</li>
                  <li>TypeScript<br />Next.js / React / NestJS / GraphQL / Vue.js / Angular</li>
                  <li>Ruby<br />Ruby on Rails</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
