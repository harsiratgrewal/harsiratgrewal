"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface RobotProps {
  children?: ReactNode
  size?: number
  wave?: boolean
}

export const Robot = ({ children, size = 36, wave = false }: RobotProps) => {
  const WAVE_DURATION = 1.2
  const WAVE_PERIOD = 5
  const REPEAT_DELAY = Math.max(0, WAVE_PERIOD - WAVE_DURATION)

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.04 }}
      style={{ display: "inline-block", lineHeight: 0 }}
      aria-label="robot"
    >
      <svg
        width={size}
        height={(size * 80) / 64}
        viewBox="0 0 64 80"
        role="img"
        aria-hidden={false}
      >
        <defs>
          <linearGradient id="robotMetalGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EEE" />
            <stop offset="50%" stopColor="#C7C7C7" />
            <stop offset="100%" stopColor="#9B9B9B" />
          </linearGradient>
        </defs>
        
        <rect
          x="22"
          y="6"
          width="20"
          height="16"
          rx="4"
          fill="url(#robotMetalGradient)"
          stroke="#333"
          strokeWidth="1.3"
        />
        {/* Eyes */}
        <circle cx="28" cy="13" r="3.1" fill="#fff" stroke="#222" strokeWidth="1" />
        <circle cx="36" cy="13" r="3.1" fill="#fff" stroke="#222" strokeWidth="1" />
        <circle cx="28" cy="13" r="1.5" fill="#111" />
        <circle cx="36" cy="13" r="1.5" fill="#111" />
        {/* Mouth */}
        <path d="M27 18 Q32 21 37 18" stroke="#222" strokeWidth="1.4" fill="none" />

        {/* ==================== ARMS ==================== */}
        {/* LEFT ARM (waves), pivot at (20,35) */}
        <motion.g
          style={{ transformOrigin: "20px 35px" }}
          initial={{ rotate: 0 }}
          animate={
            wave
              ? { rotate: [0, -50, -15, -50, 0] }
              : { rotate: 0 }
          }
          transition={
            wave
              ? { duration: WAVE_DURATION, ease: "easeInOut", repeat: Infinity, repeatDelay: REPEAT_DELAY }
              : { duration: 0 }
          }
        >
          {/* Arm path starts at the shoulder (20,35) and goes up-left */}
          <path
            d="M20 35 Q 16 29 12 23"
            fill="none"
            stroke="#8A8A8A"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="23" r="2.4" fill="#6F6F6F" />
        </motion.g>

        {/* RIGHT ARM (static) */}
        <path
          d="M44 35 Q52 37 56 43"
          fill="none"
          stroke="#8A8A8A"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <circle cx="56" cy="43" r="2.4" fill="#6F6F6F" />

        {/* ==================== LEGS ==================== */}
        <line x1="28" y1="50" x2="26.2" y2="71" stroke="#8A8A8A" strokeWidth="4.4" strokeLinecap="round" />
        <line x1="36" y1="50" x2="37.8" y2="71" stroke="#8A8A8A" strokeWidth="4.4" strokeLinecap="round" />

        {/* ==================== BODY ==================== */}
        <rect
          x="20"
          y="26"
          width="24"
          height="24"
          rx="6"
          fill="url(#robotMetalGradient)"
          stroke="#333"
          strokeWidth="1.3"
        />

        {/* ==================== TORSO SLOT ==================== */}
        <foreignObject x="20" y="26" width="24" height="24">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </div>
        </foreignObject>
      </svg>
    </motion.div>
  )
}
