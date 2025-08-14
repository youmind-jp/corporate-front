"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const Expertise = () => {
  return (
    <section className="md:pt-28 pt-9" id="expertise">
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
            <h2 className="text-white sm:text-40 text-24 mb-4 font-medium">
              技術・対応領域
            </h2>
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
    </section>
  );
};

export default Expertise;
