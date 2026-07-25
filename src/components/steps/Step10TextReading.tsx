import { useEffect, useMemo, useState } from "react";
import { Lock, Sparkles } from "lucide-react";
import {
  buyLinks,
  getSignProfile,
  normalizeSignKey,
  signIcons,
  signLabels,
} from "../../lib/moonReadingContent";

interface Props {
  firstName: string;
  zodiacSign: string;
  birthYear?: number;
  onContinue: () => void; // ostavljam u props radi kompatibilnosti sa App.tsx
}

const REVEAL_STEP_MS = 3200;
const INITIAL_DELAY_MS = 1400;
const LOCKED_DELAY_MS = 1600;

export default function Step10TextReading({ firstName, zodiacSign }: Props) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [revealedCount, setRevealedCount] = useState(0);
  const [showLocked, setShowLocked] = useState(false);
  const [ctaPulse, setCtaPulse] = useState(false);

  const signKey = useMemo(() => normalizeSignKey(zodiacSign), [zodiacSign]);
  const signLabel = signLabels[signKey];
  const signIcon = signIcons[signKey];
  const buyLink = buyLinks[signKey];
  const profile = useMemo(() => getSignProfile(zodiacSign), [zodiacSign]);
  const name = firstName?.trim() ? firstName.trim() : "Prijatelju";

  const sections = useMemo(
    () => [
      { title: "Tvoja Mesečeva energija upravo sada", body: profile.opening(name) },
      { title: "Ljubav i veze", body: profile.love(name) },
      { title: "Novac i prilike", body: profile.money(name) },
    ],
    [profile, name]
  );

  // "Generisanje" čitanja
  useEffect(() => {
    const t = setTimeout(() => setIsGenerating(false), INITIAL_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Postepeno otkrivanje pasusa
  useEffect(() => {
    if (isGenerating) return;
    if (revealedCount >= sections.length) return;
    const t = setTimeout(() => setRevealedCount((c) => c + 1), REVEAL_STEP_MS);
    return () => clearTimeout(t);
  }, [isGenerating, revealedCount, sections.length]);

  // Otkrivanje zaključanog dela + CTA
  useEffect(() => {
    if (revealedCount < sections.length || showLocked) return;
    const t = setTimeout(() => {
      setShowLocked(true);
      setTimeout(() => setCtaPulse(true), 150);
      setTimeout(() => setCtaPulse(false), 2200);
    }, LOCKED_DELAY_MS);
    return () => clearTimeout(t);
  }, [revealedCount, sections.length, showLocked]);

  const goToCheckout = () => {
    window.open(buyLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4 py-10">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="h-1 w-32 sm:w-40 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {name}, evo tvog čitanja
          </h1>
          <p className="text-white/60 text-sm">Personalizovano na osnovu tvog datuma rođenja</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 text-2xl">
                {signIcon}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">{signLabel}</div>
                <div className="text-white/50 text-xs">Mesečevo čitanje</div>
              </div>
            </div>

            {isGenerating ? (
              <div className="flex flex-col items-center py-8">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-ping opacity-60" />
                </div>
                <p className="text-white/70 text-sm">Tvoje čitanje se generiše...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {sections.map((s, i) =>
                  i < revealedCount ? (
                    <div
                      key={s.title}
                      className="animate-in fade-in slide-in-from-bottom-2 duration-700"
                    >
                      <h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                        <Sparkles className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                        {s.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  ) : null
                )}

                {revealedCount < sections.length && (
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Nastavlja se čitanje...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Zaključan deo */}
        {revealedCount >= sections.length && (
          <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl overflow-hidden shadow-2xl animate-in fade-in duration-700">
            <div className="p-6 sm:p-8">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Lock className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                Tvoj sledeći korak (naredna 3 meseca)
              </h3>

              <div className="relative">
                <p
                  className={`text-white/80 text-sm leading-relaxed transition-all duration-700 ${
                    showLocked ? "blur-sm select-none" : ""
                  }`}
                >
                  {profile.lockedTeaser(name)} Ovo je deo koji ti pokazuje tačan trenutak za akciju,
                  konkretne okidače u ljubavi i novcu, i šta tačno da uradiš sledeće — sve prilagođeno
                  tvom datumu rođenja, a ne uopštenim opisima znaka.
                </p>

                {showLocked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-slate-950/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-white/80" />
                      <span className="text-white/90 text-xs font-medium">Zaključano</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        {showLocked && (
          <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl overflow-hidden shadow-2xl animate-in fade-in duration-700">
            <div className="p-6 sm:p-8">
              <div className="text-center">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
                  Ne ostavljaj ovo nedovršeno.
                </h2>
                <p className="text-white/80 text-sm mb-3">
                  Ovo je deo koji besplatno čitanje ne otkriva: tvoje tačne okidače, gde ti energija
                  curi i tačan sledeći korak u ovom ciklusu.
                </p>

                <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs mb-5">
                  <span className={ctaPulse ? "animate-pulse" : ""}>✨</span>
                  <span>🌙 4.500+ otključanih premium čitanja</span>
                </div>

                <ul className="space-y-2 text-left mb-6 text-white/80 text-sm">
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-400 flex-shrink-0">✓</span>
                    <span><b>Ljubav:</b> ko ti "pali okidače" i zašto</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-400 flex-shrink-0">✓</span>
                    <span><b>Novac:</b> gde curi energija i kako da presečeš</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-400 flex-shrink-0">✓</span>
                    <span><b>Sledeći koraci:</b> tačno šta da uradiš dalje</span>
                  </li>
                </ul>

                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="text-white/50 text-sm line-through">€22.00</span>
                  <span className="text-white text-2xl font-bold">€9.00</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                    -59%
                  </span>
                </div>

                <button
                  onClick={goToCheckout}
                  className={`w-full px-6 py-3 rounded-full font-extrabold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg transition-all active:scale-95 ${
                    ctaPulse ? "ring-2 ring-cyan-300/60" : ""
                  }`}
                >
                  🔓 OTKLJUČAJ PREMIUM SADA
                </button>

                <div className="mt-3 text-white/60 text-xs">
                  Jednokratna kupovina • Pristup odmah • Digitalni sadržaj
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slika dok CTA nije aktivan */}
        {!showLocked && (
          <div className="mt-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-gradient-to-br from-white/5 to-white/0 p-2">
            <img
              src="/img.png"
              alt="Astrology Chart"
              className="w-full h-auto rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
