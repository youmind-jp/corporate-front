import React from 'react';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import CaseStudies from '@/components/Home/CaseStudies';
import Expertise from '@/components/Home/Expertise';
import Director from '@/components/Home/Director';
import Corporate from '@/components/Home/Corporate';
import { Metadata } from 'next';
import Contact from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: 'YouMind | ビジネスの課題を技術で解決するWebソリューションパートナー',
  description:
    '業務システムやWebサービスの開発・改善からクラウド化まで、規模やフェーズを問わず一貫支援。実運用に根ざした最適化で、性能・信頼性・コストをバランス良く改善し、成果に直結する基盤を構築します。',
  alternates: { canonical: 'https://youmind.jp/' },
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Expertise />
        <Director />
        <Corporate />
        <Contact />
      </main>
    </>
  );
}
