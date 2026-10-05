import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Download,
  Check,
  Copy,
  Terminal,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [typedText, setTypedText] = useState('');

  const roleText = personalData.role || "Software Engineer & Data Analyst";

  useEffect(() => {
    let timeoutId;
    let index = 0;

    function type() {
      if (index < roleText.length) {
        setTypedText(roleText.slice(0, index + 1));
        index++;
        timeoutId = setTimeout(type, 100);
      } else {
        // wait 1.2s after completing,then reset and loop
        timeoutId = setTimeout(() => {
          setTypedText('');
          index = 0;
          type();
        }, 1200);
      }
    }

    timeoutId = setTimeout(type, 300);

    return () => clearTimeout(timeoutId);
  }, [roleText]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bio & Info */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tech Lead & Full-Stack AI Engineer</span>
              <span className="text-zinc-400 dark:text-zinc-600">|</span>
              <span className="text-zinc-600 dark:text-zinc-300">Open to Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">{personalData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300 min-h-[32px] flex items-center">
                <span id="typing" className="font-mono text-zinc-800 dark:text-zinc-200">
                  {typedText}
                </span>
                <span className="inline-block w-[2px] h-5 bg-emerald-500 ml-1.5 animate-pulse" aria-hidden="true" />
              </p>
            </div>

            {/* Tagline / Summary */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
              {personalData.tagline}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-emerald-500" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal size={14} className="text-cyan-500" />
                <span>B.Tech EEE @ Anurag University</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-500" />
                <span>Tech Lead @ HIVE</span>
              </div>
              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 hover:border-amber-500/40 transition-colors"
                title="LeetCode Profile - 190+ Questions Solved"
              >
                <LeetcodeIcon size={13} className="text-amber-500" />
                <span>60+ LeetCode Solved</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-all shadow-md shadow-emerald-500/25 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 text-sm font-medium transition-all active:scale-95 shadow-sm"
              >
                <Download size={15} className="text-emerald-500" />
                <span>Resume</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 text-xs font-mono transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Connect:</span>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/50 transition-all shadow-sm"
                aria-label="LeetCode Profile (190+ Solved)"
                title="LeetCode (190+ Solved)"
              >
                <LeetcodeIcon size={16} />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                aria-label="Email"
                title="Email"
              >
                <Mail size={16} />
              </a>

              <a
                href={`tel:${personalData.phone}`}
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                aria-label="Phone"
                title="Phone"
              >
                <Phone size={16} />
              </a>
            </div>

          </div>

          {/* Right Column: Photo & Interactive Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">

              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-600/40 via-red-600/30 to-amber-600/25 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Photo Container */}
              <div className="relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl w-72 sm:w-80 md:w-[340px] aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  style={{ objectPosition: '50% 36%' }}
                />

                {/* Gentle bottom shadow gradient only behind badge */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent pointer-events-none" />

                {/* Bottom Card Overlay inside photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 text-left shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white tracking-tight">{personalData.name}</p>
                      <p className="text-[11px] font-mono text-emerald-400">{personalData.role}</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-glow-sm animate-pulse" />
                  </div>
                  <div className="mt-2 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>MERN • FastAPI • AI Systems</span>
                    <span className="text-zinc-300">Hyderabad, IN</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
