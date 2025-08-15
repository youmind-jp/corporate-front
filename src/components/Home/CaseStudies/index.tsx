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
                    ECサイトのCVR向上と運用改善
                  </h3>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    課題
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      検索結果やカート処理の応答に数秒かかり、利用者の離脱が増えていた。
                    </li>
                    <li>
                      レガシー化した基幹システムが、サービスの改善を困難にしていた。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    解決
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      サービスと基幹システムとの間のデータアクセスの構造を見直し、処理の効率化を実施。
                    </li>
                    <li>
                      データベースの稼働状況を分析し、必要なチューニングを実施。
                    </li>
                    <li>
                      ページの先読みや画面遷移時の演出など、UX向上による離脱の抑制。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    結果
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80">
                    <li>応答速度の10倍の改善とUX向上によるCVRの30%向上。</li>
                    <li>
                      管理画面のUX向上と高速化により従来より迅速な運用施策の実施が可能に。
                    </li>
                  </ul>
                </div>

                <div className="bg-light_grey bg-opacity-30 rounded-xl p-8 flex flex-col items-start">
                  <h3 className="text-24 text-white font-bold mb-2">
                    店舗向け業務支援SaaSのクラウド移行
                  </h3>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    課題
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      オンプレミス環境で稼働していた業務システムは、性能の限界と保守コストの増大が課題に。
                    </li>
                    <li>
                      数千テーブル、テラバイト級データ、数億件の注文データなど、移行には数日に渡る停止が懸念されていた。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    解決
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      綿密な事前検証により、移行計画や切替手順を分単位で策定。
                    </li>
                    <li>
                      アプリケーション、データベース、インフラの各レイヤーで並行作業を行える体制を整え、ダウンタイムを最小化。
                    </li>
                    <li>
                      データ移行の分散処理を行う専用プログラムの開発と、スポットインスタンスの活用により、コストを抑えつつ効率的なデータ移行を実現。
                    </li>
                  </ul>

                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    結果
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>当初は数日が見込まれていた移行時間を3時間まで短縮。</li>
                    <li>
                      移行後はパフォーマンスと可用性が向上し、障害対応の負担も大幅に軽減。
                    </li>
                  </ul>
                </div>

                <div className="bg-light_grey bg-opacity-30 rounded-xl p-8 flex flex-col items-start">
                  <h3 className="text-24 text-white font-bold mb-2">
                    新規事業のPoC立ち上げと内製化支援
                  </h3>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    課題
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      PoC開発のため初期はあらゆるコストを限界まで抑える必要。
                    </li>
                    <li>
                      営業計画より、それ以降の継続的な機能追加や利用者増加も見込む必要。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    解決
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80 mb-2">
                    <li>
                      要件の優先度設定により、最小限の開発で価値を提供できるようサービスを設計。
                    </li>
                    <li>
                      サーバレス技術の積極採用により、構築と運用の両面より初期のインフラコストを削減。
                    </li>
                    <li>
                      非機能要件や価値に結びつきにくい機能はPaaSを活用し、その後のスケーラビリティを担保。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    結果
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80">
                    <li>
                      スケジュール通りのサービス開始と当初予定を大きく下回るインフラコストを実現。
                    </li>
                    <li>
                      正式サービス開始後も、予定通りの機能追加やスピーディーな設備増強を実現。
                    </li>
                    <li>
                      サーバレス技術やPaaSの活用により、開発チームの内製化を実現。
                    </li>
                  </ul>
                </div>

                <div className="bg-light_grey bg-opacity-30 rounded-xl p-8 flex flex-col items-start">
                  <h3 className="text-24 text-white font-bold mb-2">
                    ネットワークゲームのサーバ開発
                  </h3>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    課題
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80">
                    <li>
                      常時接続クライアント、キャンペーン時の瞬発的な高負荷、ゲームルール（システム）の日常的な微調整など、通常のシステム開発では取り扱わない要件が多く存在。
                    </li>
                    <li>
                      運営施策の迅速な実施のため、サービスに関わるありとあらゆる数値を可視化する必要。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    解決
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80">
                    <li>
                      アプリ開発チームとの連携により、本ゲームに特化した独自の通信プロトコルを開発し、通信の効率化と負荷分散を実現。
                    </li>
                    <li>
                      「ゲーム用」「管理用」「KPI分析用」など目的に特化したデータベースをそれぞれ設計し、難度の高い要件の両立を実現。
                    </li>
                    <li>
                      キャッシュや非同期処理（楽観処理）の積極的に導入により、特定箇所の負荷がや障害システム全体に波及しない構造。
                    </li>
                  </ul>
                  <h4 className="text-18 text-white font-semibold mb-1 mt-4">
                    結果
                  </h4>
                  <ul className="list-disc pl-4 text-16 text-white/80">
                    <li>
                      独自プロトコルと分散設計や非同期処理により、障害なしで3万人の同時接続まで実現。
                    </li>
                    <li>
                      目的別データベースの活用で、数時間ディレイと数分粒度のKPI分析を可視化。
                    </li>
                    <li>
                      疎結合なシステムにより、日常的な調整にも容易に対応できる体制を実現
                    </li>
                  </ul>
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
