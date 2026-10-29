'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Tab = 'gorumetrik' | 'televet' | 'voice_assistant' | 'qr_management' | 'gorucollar';

interface CowOption {
  id: string;
  nameEn: string;
  nameBn: string;
  breedEn: string;
  breedBn: string;
  estWeight: number;
  length: number; // inches
  girth: number; // inches
  color: string;
  tag: string;
  descEn: string;
  descBn: string;
}

const cowOptions: CowOption[] = [
  {
    id: 'cow1',
    nameEn: 'Lal Mia',
    nameBn: 'লাল মিয়া',
    breedEn: 'Sahiwal Bull',
    breedBn: 'শাহিওয়াল ষাঁড়',
    estWeight: 420,
    length: 58,
    girth: 68,
    color: '#ea580c', // orange/brown
    tag: 'G-BD-4819',
    descEn: 'Healthy 3-year-old Sahiwal bull with excellent meat quality.',
    descBn: '৩ বছর বয়সী স্বাস্থ্যবান শাহিওয়াল ষাঁড়, চমৎকার মাংসের গুণসম্পন্ন।'
  },
  {
    id: 'cow2',
    nameEn: 'Shundori',
    nameBn: 'সুন্দরী',
    breedEn: 'Holstein Friesian Heifer',
    breedBn: 'হোলস্টেইন ফ্রিজিয়ান গাভী',
    estWeight: 380,
    length: 54,
    girth: 64,
    color: '#0f172a', // dark gray/black
    tag: 'G-BD-2849',
    descEn: 'High milk-yielding Friesian cross heifer in prime condition.',
    descBn: 'অধিক দুগ্ধদানকারী ফ্রিজিয়ান ক্রস গাভী, সর্বোত্তম স্বাস্থ্যাবস্থায় রয়েছে।'
  },
  {
    id: 'cow3',
    nameEn: 'Kalu',
    nameBn: 'কালু',
    breedEn: 'Deshi Breed Bull',
    breedBn: 'দেশি জাতের বলদ',
    estWeight: 295,
    length: 48,
    girth: 58,
    color: '#1e293b', // black/slate
    tag: 'G-BD-1092',
    descEn: 'Local breed bull, very resilient and fully vaccinated.',
    descBn: 'দেশি জাতের বলদ, অত্যন্ত রোগ প্রতিরোধ ক্ষমতাসম্পন্ন ও সম্পূর্ণ টিকাপ্রাপ্ত।'
  }
];

interface Vet {
  id: string;
  nameEn: string;
  nameBn: string;
  titleEn: string;
  titleBn: string;
  expEn: string;
  expBn: string;
  avatar: string;
  bg: string;
}

const vetOptions: Vet[] = [
  {
    id: 'vet1',
    nameEn: 'Dr. Anisur Rahman',
    nameBn: 'ডা. আনিসুর রহমান',
    titleEn: 'Senior Cattle Surgeon, DVM',
    titleBn: 'সিনিয়র ক্যাটেল সার্জন, ডিভিএম',
    expEn: '10+ Years Experience',
    expBn: '১০+ বছরের অভিজ্ঞতা',
    avatar: '👨‍⚕️',
    bg: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'vet2',
    nameEn: 'Dr. Farhana Yeasmin',
    nameBn: 'ডা. ফারহানা ইয়াসমিন',
    titleEn: 'Animal Nutritionist & Feed Specialist',
    titleBn: 'পশু পুষ্টিবিদ ও খাদ্য বিশেষজ্ঞ',
    expEn: '8 Years Experience',
    expBn: '৮ বছরের অভিজ্ঞতা',
    avatar: '👩‍⚕️',
    bg: 'from-purple-500/20 to-pink-500/20'
  }
];

interface VoiceQuestion {
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
}

const voiceQuestions: VoiceQuestion[] = [
  {
    questionEn: 'How to detect foot-and-mouth disease symptoms?',
    questionBn: 'গরুর ক্ষুরা রোগের লক্ষণ ও প্রতিকার কী?',
    answerEn: 'Symptoms include high fever, blisters on the mouth and feet, drooling, and lameness. Isolate the sick animal immediately, clean wounds with potassium permanganate, and call a vet for vaccination scheduling.',
    answerBn: 'প্রধান লক্ষণগুলো হলো তীব্র জ্বর, মুখ ও পায়ে ক্ষত বা ফোস্কা, অনবরত লালা পড়া এবং খুঁড়িয়ে চলা। সাথে সাথে আক্রান্ত গরুকে আলাদা করুন, পটাশিয়াম পারম্যাঙ্গানেট জল দিয়ে ক্ষত পরিষ্কার করুন এবং দ্রুত পশু চিকিৎসকের পরামর্শ নিয়ে ভ্যাকসিনের ব্যবস্থা করুন।'
  },
  {
    questionEn: 'What should be the food chart for a high-yield dairy cow?',
    questionBn: 'অধিক দুধ দেওয়া গাভীর সুষম খাদ্য তালিকা কী?',
    answerEn: 'A high-yield cow requires balanced green grass (60%), straw (20%), and concentrated mixture (20% containing wheat bran, oil cake, and mineral mixture). Ensure clean drinking water (30-40 liters daily) and salt blocks.',
    answerBn: 'একটি দুগ্ধবতী গরুর জন্য দৈনিক সুষম খাদ্য তালিকায় ৬০% কাঁচা ঘাস, ২০% খড় এবং ২০% দানাদার খাদ্য (গম, কুঁড়ো, খৈল ও মিনারেল মিক্সচার) রাখা প্রয়োজন। এছাড়া দৈনিক ৩০-৪০ লিটার পরিষ্কার পানি এবং লবণ দিন।'
  },
  {
    questionEn: 'Why is cattle rumination (chewing cud) important?',
    questionBn: 'গরুর জাবর কাটা কেন জরুরি এবং বন্ধ হলে করণীয়?',
    answerEn: 'Rumination indicates a healthy digestive system. If chewing stops, it may be due to bloating or acidosis. Feed ginger-garlic paste with baking soda, and encourage movement. Consult a vet if it lasts over 12 hours.',
    answerBn: 'জাবর কাটা গরুর সুস্থ হজম প্রক্রিয়ার লক্ষণ। জাবর কাটা বন্ধ হওয়া পেট ফাঁপা বা বদহজমের উপসর্গ হতে পারে। তাৎক্ষণিকভাবে বেকিং সোডার সাথে আদা-রসুন বাটা মিশিয়ে খাওয়াতে পারেন এবং গরুকে হাঁটাহাঁটি করান। ১২ ঘণ্টার বেশি বন্ধ থাকলে ডাক্তারের শরণাপন্ন হোন।'
  }
];

const InteractivePlayground = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('gorumetrik');
  
  // 1. GoruMetrik States
  const [selectedCow, setSelectedCow] = useState<CowOption>(cowOptions[0]);
  const [scanStep, setScanStep] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [weightResult, setWeightResult] = useState<number | null>(null);

  // 2. PraniCare States
  const [selectedVet, setSelectedVet] = useState<Vet>(vetOptions[0]);
  const [callState, setCallState] = useState<'idle' | 'calling' | 'active' | 'finished'>('idle');
  const [callTimer, setCallTimer] = useState(10);
  const [doctorPrescription, setDoctorPrescription] = useState<string | null>(null);

  // 3. Moti Miya States
  const [activeQuestion, setActiveQuestion] = useState<VoiceQuestion | null>(null);
  const [voiceState, setVoiceState] = useState<'idle' | 'listening' | 'answering' | 'speaking'>('idle');
  const [speakingText, setSpeakingText] = useState('');
  const [speechSynthesisSupported, setSpeechSynthesisSupported] = useState(false);

  // 4. QR States
  const [qrStep, setQrStep] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [qrCow, setQrCow] = useState<CowOption | null>(null);

  // 5. IoT Collar / Fencing Map States
  const [cowPos, setCowPos] = useState({ x: 120, y: 110 });
  const [fencingEnabled, setFencingEnabled] = useState(true);
  const [fencingAlert, setFencingAlert] = useState(false);
  const [cowAngle, setCowAngle] = useState(0);
  const [iotStats, setIotStats] = useState({
    temp: 38.6,
    nh3: 8,
    accel: { x: 0.04, y: 0.72, z: 0.11 },
    activity: 'Grazing',
    battery: 94
  });

  // Check Web Speech Synthesis support
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSpeechSynthesisSupported(true);
    }
  }, []);

  // 1. GoruMetrik Scanner Animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (scanStep === 'scanning') {
      setScanProgress(0);
      interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanStep('done');
            setWeightResult(selectedCow.estWeight);
            return 100;
          }
          return prev + 4;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [scanStep, selectedCow]);

  // 2. PraniCare Call Countdown Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (callState === 'calling') {
      timer = setTimeout(() => {
        setCallState('active');
        setCallTimer(10);
      }, 2000);
    } else if (callState === 'active') {
      timer = setInterval(() => {
        setCallTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCallState('finished');
            setDoctorPrescription(
              '১. রুমি বুস্ট পাউডার (দৈনিক ১ চামচ খাবারের সাথে - ৫ দিন)\n' +
              '২. ভিটামিন বি কমপ্লেক্স সিরাপ (দৈনিক ৫০ মিলি করে ২ বার - ৩ দিন)\n' +
              '৩. পর্যাপ্ত স্যালাইন পানি ও কাঁচা ঘাস খেতে দিন।'
            );
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callState]);

  // 3. Moti Miya Speaking logic (TTS)
  const speakResponse = (text: string) => {
    if (!speechSynthesisSupported) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const voices = window.speechSynthesis.getVoices();
      const bnVoice = voices.find(v => v.lang.toLowerCase().startsWith('bn') || v.name.toLowerCase().includes('bengali'));
      if (bnVoice) {
        utterance.voice = bnVoice;
      }
    }
    utterance.lang = 'bn-BD';
    
    utterance.onstart = () => setVoiceState('speaking');
    utterance.onend = () => setVoiceState('idle');
    utterance.onerror = () => setVoiceState('idle');
    
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceQuery = (question: VoiceQuestion) => {
    setVoiceState('listening');
    setActiveQuestion(question);
    
    setTimeout(() => {
      setVoiceState('answering');
      setSpeakingText('');
      
      const ansText = language === 'bn' ? question.answerBn : question.answerEn;
      let currentIndex = 0;
      const interval = setInterval(() => {
        setSpeakingText((prev) => prev + ansText.charAt(currentIndex));
        currentIndex++;
        if (currentIndex >= ansText.length) {
          clearInterval(interval);
          setVoiceState('idle');
          speakResponse(question.answerBn);
        }
      }, 15);
    }, 1500);
  };

  const stopVoice = () => {
    if (speechSynthesisSupported) {
      window.speechSynthesis.cancel();
    }
    setVoiceState('idle');
  };

  // 4. QR Code Scanning Animation
  const handleQrScan = () => {
    setQrStep('scanning');
    setTimeout(() => {
      setQrStep('done');
      setQrCow(selectedCow);
    }, 2000);
  };

  // 5. IoT Collar Mapping Animation
  useEffect(() => {
    let tVal = 0;
    const interval = setInterval(() => {
      tVal += 0.05;
      
      const radiusX = 110;
      const radiusY = 60;
      const centerX = 140;
      const centerY = 110;
      
      const wobbleX = Math.sin(tVal * 3) * 8;
      const wobbleY = Math.cos(tVal * 2.5) * 5;
      
      const newX = centerX + Math.cos(tVal) * radiusX + wobbleX;
      const newY = centerY + Math.sin(tVal * 1.5) * radiusY + wobbleY;
      
      setCowPos({ x: newX, y: newY });
      
      const angle = (Math.atan2(Math.sin(tVal * 1.5), Math.cos(tVal)) * 180) / Math.PI;
      setCowAngle(angle);

      const fenceX = 130;
      const fenceY = 105;
      const fenceRadius = 70;
      
      const dist = Math.sqrt((newX - fenceX) ** 2 + (newY - fenceY) ** 2);
      const isOut = dist > fenceRadius;
      
      const isRunning = fencingEnabled && isOut;
      const ax = isRunning ? 0.45 + Math.sin(tVal) * 0.25 : 0.02 + Math.sin(tVal) * 0.04;
      const ay = isRunning ? 1.35 + Math.cos(tVal) * 0.35 : 0.72 + Math.cos(tVal) * 0.08;
      const az = isRunning ? 0.38 + Math.sin(tVal * 2) * 0.15 : 0.11 + Math.sin(tVal * 1.5) * 0.02;

      if (isRunning) {
        setFencingAlert(true);
        setIotStats(prev => ({
          ...prev,
          activity: 'Running (Alert)',
          nh3: 23,
          accel: { x: ax, y: ay, z: az },
          temp: 39.1
        }));
      } else {
        setFencingAlert(false);
        setIotStats(prev => ({
          ...prev,
          activity: Math.sin(tVal) > 0.3 ? 'Grazing' : 'Resting',
          nh3: Math.sin(tVal) > 0.3 ? 8 : 5,
          accel: { x: ax, y: ay, z: az },
          temp: 38.5 + (Math.sin(tVal) * 0.2)
        }));
      }
    }, 250);

    return () => clearInterval(interval);
  }, [fencingEnabled]);

  const getTabColor = (tab: Tab) => {
    switch (tab) {
      case 'gorumetrik': return 'emerald';
      case 'televet': return 'indigo';
      case 'voice_assistant': return 'purple';
      case 'qr_management': return 'cyan';
      case 'gorucollar': return 'amber';
      default: return 'green';
    }
  };

  const currentThemeColor = getTabColor(activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden relative font-sans" id="sandbox">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            💻 {language === 'bn' ? 'স্মার্ট ফার্মিং সিমুলেটর' : 'Interactive Sandbox'}
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('playground.title')}
          </h2>
          <p className={`text-lg text-gray-650 max-w-2xl mx-auto leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('playground.subtitle')}
          </p>
        </div>

        {/* Console Container - Sleek hybrid console layout */}
        <div className="bg-white border border-gray-200/80 rounded-[32px] p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row gap-8 items-stretch relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(16,185,129,0.07)]">
          
          {/* Subtle colored glow backdrop */}
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-20 ${
            currentThemeColor === 'emerald' ? 'bg-emerald-400' :
            currentThemeColor === 'indigo' ? 'bg-indigo-400' :
            currentThemeColor === 'purple' ? 'bg-purple-400' :
            currentThemeColor === 'cyan' ? 'bg-cyan-400' :
            'bg-amber-400'
          }`}></div>

          {/* Left Column: Interactive Settings Control Dashboard */}
          <div className="flex-1 flex flex-col justify-between z-10 space-y-6">
            
            <div className="space-y-6">
              {/* Header notches */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 select-none">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-2">App Controller</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-[9px] text-emerald-700 font-bold uppercase">Ready</span>
                </div>
              </div>

              {/* Segmented Selector Tabs */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                {(['gorumetrik', 'televet', 'voice_assistant', 'qr_management', 'gorucollar'] as Tab[]).map((tab) => {
                  const isActive = activeTab === tab;
                  let colorClass = '';
                  if (isActive) {
                    if (tab === 'gorumetrik') colorClass = 'bg-emerald-600';
                    else if (tab === 'televet') colorClass = 'bg-indigo-600';
                    else if (tab === 'voice_assistant') colorClass = 'bg-purple-600';
                    else if (tab === 'qr_management') colorClass = 'bg-cyan-600';
                    else colorClass = 'bg-amber-600';
                  }
                  
                  return (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setScanStep('idle');
                        setCallState('idle');
                        setVoiceState('idle');
                        setQrStep('idle');
                      }}
                      className={`px-4 py-3 rounded-xl font-bold text-xs transition-all duration-205 transform active:scale-95 flex items-center justify-center sm:justify-start gap-2 border ${
                        isActive
                          ? `${colorClass} text-white shadow-lg border-transparent`
                          : 'bg-gray-50 border-gray-200/80 hover:bg-gray-100 text-gray-600 hover:border-gray-300'
                      } ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      {tab === 'gorumetrik' && '📸 ' + t('playground.tab.gorumetrik')}
                      {tab === 'televet' && '🩺 ' + t('playground.tab.televet')}
                      {tab === 'voice_assistant' && '🎙️ ' + t('playground.tab.voice_assistant')}
                      {tab === 'qr_management' && '📇 ' + t('playground.tab.qr_management')}
                      {tab === 'gorucollar' && '📡 ' + t('playground.tab.gorucollar')}
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: GORUMETRIK CONTROLS */}
              {activeTab === 'gorumetrik' && (
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'গোরুমেট্রিক — এআই ওজন পরিমাপ' : 'GoruMetrik — AI Cattle Weight Estimate'}
                    </h3>
                    <p className={`text-xs text-gray-550 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' 
                        ? 'কোনো ফিজিক্যাল স্কেল ছাড়াই স্মার্টফোনের ক্যামেরা দিয়ে গরুর সঠিক ওজন পরিমাপ করুন। নিচে একটি গরু নির্বাচন করে ওজন স্ক্যান বাটনে ক্লিক করে পরীক্ষা করুন।'
                        : 'Estimate cattle weight using just a smartphone photo. Select an animal profile below and trigger the AI scanning model simulation.'}
                    </p>
                  </div>

                  {/* Cattle Options Selection */}
                  <div className="space-y-3">
                    <label className={`block text-xs font-bold text-gray-400 uppercase tracking-wider ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? '১. গরু বা ষাঁড় নির্বাচন করুন:' : '1. Select Cattle Profile:'}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {cowOptions.map((cow) => (
                        <button
                          key={cow.id}
                          onClick={() => {
                            setSelectedCow(cow);
                            setScanStep('idle');
                            setWeightResult(null);
                          }}
                          className={`p-2.5 rounded-xl border text-left transition-all duration-200 ${
                            selectedCow.id === cow.id
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold'
                              : 'border-gray-200 bg-gray-50/50 text-gray-550 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <div className={`text-xs font-bold truncate ${language === 'bn' ? 'font-bengali' : ''}`}>
                            {language === 'bn' ? cow.nameBn : cow.nameEn}
                          </div>
                          <div className="text-[9px] text-gray-400 truncate mt-0.5 font-medium">
                            {language === 'bn' ? cow.breedBn : cow.breedEn}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions Details */}
                  <div className="bg-gray-50 border border-gray-150 rounded-2xl p-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block">
                        {language === 'bn' ? 'বডি দৈর্ঘ্য (Length)' : 'Body Length'}
                      </span>
                      <span className="text-base font-black text-gray-800">{selectedCow.length} inches</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block">
                        {language === 'bn' ? 'বুকের বেড় (Heart Girth)' : 'Heart Girth'}
                      </span>
                      <span className="text-base font-black text-gray-800">{selectedCow.girth} inches</span>
                    </div>
                  </div>

                  {/* Start Estimating Button */}
                  <button
                    onClick={() => setScanStep('scanning')}
                    disabled={scanStep === 'scanning'}
                    className="w-full py-4 px-6 rounded-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg active:scale-98 transition-all duration-300 disabled:opacity-50"
                  >
                    {scanStep === 'scanning' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'bn' ? 'এআই ওজন পরিমাপ করা হচ্ছে...' : 'AI Processing Weight...'}
                      </span>
                    ) : (
                      language === 'bn' ? 'এআই ওজন স্ক্যান শুরু করুন' : 'Run GoruMetrik Estimate'
                    )}
                  </button>
                </div>
              )}

              {/* TAB 2: PRANICARE CONTROLS */}
              {activeTab === 'televet' && (
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'প্রাণীকেয়ার — অনলাইন ডক্টর কনসালটেশন' : 'PraniCare — Remote Vet Booking'}
                    </h3>
                    <p className={`text-xs text-gray-550 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn'
                        ? 'খামারের গরুর অসুস্থতায় ডাক্তারের জন্য অপেক্ষা না করে সাথে সাথে অ্যাপে লাইসেন্সধারী পশুচিকিৎসকদের ভিডিও কল করুন। নিচের ডাক্তার নির্বাচন করে ডেমো কল শুরু করুন।'
                        : 'Connect directly to licensed large animal veterinarians through interactive video consultations without travel delays.'}
                    </p>
                  </div>

                  {/* Vet Selection */}
                  <div className="space-y-3">
                    <label className={`block text-xs font-bold text-gray-400 uppercase tracking-wider ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'ডাক্তার নির্বাচন করুন:' : 'Select Specialist:'}
                    </label>
                    <div className="flex flex-col gap-2.5">
                      {vetOptions.map((vet) => (
                        <div
                          key={vet.id}
                          onClick={() => {
                            if (callState === 'idle' || callState === 'finished') {
                              setSelectedVet(vet);
                              setCallState('idle');
                              setDoctorPrescription(null);
                            }
                          }}
                          className={`p-3 rounded-xl border flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                            selectedVet.id === vet.id
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-950'
                              : 'border-gray-200 bg-gray-50/50 text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-2xl p-1 bg-white border border-gray-100 rounded-xl shadow-xs">{vet.avatar}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-xs font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                              {language === 'bn' ? vet.nameBn : vet.nameEn}
                            </h4>
                            <p className="text-[10px] text-gray-500 truncate font-semibold">
                              {language === 'bn' ? vet.titleBn : vet.titleEn}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[8px] text-green-700 font-bold uppercase">ONLINE</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {callState === 'idle' && (
                      <button
                        onClick={() => {
                          setCallState('calling');
                          setDoctorPrescription(null);
                        }}
                        className="w-full py-3.5 rounded-2xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all"
                      >
                        📞 {language === 'bn' ? 'ভিডিও কনসালটেশন শুরু করুন' : 'Start Video Consultation'}
                      </button>
                    )}
                    {callState === 'calling' && (
                      <button
                        onClick={() => setCallState('idle')}
                        className="w-full py-3.5 rounded-2xl font-bold bg-red-50 border border-red-200 text-red-750 hover:bg-red-100"
                      >
                        ❌ {language === 'bn' ? 'কল কেটে দিন' : 'Cancel Calling'}
                      </button>
                    )}
                    {callState === 'active' && (
                      <button
                        onClick={() => setCallState('finished')}
                        className="w-full py-3.5 rounded-2xl font-bold bg-red-650 hover:bg-red-750 text-white animate-pulse"
                      >
                        🔴 {language === 'bn' ? 'কল শেষ করুন' : 'End Call'}
                      </button>
                    )}
                    {callState === 'finished' && (
                      <button
                        onClick={() => {
                          setCallState('idle');
                          setDoctorPrescription(null);
                        }}
                        className="w-full py-3.5 rounded-2xl font-bold bg-gray-100 hover:bg-gray-250 text-gray-800 border border-gray-250"
                      >
                        🔄 {language === 'bn' ? 'নতুন কল বুক করুন' : 'Start New Consult'}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: MOTI MIYA CONTROLS */}
              {activeTab === 'voice_assistant' && (
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'মতি মিয়া AI (বাংলা)' : 'Moti Miya AI — Bangla Farm Guide'}
                    </h3>
                    <p className={`text-xs text-gray-550 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn'
                        ? 'খামারিরা কোনো টাইপিং না করেই মুখে বাংলায় রোগ বা খাদ্য সম্পর্কে জিজ্ঞাসা করতে পারেন এবং এআই ভয়েস উত্তর শুনতে পারেন। নিচে যেকোনো একটি ডেমো প্রশ্ন জিজ্ঞেস করুন:'
                        : 'Farmers can speak questions in Bangla/English and receive interactive audio-synthesized AI feedback. Select a query below to try.'}
                    </p>
                  </div>

                  {/* Question Cards */}
                  <div className="space-y-2">
                    {voiceQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleVoiceQuery(q)}
                        disabled={voiceState === 'listening' || voiceState === 'answering'}
                        className="w-full text-left p-3 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-purple-500/40 text-xs text-gray-700 transition-all flex items-start gap-2.5 disabled:opacity-50"
                      >
                        <span className="text-purple-500">❓</span>
                        <span className={`font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {language === 'bn' ? q.questionBn : q.questionEn}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Speech status details */}
                  {speechSynthesisSupported && (
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      {language === 'bn' ? 'ব্রাউজার ভয়েস ইন্টিগ্রেশন সক্রিয়' : 'Speech Engine Active'}
                    </div>
                  )}

                  {/* Stop Speech Button */}
                  {voiceState === 'speaking' && (
                    <button
                      onClick={stopVoice}
                      className="w-full py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-bold text-xs"
                    >
                      ⏹️ {language === 'bn' ? 'এআই অডিও বন্ধ করুন' : 'Mute Voice Output'}
                    </button>
                  )}
                </div>
              )}

              {/* TAB 4: QR CODE CONTROLS */}
              {activeTab === 'qr_management' && (
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'কিউআর খামার ব্যবস্থাপনা' : 'QR Code Farm Management'}
                    </h3>
                    <p className={`text-xs text-gray-550 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn'
                        ? 'খামারের প্রতি পশুকে কিউআর ট্যাগ পরিয়ে ডিজিটাল পরিচয় দিন। কিউআর স্ক্যান করেই গরুর সম্পূর্ণ ঔষধ, টিকা ও ওজনের তথ্য মিলবে। ডেমো পরীক্ষা করতে বাটনে চাপুন।'
                        : 'Every animal gets a digital passport via QR tag. Try scanning a cattle tag to view historical health charts, vaccine timelines, and growth stats.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold uppercase text-gray-400 tracking-wider block">
                        {language === 'bn' ? 'নির্ধারিত গরু' : 'Cattle Selected'}
                      </span>
                      <h4 className={`text-sm font-black text-gray-900 mt-0.5 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? selectedCow.nameBn : selectedCow.nameEn}
                      </h4>
                      <p className="text-[9px] text-gray-500 font-mono">Tag: {selectedCow.tag}</p>
                    </div>
                    {/* Mock QR box */}
                    <div className="w-12 h-12 bg-white p-1 rounded-xl flex items-center justify-center border border-gray-150 shadow-xs">
                      <div className="w-full h-full bg-slate-900 flex flex-wrap p-0.5 items-center justify-center overflow-hidden border border-black rounded-lg">
                        <div className="grid grid-cols-4 gap-0.5 w-full h-full">
                          <div className="bg-white"></div><div className="bg-slate-900"></div><div className="bg-white"></div><div className="bg-white"></div>
                          <div className="bg-slate-900"></div><div className="bg-white"></div><div className="bg-slate-900"></div><div className="bg-white"></div>
                          <div className="bg-white"></div><div className="bg-slate-900"></div><div className="bg-slate-900"></div><div className="bg-slate-900"></div>
                          <div className="bg-slate-900"></div><div className="bg-slate-900"></div><div className="bg-white"></div><div className="bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleQrScan}
                    disabled={qrStep === 'scanning'}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-md transition-all"
                  >
                    🔍 {qrStep === 'scanning' ? (
                      language === 'bn' ? 'কিউআর কোড স্ক্যান হচ্ছে...' : 'Scanning Tag Link...'
                    ) : (
                      language === 'bn' ? 'ডিজিটাল কিউআর কোড স্ক্যান করুন' : 'Scan Cattle QR Passport'
                    )}
                  </button>
                </div>
              )}

              {/* TAB 5: IoT COLLAR CONTROLS */}
              {activeTab === 'gorucollar' && (
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'গোরুকলার ও ভার্চুয়াল সীমানা' : 'GoruCollar & Geofencing'}
                    </h3>
                    <p className={`text-xs text-gray-555 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn'
                        ? 'স্মার্ট আইওটি জিপিএস কলার গরুর গলায় পরিয়ে লাইভ লোকেশন, শরীরের তাপমাত্রা ও কার্যকলাপ ট্র্যাক করুন। ম্যাপে সীমানা নির্ধারণ করে ডেমো পরীক্ষা করুন।'
                        : 'Track GPS, temperature, activity, and NH3 gas in real-time. Toggle geofencing to see live alert dispatching when the animal breaches parameters.'}
                    </p>
                  </div>

                  {/* Geofencing Toggle */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                    <div>
                      <span className={`text-xs sm:text-sm font-bold text-gray-800 block ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? 'ভার্চুয়াল সীমানা সক্রিয়' : 'Virtual Geofence Fencing'}
                      </span>
                      <span className="text-[10px] text-gray-450 block font-medium mt-0.5">
                        {language === 'bn' ? 'সীমানা অতিক্রম করলেই নোটিফিকেশন যাবে' : 'Alert when cattle crosses the boundary'}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setFencingEnabled(!fencingEnabled);
                        if (fencingEnabled) setFencingAlert(false);
                      }}
                      className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                        fencingEnabled ? 'bg-emerald-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`bg-white w-4 h-4 rounded-full transition-transform duration-300 transform shadow-sm ${
                        fencingEnabled ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>

                  {/* GPS coordinate readouts */}
                  <div className="grid grid-cols-2 gap-3 bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-left">
                    <div>
                      <span className="text-[9px] font-bold text-gray-400 uppercase block tracking-wider">GPS Coordinates</span>
                      <span className="text-[10px] font-mono font-bold text-gray-700 block mt-1 leading-normal">
                        {23.8103 + (cowPos.x - 200) * 0.0001}° N
                        <br />
                        {90.4125 + (cowPos.y - 140) * 0.0001}° E
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-gray-400 uppercase block tracking-wider">LTE Connection</span>
                      <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1 mt-1.5">
                        <span className="inline-block w-2.5 h-1.5 bg-emerald-500 rounded-[1px]"></span>
                        <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-[1px]"></span>
                        <span className="inline-block w-2.5 h-3.5 bg-emerald-500 rounded-[1px]"></span>
                        Strong
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Panel Branding */}
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-medium">
              <span>GoruSheba Smart Platform v1.2</span>
              <span>Appibrium Ltd. © 2026</span>
            </div>
          </div>

          {/* Right Column: Immersive Mobile App Simulator Mockup Chassis */}
          <div className="flex-1 flex justify-center items-center py-4 bg-slate-50 rounded-[28px] border border-gray-200/50 p-4 shadow-inner min-h-[500px]">
            
            {/* Vertical Smartphone outline */}
            <div className="relative mx-auto w-[275px] sm:w-[290px] h-[490px] bg-slate-900 rounded-[38px] p-2.5 shadow-xl border-[5px] border-slate-950 ring-4 ring-slate-800 flex flex-col overflow-hidden">
              
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-30 pointer-events-none">
                <div className="w-24 h-3 bg-slate-900 rounded-b-lg flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-slate-850"></div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="h-5 flex justify-between items-center px-5 text-[8px] text-slate-400 font-bold pt-1.5 z-20 bg-slate-950/80 select-none">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Viewport Frame */}
              <div className="flex-1 bg-slate-950 flex flex-col justify-between overflow-y-auto text-white p-3 rounded-b-[28px] relative">
                
                {/* Viewport mesh background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.5)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-15"></div>

                {/* SCREEN 1: GORUMETRIK VIEWPORT */}
                {activeTab === 'gorumetrik' && (
                  <div className="w-full h-full flex flex-col justify-between relative">
                    
                    {/* Viewfinder Target box */}
                    <div className="flex-1 flex items-center justify-center relative rounded-xl bg-slate-900/60 overflow-hidden border border-slate-850 p-1.5 min-h-[160px]">
                      
                      {/* Viewfinder guides */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-500/50"></div>
                      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-500/50"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-500/50"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-500/50"></div>
                      
                      <div 
                        className="w-36 h-28 rounded-xl flex items-center justify-center relative transition-all duration-300"
                        style={{ backgroundColor: selectedCow.color + '18', border: `2.5px dashed ${selectedCow.color}` }}
                      >
                        <div className="text-5xl select-none filter drop-shadow-[0_4px_10px_rgba(255,255,255,0.1)] animate-bounce duration-1000">🐄</div>
                        
                        <span className="absolute bottom-1 px-1.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-850 text-[8px] font-mono text-slate-400">
                          {selectedCow.tag}
                        </span>

                        {/* Scanner beams */}
                        {scanStep === 'scanning' && (
                          <>
                            <div className="absolute top-1 left-1.5 text-[7px] font-mono text-green-400 bg-slate-950/60 px-0.5 border border-green-500/20">
                              W:{selectedCow.girth}&quot;
                            </div>
                            <div className="absolute top-1 right-1.5 text-[7px] font-mono text-green-400 bg-slate-950/60 px-0.5 border border-green-500/20">
                              L:{selectedCow.length}&quot;
                            </div>
                            <div className="absolute inset-x-1 border-t border-emerald-400 shadow-[0_0_8px_#34d399] pointer-events-none transition-all duration-100" style={{ top: `${scanProgress}%` }}></div>
                            <div className="absolute inset-0 border border-emerald-500/20 animate-pulse bg-emerald-500/5 pointer-events-none"></div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Results pad */}
                    <div className="h-24 mt-2.5 p-2 rounded-xl bg-slate-950 border border-slate-850 text-[10px] font-mono flex flex-col justify-center">
                      {scanStep === 'idle' && (
                        <div className="text-slate-500 text-center">
                          <span className="block text-xl">📸</span>
                          <p className={language === 'bn' ? 'font-bengali' : ''}>
                            {language === 'bn' ? 'ওজন পরিমাপ দেখতে এআই স্ক্যান শুরু করুন' : 'Tap estimate button on left'}
                          </p>
                        </div>
                      )}
                      {scanStep === 'scanning' && (
                        <div className="space-y-1.5 text-emerald-400">
                          <div className="flex justify-between text-[9px] font-bold">
                            <span>{language === 'bn' ? 'ওজন মাপা হচ্ছে...' : '> Scan processing...'}</span>
                            <span>{scanProgress}%</span>
                          </div>
                          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full transition-all duration-100" style={{ width: `${scanProgress}%` }}></div>
                          </div>
                        </div>
                      )}
                      {scanStep === 'done' && weightResult && (
                        <div className="text-center space-y-0.5">
                          <div className="text-[8px] uppercase tracking-wider text-emerald-400 font-bold">
                            {language === 'bn' ? 'ডেমো ওজন ফলাফল প্রস্তুত' : 'Demo weight result ready'}
                          </div>
                          <div className="text-xl font-black text-white bg-slate-900 border border-slate-800 rounded-lg py-0.5 px-3 inline-block shadow-md">
                            {weightResult} kg <span className="text-[10px] font-normal text-slate-400">({Math.round(weightResult * 2.2046)} lbs)</span>
                          </div>
                          <div className="text-[8px] text-slate-500">
                            {language === 'bn' 
                              ? `দৈর্ঘ্য: ${selectedCow.length}" | বুকের বেড়: ${selectedCow.girth}"` 
                              : `Length: ${selectedCow.length}" | Girth: ${selectedCow.girth}"`}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SCREEN 2: PRANICARE VIEWPORT */}
                {activeTab === 'televet' && (
                  <div className="w-full h-full flex flex-col justify-between relative">
                    {callState === 'idle' && (
                      <div className="flex-1 flex flex-col items-center justify-center text-slate-550 text-center space-y-2">
                        <span className="text-4xl">🩺</span>
                        <h4 className={`text-slate-400 font-bold text-xs ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {language === 'bn' ? 'প্রাণীকেয়ার সেবা' : 'PraniCare App Screen'}
                        </h4>
                        <p className="text-[9px] max-w-[170px] leading-normal">
                          {language === 'bn' ? 'পশুচিকিৎসকের ডেমো ভিডিও কল শুরু করুন।' : 'Start consultation simulation.'}
                        </p>
                      </div>
                    )}

                    {callState === 'calling' && (
                      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center animate-ping">
                          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                            {selectedVet.avatar}
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className={`text-xs font-bold text-white ${language === 'bn' ? 'font-bengali' : ''}`}>
                            {language === 'bn' ? selectedVet.nameBn : selectedVet.nameEn}
                          </h4>
                          <p className="text-[8px] text-indigo-400 animate-pulse uppercase tracking-wider mt-1">
                            {language === 'bn' ? 'কল যুক্ত হচ্ছে...' : 'Connecting...'}
                          </p>
                        </div>
                      </div>
                    )}

                    {callState === 'active' && (
                      <div className="flex-1 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 relative flex flex-col">
                        <div className="flex-1 flex flex-col items-center justify-center p-3 relative bg-gradient-to-b from-indigo-950/20 to-slate-950">
                          <span className="text-5xl mb-2 filter drop-shadow-md animate-pulse">{selectedVet.avatar}</span>
                          <h4 className={`text-[10px] font-bold text-slate-100 ${language === 'bn' ? 'font-bengali' : ''}`}>
                            {language === 'bn' ? selectedVet.nameBn : selectedVet.nameEn}
                          </h4>
                          <span className="text-[7px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 font-mono mt-1">
                            LIVE - 00:{callTimer < 10 ? `0${callTimer}` : callTimer}
                          </span>

                          <div className="flex gap-1 mt-3">
                            <div className="w-1 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                            <div className="w-1 h-6 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.15s]"></div>
                            <div className="w-1 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                          </div>

                          <div className="absolute bottom-2 right-2 w-10 h-14 bg-slate-950 border border-slate-800 rounded overflow-hidden flex flex-col items-center justify-center">
                            <span className="text-lg">🤠</span>
                            <span className="text-[6px] text-slate-500 block">Farmer</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {callState === 'finished' && doctorPrescription && (
                      <div className="flex-1 bg-white text-slate-800 p-3 rounded-xl border border-gray-200 overflow-y-auto max-h-[390px] flex flex-col justify-between font-sans text-left">
                        <div>
                          <div className="border-b border-emerald-600 pb-1.5 flex justify-between items-start">
                            <div>
                              <h4 className="text-[10px] font-extrabold text-slate-950 leading-tight">
                                {language === 'bn' ? selectedVet.nameBn : selectedVet.nameEn}
                              </h4>
                              <p className="text-[7px] text-slate-500 mt-0.5 leading-none">
                                {language === 'bn' ? selectedVet.titleBn : selectedVet.titleEn}
                              </p>
                            </div>
                            <span className="text-[7px] font-black text-emerald-600">Rx</span>
                          </div>

                          <div className="bg-slate-50 p-1 rounded text-[7px] my-1.5 text-slate-600 font-mono">
                            <strong>Cow:</strong> {language === 'bn' ? selectedCow.nameBn : selectedCow.nameEn}
                          </div>

                          <div className="space-y-1 mt-1 text-[8px] text-slate-700">
                            {doctorPrescription.split('\n').map((med, idx) => med.trim() && (
                              <div key={idx} className="pl-2 relative font-medium">
                                <span className="absolute left-0 top-1 w-1 h-1 bg-emerald-500 rounded-full"></span>
                                {med}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-slate-100 pt-1.5 mt-2 flex justify-between items-center text-[6px] text-slate-450">
                          <span>GS-8902 Digital Rx</span>
                          <span className="bg-emerald-50 text-emerald-700 px-1 py-0.2 rounded font-bold">VERIFIED</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* SCREEN 3: AI VOICE VIEWPORT */}
                {activeTab === 'voice_assistant' && (
                  <div className="w-full h-full flex flex-col justify-between relative">
                    
                    <div className="flex-1 flex flex-col items-center justify-center min-h-[140px]">
                      <div className={`w-20 h-20 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        voiceState === 'listening' ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-105' :
                        voiceState === 'answering' ? 'border-indigo-500 bg-indigo-500/10' :
                        voiceState === 'speaking' ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse' :
                        'border-slate-800 bg-slate-900/60'
                      }`}>
                        {voiceState === 'idle' && <span className="text-3xl">🎙️</span>}
                        {voiceState === 'listening' && (
                          <div className="flex items-center gap-0.5">
                            <span className="w-1.5 h-3 bg-purple-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                            <span className="w-1.5 h-3 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          </div>
                        )}
                        {voiceState === 'answering' && (
                          <div className="flex gap-0.5">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                          </div>
                        )}
                        {voiceState === 'speaking' && (
                          <div className="flex items-center gap-0.5">
                            <span className="w-2 h-4 bg-emerald-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-6 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                            <span className="w-2 h-3 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          </div>
                        )}
                      </div>

                      <span className={`text-[8px] font-bold uppercase tracking-widest mt-3 ${
                        voiceState === 'listening' ? 'text-purple-450' :
                        voiceState === 'answering' ? 'text-indigo-455' :
                        voiceState === 'speaking' ? 'text-emerald-455' :
                        'text-slate-500'
                      }`}>
                        {voiceState === 'idle' && (language === 'bn' ? 'অপেক্ষা করছি' : 'Waiting')}
                        {voiceState === 'listening' && (language === 'bn' ? 'শুনছি...' : 'Listening...')}
                        {voiceState === 'answering' && (language === 'bn' ? 'এআই ভাবছে...' : 'AI Processing...')}
                        {voiceState === 'speaking' && (language === 'bn' ? 'এআই উত্তর দিচ্ছে...' : 'AI Speaking...')}
                      </span>
                    </div>

                    <div className="h-28 p-2.5 bg-slate-950 border border-slate-850 rounded-xl flex flex-col justify-center text-[10px] overflow-y-auto text-left">
                      {!activeQuestion ? (
                        <div className="text-slate-600 text-center font-mono leading-normal">
                          {language === 'bn' ? 'এআই ভয়েস অ্যাসিস্ট্যান্ট' : 'Select query on the left'}
                        </div>
                      ) : (
                        <div className="space-y-1.5 font-mono">
                          <div className="text-slate-500 flex items-start gap-1">
                            <span className="text-purple-400 font-bold">Q:</span>
                            <span className={language === 'bn' ? 'font-bengali' : ''}>
                              {language === 'bn' ? activeQuestion.questionBn : activeQuestion.questionEn}
                            </span>
                          </div>
                          <div className="text-white flex items-start gap-1">
                            <span className="text-emerald-450 font-bold">A:</span>
                            <span className={`flex-1 leading-normal ${language === 'bn' ? 'font-bengali' : ''}`}>
                              {speakingText || '...'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                )}

                {/* SCREEN 4: QR PASSPORT VIEWPORT */}
                {activeTab === 'qr_management' && (
                  <div className="w-full h-full flex flex-col justify-between relative">
                    {qrStep === 'idle' && (
                      <div className="flex-1 flex flex-col items-center justify-center text-slate-550 text-center space-y-2">
                        <span className="text-4xl">📇</span>
                        <h4 className="text-slate-400 font-bold text-xs">Cattle DB Passport</h4>
                        <p className="text-[9px] max-w-[170px]">
                          {language === 'bn' ? 'কিউআর কোড স্ক্যান করে ডাটাবেজ দেখুন।' : 'Tap scan button to load profile.'}
                        </p>
                      </div>
                    )}

                    {qrStep === 'scanning' && (
                      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        <div className="relative w-28 h-28 border border-slate-850 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                          <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
                          <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
                          <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
                          <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>
                          <div className="absolute inset-x-1.5 border-t border-cyan-400 shadow-[0_0_8px_#22d3ee] animate-bounce top-1/2"></div>
                          <span className="text-3xl opacity-30">🔲</span>
                        </div>
                        <span className="text-[8px] text-cyan-400 animate-pulse font-mono font-bold uppercase">Connecting to DB...</span>
                      </div>
                    )}

                    {qrStep === 'done' && qrCow && (
                      <div className="flex-1 bg-slate-950 p-2.5 rounded-xl border border-slate-850 flex flex-col justify-between overflow-y-auto max-h-[390px] text-left">
                        <div className="flex justify-between items-start border-b border-slate-850 pb-1.5 mb-2">
                          <div>
                            <h4 className={`text-xs font-black text-white ${language === 'bn' ? 'font-bengali' : ''}`}>
                              🐄 {language === 'bn' ? qrCow.nameBn : qrCow.nameEn}
                            </h4>
                            <span className="text-[8px] text-slate-500 uppercase tracking-wide">Breed: {language === 'bn' ? qrCow.breedBn : qrCow.breedEn}</span>
                          </div>
                          <span className="text-[7px] text-green-400 font-bold font-mono bg-green-500/10 px-1.5 py-0.2 rounded border border-green-500/20">
                            OK
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5 text-[8px] text-slate-400 font-mono mb-2">
                          <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-850">
                            <span className="text-slate-500 block">VACCINE</span>
                            <span className="text-green-400 font-bold">{language === 'bn' ? 'ক্ষুরা (পূর্ণ)' : 'FMD (Done)'}</span>
                          </div>
                          <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-850">
                            <span className="text-slate-500 block">WEIGHT LOG</span>
                            <span className="text-slate-200">{qrCow.estWeight} kg</span>
                          </div>
                          <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-850">
                            <span className="text-slate-500 block">TEMP</span>
                            <span className="text-slate-200">38.6°C</span>
                          </div>
                          <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-850">
                            <span className="text-slate-500 block">GENDER</span>
                            <span className="text-slate-200">{language === 'bn' ? 'ষাঁড়' : 'Male'}</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[7px] uppercase tracking-wider text-slate-500 block font-mono font-bold">
                            Growth Chart (kg)
                          </span>
                          <div className="flex items-end justify-between h-12 bg-slate-900/40 px-1 rounded-lg border border-slate-850">
                            {[25, 40, 55, 68, 85, 100].map((h, i) => (
                              <div key={i} className="flex flex-col items-center flex-1">
                                <div className={`w-2.5 rounded-t-[2px] ${i >= 4 ? 'bg-emerald-500' : 'bg-slate-700'}`} style={{ height: `${h}%` }}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* SCREEN 5: IoT RADAR VIEWPORT */}
                {activeTab === 'gorucollar' && (
                  <div className="w-full h-full flex flex-col justify-between relative">
                    
                    {/* SVG Map pasture */}
                    <div className="flex-1 bg-slate-900/60 rounded-xl overflow-hidden border border-slate-850 relative flex items-center justify-center min-h-[160px]">
                      
                      <svg className="w-full h-full absolute inset-0 text-slate-850/60" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="none" />
                        <line x1="0" y1="110" x2="280" y2="110" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" />
                        <line x1="140" y1="0" x2="140" y2="220" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" />
                        
                        {fencingEnabled && (
                          <circle
                            cx="130"
                            cy="105"
                            r="70"
                            fill="rgba(16, 185, 129, 0.02)"
                            stroke={fencingAlert ? '#ef4444' : '#10b981'}
                            strokeWidth="1.5"
                            strokeDasharray="4,2"
                            className={fencingAlert ? 'animate-pulse' : ''}
                          />
                        )}

                        {fencingAlert && (
                          <rect width="100%" height="100%" fill="rgba(239, 68, 68, 0.03)" />
                        )}
                      </svg>

                      {/* Moving Cow tag */}
                      <div
                        className="absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-20"
                        style={{
                          left: `${(cowPos.x / 280) * 100}%`,
                          top: `${(cowPos.y / 220) * 100}%`,
                          transform: `translate(-50%, -50%) rotate(${cowAngle}deg)`
                        }}
                      >
                        <span className={`absolute inset-0 rounded-full ${fencingAlert ? 'bg-red-500/40' : 'bg-emerald-500/40'} animate-ping`}></span>
                        <div className={`w-3.5 h-3.5 rounded-full ${fencingAlert ? 'bg-red-500' : 'bg-emerald-500'} border border-white flex items-center justify-center text-[7px] text-slate-950 font-black shadow-md`}>
                          C
                        </div>
                      </div>

                      {fencingAlert && (
                        <div className="absolute bottom-1.5 inset-x-1.5 bg-red-950/90 border border-red-500/30 p-1.5 rounded flex items-center gap-1.5 z-30 shadow-xl animate-bounce">
                          <span className="text-xs">⚠️</span>
                          <div className="text-[7.5px] text-red-200 text-left leading-tight">
                            <span className="font-extrabold block text-red-400">BREACH ALERT</span>
                            {language === 'bn' ? 'সীমানা লঙ্ঘন করা হয়েছে!' : 'Collar #4819 crossed geofence!'}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sensor stats logs */}
                    <div className="h-20 mt-2 grid grid-cols-4 gap-1.5 text-center text-[9px] font-mono">
                      <div className="bg-slate-950 border border-slate-850 rounded-xl p-1.5 flex flex-col justify-center">
                        <span className="text-[7px] text-slate-500 block uppercase font-bold">TEMP</span>
                        <span className={`font-black ${iotStats.temp > 39 ? 'text-red-400' : 'text-slate-200'}`}>
                          {iotStats.temp.toFixed(1)}°C
                        </span>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 rounded-xl p-1.5 flex flex-col justify-center">
                        <span className="text-[7px] text-slate-500 block uppercase font-bold">NH3</span>
                        <span className={`font-black ${iotStats.nh3 > 20 ? 'text-red-400' : 'text-slate-200'}`}>
                          {iotStats.nh3}ppm
                        </span>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 rounded-xl p-1.5 flex flex-col justify-center">
                        <span className="text-[7px] text-slate-500 block uppercase font-bold">ACCEL</span>
                        <span className="text-[7px] font-bold text-slate-450 leading-none">
                          x:{iotStats.accel.x.toFixed(1)}
                          <br />
                          y:{iotStats.accel.y.toFixed(1)}
                        </span>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 rounded-xl p-1.5 flex flex-col justify-center">
                        <span className="text-[7px] text-slate-500 block uppercase font-bold">BATT</span>
                        <span className="font-black text-emerald-450">{iotStats.battery}%</span>
                      </div>
                    </div>

                  </div>
                )}

              </div>

              {/* Home Indicator */}
              <div className="h-3 flex items-center justify-center bg-slate-950 z-20 select-none">
                <div className="w-20 h-0.5 bg-slate-800 rounded-full"></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractivePlayground;
