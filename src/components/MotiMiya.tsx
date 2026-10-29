'use client';

import Link from 'next/link';
import { useState } from 'react';

type MotiMiyaProps = {
  embedded?: boolean;
};

const suggestedQuestions = [
  'আমার গরুর ওজন কীভাবে বুঝব?',
  'বাজারে বিক্রির আগে কী কী দেখব?',
  'গরুটি খাওয়া কমিয়েছে, কী তথ্য লাগবে?',
];

const demoAnswers: Record<string, string> = {
  'আমার গরুর ওজন কীভাবে বুঝব?': 'GoruMetrik-এ গরুর একটি পরিষ্কার পাশের ছবি দিন। রেকর্ড করা ওজন থাকলে আমি সেটিকে মাপা তথ্য হিসেবে আলাদা করে দেখাব।',
  'বাজারে বিক্রির আগে কী কী দেখব?': 'দরদর্শী AI-তে গরুর প্রোফাইল, ওজনের তারিখ, বাজারের এলাকা ও বিক্রির উদ্দেশ্য দিন। রিপোর্টে কোন তথ্য নিশ্চিত আর কোনটি ডেমো, তা আলাদা থাকবে।',
  'গরুটি খাওয়া কমিয়েছে, কী তথ্য লাগবে?': 'বয়স, কতক্ষণ ধরে খাওয়া কমেছে, জ্বর বা শ্বাসকষ্ট আছে কি না এবং আচরণের পরিবর্তন লিখুন। আমি রোগ নির্ণয় করতে পারি না; উদ্বেগ থাকলে PraniCare বা যোগ্য পশুচিকিৎসকের সঙ্গে কথা বলুন।',
};

function MotiAvatar({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`moti-avatar ${compact ? 'moti-avatar-compact' : ''}`} aria-hidden="true">
      <div className="moti-cap" />
      <div className="moti-face"><span className="moti-eye moti-eye-left" /><span className="moti-eye moti-eye-right" /><span className="moti-moustache" /></div>
      <div className="moti-kurta"><span className="moti-button" /><span className="moti-button moti-button-low" /></div>
    </div>
  );
}

export default function MotiMiya({ embedded = false }: MotiMiyaProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const panel = (
    <div className="moti-panel" role="dialog" aria-label="Moti Miya AI assistant">
      <div className="moti-panel-header">
        <div className="flex items-center gap-3">
          <MotiAvatar compact />
          <div>
            <p className="font-bold text-[var(--forest)] font-bengali">মতি মিয়া AI</p>
            <p className="text-xs text-slate-500">Demo guide · বাংলা সহায়তা</p>
          </div>
        </div>
        <button type="button" onClick={() => setIsOpen(false)} className="moti-close" aria-label="Close Moti Miya">×</button>
      </div>
      <div className="moti-panel-body">
        <div className="moti-message moti-message-welcome font-bengali">আসসালামু আলাইকুম! আমি মতি মিয়া। আপনার গরুর যত্ন, ওজন, বাজারদর বা খামারের ব্যবস্থাপনা নিয়ে কী জানতে চান?</div>
        {selectedQuestion && <div className="moti-message moti-message-user font-bengali">{selectedQuestion}</div>}
        {selectedQuestion && <div className="moti-message moti-message-welcome font-bengali">{demoAnswers[selectedQuestion]} <span className="block mt-2 text-[11px] text-slate-500">এটি একটি ডেমো উত্তর। রেকর্ড বদলানোর আগে আপনার অনুমতি লাগবে।</span></div>}
        <div className="space-y-2 mt-4">
          {suggestedQuestions.map((question) => (
            <button key={question} type="button" onClick={() => setSelectedQuestion(question)} className="moti-question font-bengali">{question}</button>
          ))}
        </div>
      </div>
      <div className="moti-panel-links">
        <Link href="/dordorshi" onClick={() => setIsOpen(false)}>দরদর্শী AI</Link>
        <a href="#sandbox" onClick={() => setIsOpen(false)}>GoruMetrik</a>
        <a href="#features" onClick={() => setIsOpen(false)}>PraniCare</a>
      </div>
    </div>
  );

  if (embedded) {
    return <div className="moti-embedded">{panel}</div>;
  }

  return (
    <>
      {isOpen && panel}
      <button type="button" className="moti-fab" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label="Open Moti Miya AI assistant">
        <MotiAvatar compact />
        <span className="moti-fab-label font-bengali">মতি মিয়া</span>
      </button>
    </>
  );
}

export { MotiAvatar };