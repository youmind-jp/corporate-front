"use client";
import { motion, useInView } from "framer-motion";


const Corporate = () => {
  return (
    <section className="md:py-40 py-20" id="corporate">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white sm:text-40 text-30 font-medium mb-5 text-center">
          会社概要
        </h2>
      </motion.div>

      <motion.div
        whileInView={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="mb-8">
            <dl className="w-full bg-dark_grey bg-opacity-60  max-w-3xl mx-auto rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">会社名</dt>
                <dd className="px-6 py-4 text-white">株式会社ユーマインド</dd>
              </div>
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">英文表記</dt>
                <dd className="px-6 py-4 text-white">YouMind</dd>
              </div>
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">代表者</dt>
                <dd className="px-6 py-4 text-white">武田 憲太郎</dd>
              </div>
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">所在地</dt>
                <dd className="px-6 py-4 text-white">〒158-0083 東京都 世田谷区 奥沢 8-26-24</dd>
              </div>
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">TEL</dt>
                <dd className="px-6 py-4 text-white">03-6805-9480</dd>
              </div>
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">設立</dt>
                <dd className="px-6 py-4 text-white">2004年8月30日</dd>
              </div>
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">資本金</dt>
                <dd className="px-6 py-4 text-white">1,000万円</dd>
              </div>
              <div className="grid grid-cols-2 border-b border-slateGray">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">従業員数</dt>
                <dd className="px-6 py-4 text-white">6名（役員除く）</dd>
              </div>
              <div className="grid grid-cols-2">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80">企業理念</dt>
                <dd className="px-6 py-4 text-white">
                  あなたの意思を尊重します。<br />
                  <span className="text-muted text-16 italic">“We respect YouMind.”</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Corporate;
