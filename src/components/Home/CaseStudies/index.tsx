'use client';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  return (
    <section className="md:pt-28 pt-9" id="case-studies">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white sm:text-40 text-24 font-medium mb-6 lg:mb-20">
              事例紹介
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-light_grey bg-opacity-30 rounded-xl p-8 flex flex-col items-start">
                  <h3 className="text-24 text-white font-bold mb-2">
                    飲食店向け予約システムのクラウド移行
                  </h3>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    課題
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      オンプレミス環境で稼働していた予約システムは、性能の限界と保守コストの増大が課題に。
                    </li>
                    <li>
                      特にデータベースは2000テーブル・400GBと大規模で、移行には長時間の停止が避けられないと懸念されていた。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    解決
                  </h4>
                  <p className="text-16 text-white/80 mb-2">
                    事前検証を重ね、データ移行計画と切替手順を分単位で策定。アプリケーション、データベース、インフラの各レイヤーで並行作業を行える体制を整え、ダウンタイムを最小化。
                  </p>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    結果
                  </h4>
                  <p className="text-16 text-white/80">
                    予定より短い停止時間でAWSへ移行を完了。移行後はパフォーマンスと可用性が向上し、障害対応の負担も大幅に軽減。
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-30 rounded-xl p-8 flex flex-col items-start">
                  <h3 className="text-24 text-white font-bold mb-2">
                    ECサイトのレスポンス改善
                  </h3>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    課題
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      検索結果やカート処理の応答に数秒かかり、利用者の離脱が増えていた。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    解決
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      サービスと基幹システムとの間のデータアクセスの構造を見直し、処理の効率化を行った。
                    </li>
                    <li>
                      データベースの稼働状況を分析し、必要なチューニングを行った。
                    </li>
                    <li>
                      ページの先読みや画面遷移時の演出など、UX向上による離脱の抑制を行った。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    結果
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80">
                    <li>
                      応答速度を2〜5倍改善。UX改善によってコンバージョン率向上。
                    </li>
                  </ul>
                </div>
                <div className="bg-light_grey bg-opacity-30 rounded-xl p-8 flex flex-col items-start">
                  <h3 className="text-24 text-white font-bold mb-2">
                    新規サービスの短期立ち上げ
                  </h3>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    課題
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      PoC開発のため初期はあらゆるコストを限界まで抑える必要があった。
                    </li>
                    <li>
                      営業計画より、それ以降の機能追加や利用者増加も見込む必要があった。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    解決
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      機能要件を優先度設定により最小限で価値を提供できる要件を絞り込み。
                    </li>
                    <li>
                      サーバレス技術の積極採用により構築と運用の両面よりインフラコストを削減。
                    </li>
                    <li>
                      非機能要件や価値に結びつきにくい機能はPaaSを活用し、その後のスケーラビリティを担保。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    結果
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80">
                    <li>スケジュール通りに安定稼働を開始。</li>
                    <li>
                      正式サービス開始後も、予定通りの機能追加やスピーディーな設備増強を実現。
                    </li>
                  </ul>
                </div>
                <div className="bg-light_grey bg-opacity-30 rounded-xl p-8 flex flex-col items-start">
                  <h3 className="text-24 text-white font-bold mb-2">
                    （空き枠）
                  </h3>
                  <p className="text-16 text-white/60">事例追加予定</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
