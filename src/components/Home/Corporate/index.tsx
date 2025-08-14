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
        <h2 className="text-white sm:text-40 text-24 font-medium mb-5 text-center">
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
              <dl className="w-full grid [grid-template-columns:30%_70%] bg-dark_grey bg-opacity-60 max-w-3xl mx-auto rounded-xl overflow-hidden">
                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">会社名</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">株式会社ユーマインド</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">英文表記</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">YouMind</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">代表者</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">武田 憲太郎</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">所在地</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">〒158-0083 東京都 世田谷区 奥沢 8-26-24</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">TEL</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">03-6805-9480</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">設立</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">2004年8月30日</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">資本金</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">1,000万円</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">法人番号</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">9011001056484</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">登録番号</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">T9011001056484</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">D-U-N-S</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">710475430</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 border-b border-slateGray min-h-12 sm:min-h-10 min-w-[10rem]">従業員数</dt>
                <dd className="px-6 py-4 text-white border-b border-slateGray">6名（役員除く）</dd>

                <dt className="px-6 py-4 font-semibold text-white bg-dark_grey/80 min-h-12 sm:min-h-10 min-w-[10rem]">企業理念</dt>
                <dd className="px-6 py-4 text-white">あなたの意思を尊重します。<br /><span className="text-muted text-16 italic">“We respect YouMind.”</span></dd>
              </dl>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Corporate;
