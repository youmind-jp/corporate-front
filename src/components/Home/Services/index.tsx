'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <section
      className="pt-28 md:pt-40 md:pb-28 py-20 overflow-hidden lg:h-[770px]"
      id="services"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative">
        <div ref={ref} className="grid grid-cols-12">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12 z-10"
          >
            <h2 className="sm:text-40 text-24 text-white mb-6">
              私たちが提供するサービス
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  システム開発・改善
                </h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>新規システムの構築から既存システムの拡張まで対応</li>
                  <li>ビジネスの成長に合わせた柔軟な拡張設計</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  業務システムの最適化
                </h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>処理速度や安定性を改善し、業務効率を向上</li>
                  <li>システム障害や性能低下のリスクを低減</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Webサービスの開発・運用
                </h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>サービスの成長に合わせた柔軟なスケーラビリティ</li>
                  <li>運用課題の早期発見と継続的な改善、機能追加</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  インフラ刷新・クラウド化・データ移行
                </h3>
                <ul className="list-disc pl-4 text-white/80">
                  <li>大規模データの安全かつ計画的な移行</li>
                  <li>クラウドやオンプレミスの環境最適化</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-7 mt-11"></div>
          </motion.div>
          <motion.div
            {...TopAnimation}
            className="col-span-5 lg:block hidden relative"
          >
            <div
              className="absolute top-0 -left-[480px] z-0 transform translate-x-[320px]"
              style={{
                maskImage:
                  'linear-gradient(to left, black 85%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to left, black 85%, transparent 100%)',
              }}
            >
              <Image
                src={'/images/services/the-services-we-provide.webp'}
                alt="様々なサービスを象徴的に表現した画像"
                width={1920}
                height={1080}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        {...TopAnimation}
        className="lg:hidden w-full flex justify-center items-center"
      >
        <div
          className="w-full aspect-[100/45] flex items-center justify-center overflow-hidden relative"
          style={{
            WebkitMaskImage:
              'linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <Image
            src={'/images/services/the-services-we-provide.webp'}
            alt="様々なサービスを象徴的に表現した画像"
            width={1920}
            height={1080}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
