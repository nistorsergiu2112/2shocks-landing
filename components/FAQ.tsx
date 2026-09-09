"use client";
import { useState } from "react";
import s from "@/app/home.module.css";

export function FAQ({ questions }: { questions: string[][] }) {
  const [open, setOpen] = useState<number | null>(null);
  return <div className={s.questions}>{questions.map(([question, answer], index) => {
    const expanded = open === index;
    return <div className={s.question} key={question}>
      <h3><button id={`question-${index}`} aria-expanded={expanded} aria-controls={`answer-${index}`} onClick={() => setOpen(expanded ? null : index)}>{question}<span aria-hidden="true">+</span></button></h3>
      <div className={s.answer} id={`answer-${index}`} role="region" aria-labelledby={`question-${index}`} aria-hidden={!expanded} inert={!expanded} data-open={expanded}><div><p>{answer}</p></div></div>
    </div>;
  })}</div>;
}
