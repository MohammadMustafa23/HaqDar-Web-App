import { useState, useEffect, useMemo, useRef } from "react";

export const START_PROGRESS = 5;
export const END_PROGRESS = 100;
const TICK_MS = 220;

/**
 * Resolves the headline copy for a given progress value against a sorted
 * list of { min, text } milestones.
 */
export function getStageText(progress, stages) {
  let text = stages[0].text;
  for (const stage of stages) {
    if (progress >= stage.min) text = stage.text;
  }
  return text;
}

/**
 * Drives the whole "AI scan" experience from a single progress value:
 * - advances progress on an interval
 * - derives which scheme is currently "checking" vs resolved
 * - fires onComplete exactly once when the scan finishes
 *
 * Keeping everything derived from one number (instead of separate timers
 * for the progress bar and the activity feed) is what keeps them in sync.
 */
export function useSchemeScanner(schemes, stages, { onComplete } = {}) {
  const [progress, setProgress] = useState(START_PROGRESS);
  const hasFired = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= END_PROGRESS) return END_PROGRESS;
        return prev + 1;
      });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= END_PROGRESS && !hasFired.current) {
      hasFired.current = true;
      onComplete?.();
    }
  }, [progress, onComplete]);

  const { ledger, matchCount, isDone } = useMemo(() => {
    const span = END_PROGRESS - START_PROGRESS;
    const perItem = span / schemes.length;
    const raw = (progress - START_PROGRESS) / perItem;
    const active = Math.min(Math.floor(raw), schemes.length - 1);
    const phase = raw - active;
    const done = progress >= END_PROGRESS;

    const rows = schemes.map((scheme, i) => {
      const resolved = done || i < active || (i === active && phase >= 0.5);
      let status = "pending";
      if (!done && i === active && !resolved) status = "checking";
      else if (resolved) status = scheme.eligible ? "match" : "checked";
      return { ...scheme, status, index: i };
    });

    return {
      ledger: rows.filter((r) => r.status !== "pending").slice(-4),
      matchCount: rows.filter((r) => r.status === "match").length,
      isDone: done,
    };
  }, [progress, schemes]);

  return {
    progress,
    stageText: getStageText(progress, stages),
    ledger,
    matchCount,
    isDone,
  };
}
