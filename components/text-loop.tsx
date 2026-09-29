"use client"

import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import "./text-loop.css"

const VIEW_W = 1200
const VIEW_H = 360
const CX = VIEW_W / 2
const CY = VIEW_H / 2

function buildWave(curviness: number) {
  const amplitude = Math.min(Math.max(curviness, 0) * 2.2, 260)
  return `M -320 ${CY} Q -160 ${CY - amplitude} 0 ${CY} T 320 ${CY} T 640 ${CY} T 960 ${CY} T 1280 ${CY} T ${VIEW_W + 320} ${CY}`
}

type TextLoopProps = {
  text: string
  separator?: string
  speed?: number
  color?: string
  ribbonColor?: string
  ribbonWidth?: number
  fontSize?: number
  curviness?: number
}

export function TextLoop({
  text,
  separator = "●",
  speed = 90,
  color = "#0A0A0B",
  ribbonColor = "#E8E8FF",
  ribbonWidth = 94,
  fontSize = 42,
  curviness = 34,
}: TextLoopProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const measureRef = useRef<SVGTextElement>(null)
  const headRef = useRef<SVGTextPathElement>(null)
  const tailRef = useRef<SVGTextPathElement>(null)
  const [metrics, setMetrics] = useState({ length: 0, reps: 1 })
  const pathId = `keyword-loop-${useId().replace(/:/g, "")}`
  const unit = useMemo(() => `${text.toUpperCase()}\u00A0\u00A0\u00A0${separator}\u00A0\u00A0\u00A0`, [text, separator])
  const path = useMemo(() => buildWave(curviness), [curviness])

  useLayoutEffect(() => {
    const pathElement = pathRef.current
    const measureElement = measureRef.current
    if (!pathElement || !measureElement) return
    const measure = () => {
      const length = pathElement.getTotalLength()
      const unitWidth = measureElement.getComputedTextLength()
      setMetrics({ length, reps: unitWidth ? Math.max(1, Math.ceil(length / unitWidth) + 1) : 1 })
    }
    measure()
    document.fonts?.ready.then(measure).catch(() => {})
  }, [unit, fontSize, path])

  useEffect(() => {
    const { length } = metrics
    const head = headRef.current
    const tail = tailRef.current
    if (!length || !head || !tail) return
    const apply = (offset: number) => {
      head.setAttribute("startOffset", `${offset}`)
      tail.setAttribute("startOffset", `${offset - length}`)
    }
    apply(0)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const state = { offset: 0 }
    const tween = gsap.to(state, { offset: length, duration: length / speed, ease: "none", repeat: -1, onUpdate: () => apply(state.offset) })
    const root = rootRef.current
    const pause = () => tween.pause()
    const resume = () => tween.resume()
    root?.addEventListener("pointerenter", pause)
    root?.addEventListener("pointerleave", resume)
    return () => {
      tween.kill()
      root?.removeEventListener("pointerenter", pause)
      root?.removeEventListener("pointerleave", resume)
    }
  }, [metrics, speed])

  return (
    <div ref={rootRef} className="text-loop" aria-label={text}>
      <svg className="text-loop-svg" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-hidden="true">
        <path ref={pathRef} id={pathId} d={path} fill="none" stroke={ribbonColor} strokeWidth={ribbonWidth} strokeLinecap="round" />
        <text ref={measureRef} className="text-loop-measure" style={{ fontSize, fontWeight: 700, letterSpacing: 3 }}>{unit}</text>
        <text className="text-loop-text" fill={color} style={{ fontSize, fontWeight: 700, letterSpacing: 3 }} dominantBaseline="central" textLength={metrics.length || undefined} lengthAdjust="spacing">
          <textPath ref={headRef} href={`#${pathId}`}>{unit.repeat(metrics.reps)}</textPath>
        </text>
        <text className="text-loop-text" fill={color} style={{ fontSize, fontWeight: 700, letterSpacing: 3 }} dominantBaseline="central" textLength={metrics.length || undefined} lengthAdjust="spacing">
          <textPath ref={tailRef} href={`#${pathId}`}>{unit.repeat(metrics.reps)}</textPath>
        </text>
      </svg>
    </div>
  )
}
