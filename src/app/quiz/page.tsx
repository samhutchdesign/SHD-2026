"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { questions, results, scoreAnswers, pickClass } from "@/lib/quiz/data";

type Stage = "start" | "questions" | "result";

const microcopy = ["Just getting started", "Making progress", "Halfway there ✦", "Almost done", "Last one!"];

export default function QuizPage() {
  const [stage, setStage] = useState<Stage>("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  const question = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;
  const track = stage === "result" ? scoreAnswers(answers) : null;
  const result = track ? results[track] : null;
  const characterClass = track ? pickClass(track, answers) : null;

  function handleAnswer(index: number) {
    setSelected(index);
    setTimeout(() => {
      const newAnswers = { ...answers, [question.id]: index };
      setAnswers(newAnswers);
      setSelected(null);
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setStage("result");
      }
    }, 320);
  }

  function restart() {
    setStage("start");
    setCurrentQ(0);
    setAnswers({});
    setSelected(null);
  }

  if (stage === "start") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-8 bg-foreground">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 max-w-xl text-center"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 bg-primary rounded-full">
            <span className="text-xs font-semibold text-primary-foreground uppercase tracking-widest">
              ⚔ The Design Quest
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-background leading-none tracking-tight">
            Not sure what you need?
          </h1>
          <p className="text-xl text-background/70 leading-relaxed">
            Answer 5 honest questions. I&apos;ll show you exactly how I&apos;d help —
            and assign you your design character class to keep.
          </p>
          <button
            onClick={() => setStage("questions")}
            className="flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity shadow-xl mt-2"
          >
            Begin the quest →
          </button>
          <p className="text-sm text-background/50">Takes about 60 seconds.</p>
        </motion.div>
        <Link href="/" className="text-sm text-background/40 hover:text-background/70 transition-colors mt-4">
          ← Back to home
        </Link>
      </div>
    );
  }

  if (stage === "result" && result && characterClass) {
    return (
      <div className="min-h-screen flex flex-col bg-foreground">
        <div className="flex items-center justify-between px-8 md:px-16 py-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-lg">
              <span className="text-primary-foreground text-xs font-black">SH</span>
            </div>
            <span className="text-sm font-semibold text-background">Sam Hutch Design</span>
          </Link>
          <button onClick={restart} className="text-sm text-background/50 hover:text-background/80 transition-colors">
            Retake quiz
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 px-8 md:px-16 py-16 items-center max-w-6xl mx-auto w-full"
        >
          {/* Left: Result copy */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full w-fit">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                🎉 Your result
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-background leading-tight">
              {result.headline}
            </h1>
            <p className="text-lg text-background/70 leading-relaxed">
              {result.diagnosis}
            </p>
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                I&apos;ve cleared this dungeon before
              </span>
              <p className="text-base text-background">
                <span className="font-bold">{result.proofPoint.title}:</span>{" "}
                {result.proofPoint.story}
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="mailto:hello@samhutch.com"
                className="flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-7 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity shadow-xl"
              >
                📅 {result.cta}
              </a>
              <p className="text-center text-sm text-background/40">
                Free call · No commitment · I&apos;ll actually tell you what you need
              </p>
            </div>
          </div>

          {/* Right: Character Sheet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-5 w-full lg:w-96 p-8 rounded-3xl border-2 border-primary"
            style={{ backgroundColor: "#1d1a2e" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-background/40">
                Design Character Sheet
              </span>
              <span className="text-accent">📜</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-accent text-4xl">
                {characterClass.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-background/50">Class</span>
                <span className="text-4xl font-black text-background">
                  {characterClass.name}
                </span>
              </div>
            </div>
            <p className="text-base italic text-primary/80">
              &ldquo;{characterClass.tagline}&rdquo;
            </p>
            <div className="flex flex-col gap-1 pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Your quest
              </span>
              <span className="text-base text-background">{characterClass.quest}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Your first move
              </span>
              <span className="text-base text-background">{characterClass.firstMove}</span>
            </div>
            <div className="flex gap-3 pt-2">
              {characterClass.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl flex-1"
                  style={{ backgroundColor: "#2a2540" }}
                >
                  <span className="text-2xl font-black text-accent">{stat.value}</span>
                  <span className="text-xs text-background/50">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-background/30 pt-1">
              Sam Hutch Design · samhutch.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 px-8 bg-foreground">
      {/* Progress */}
      <div className="flex flex-col gap-3 w-full max-w-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Question {currentQ + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-background/50">
            {microcopy[currentQ]}
          </span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-8 w-full max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-black text-background text-center leading-tight">
            {question.question}
          </h1>
          <div className="flex flex-col gap-3">
            {question.answers.map((answer, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`flex items-center justify-between px-6 py-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                  selected === i
                    ? "bg-accent border-accent"
                    : "bg-white/5 border-white/10 hover:border-primary hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{answer.icon}</span>
                  <span
                    className={`text-lg font-semibold ${
                      selected === i ? "text-accent-foreground" : "text-background"
                    }`}
                  >
                    {answer.label}
                  </span>
                </div>
                <span className={`text-lg ${selected === i ? "text-accent-foreground" : "text-background/30"}`}>
                  {selected === i ? "✓" : "→"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {currentQ > 0 && (
        <button
          onClick={() => setCurrentQ(currentQ - 1)}
          className="text-sm text-background/40 hover:text-background/70 transition-colors"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
