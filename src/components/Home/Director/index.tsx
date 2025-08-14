'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Director = () => {
  return (
    <section className="md:pt-28 pt-9" id="director">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white sm:text-40 text-24 font-medium mb-5">
              代表者
            </h2>
            <div className="mb-8">
              <h3 className="text-22 text-white font-bold mb-2">
                武田 憲太郎 — 代表取締役
              </h3>
              <p className="text-16 text-white/80 mb-3">
                25年以上にわたり、Webアプリケーション開発、データベース設計・運用、大規模システムの運用や移行に従事。参加者1,000名を超える国内カンファレンスでの登壇や、Laravel関連のオープンソースプロジェクトへの貢献など、技術コミュニティでも積極的に活動。主にPHP・LaravelやOSS活用の知見を共有し、エコシステムの品質向上にも寄与している。
              </p>
              <p className="text-16 text-white/80">
                現場経験に基づく実践的なアプローチと、課題解決に直結する提案力を強みとする。
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:ml-3 w-full"
          >
            <Image
              src={`/images/director/director-photo.webp`}
              alt="代表取締役 武田憲太郎 近影"
              width={1972}
              height={1559}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Director;
