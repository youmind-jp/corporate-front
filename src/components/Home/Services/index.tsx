"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <section className="md:pt-28 pt-9" id="services">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <h2 className="sm:text-40 text-24 text-white mb-6">
              私たちが提供するサービス
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">システム開発・改善</h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>新規システムの構築から既存システムの拡張まで対応</li>
                  <li>ビジネスの成長に合わせた柔軟な拡張設計</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">業務システムの最適化</h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>処理速度や安定性を改善し、業務効率を向上</li>
                  <li>システム障害や性能低下のリスクを低減</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Webサービスの開発・運用</h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>サービスの成長に合わせた柔軟なスケーラビリティ</li>
                  <li>運用課題の早期発見と継続的な改善、機能追加</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">インフラ刷新・クラウド化・データ移行</h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>大規模データの安全かつ計画的な移行</li>
                  <li>クラウドやオンプレミスの環境最適化</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-7 mt-11">
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
                src= {`/images/work/img-work-with-us.png`}
                alt="image"
                width={600}
                height={425}
                className="lg:w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
