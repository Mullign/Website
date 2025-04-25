"use client"

import { useState, useEffect } from "react"

const Background = ({ variant = "default", intensity = "medium", interactive = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!interactive) return

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [interactive])

  // Get elegant background styles based on variant and intensity
  const getElegantBackgroundStyles = () => {
    const intensityValues = {
      light: { opacity: 0.15, blur: "80px" },
      medium: { opacity: 0.25, blur: "100px" },
      strong: { opacity: 0.35, blur: "120px" },
    }

    const { opacity, blur } = intensityValues[intensity] || intensityValues.medium

    if (variant === "gradient") {
      const gradientStyle = interactive
        ? {
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(187, 59, 246, ${opacity}), rgba(99, 102, 241, ${opacity}), rgba(59, 130, 246, ${opacity}))`,
            backgroundSize: "200% 200%",
          }
        : {
            backgroundImage: `linear-gradient(to right, rgba(187, 59, 246, ${opacity}), rgba(99, 102, 241, ${opacity}), rgba(59, 130, 246, ${opacity}), rgba(187, 59, 246, ${opacity}))`,
            backgroundSize: "400% 100%",
            animation: "elegantGradientShift 15s ease infinite",
          }

      return {
        ...gradientStyle,
        filter: `blur(${blur})`,
      }
    }

    if (variant === "waves") {
      return {
        backgroundImage: `linear-gradient(to right, rgba(187, 59, 246, ${opacity / 2}), rgba(59, 130, 246, ${opacity / 2}))`,
        backgroundSize: "200% 200%",
        animation: "elegantWaveShift 10s ease infinite",
        maskImage:
          "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='waves' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10 V 20 H 0' fill='black'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23waves)'/%3E%3C/svg%3E\")",
        maskSize: "100px 20px",
        maskRepeat: "repeat",
      }
    }

    // Default case - return empty object to use existing background
    return {}
  }

  return (
    <div className="fixed inset-0 bg-[#030711] overflow-hidden">
      {/* Elegant background layer - Added as a new layer */}
      {variant !== "default" && <div className="absolute inset-0 -z-10" style={getElegantBackgroundStyles()} />}

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Main gradient sphere */}
      <div
        className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] opacity-30 blur-3xl"
        style={{
          background: `
            radial-gradient(
              circle at center,
              transparent 15%,
              rgba(187, 59, 246, 0.13) 35%,
              rgba(220, 99, 241, 0.13) 45%,
              transparent 65%
            )
          `,
        }}
      />

      {/* Subtle grid - Responsive grid size */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px)",
        }}
      />

      {/* Device Outlines - Now with responsive sizing and positioning */}
      <div className="absolute inset-0">
        {/* Laptop - Hidden on small screens */}
        <div className="absolute opacity-40 hidden md:block" style={{ top: "15%", right: "15%" }}>
          <div className="relative">
            <div
              className="w-[clamp(200px,30vw,256px)] h-[clamp(125px,20vw,160px)] rounded-lg border-2 border-blue-500/50 backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)",
              }}
            >
              <div className="p-4 space-y-2">
                <div className="h-1 w-3/4 bg-blue-500/50 rounded" />
                <div className="h-1 w-1/2 bg-blue-500/40 rounded" />
                <div className="h-1 w-2/3 bg-blue-500/45 rounded" />
              </div>
            </div>
            <div
              className="relative w-[75%] h-1 bg-blue-500/50 rounded mx-auto border-2 border-blue-500/50"
              style={{
                transformOrigin: "center top",
                transform: "perspective(400px) rotateX(75deg) translateY(2px)",
              }}
            />
          </div>
        </div>

        {/* Smartphones - Responsive positioning */}
        <div className="absolute opacity-40 md:top-[35%] md:left-[20%] top-[10%] left-[10%]">
          <div
            className="w-[clamp(80px,15vw,96px)] h-[clamp(140px,25vw,192px)] rounded-[24px] border-2 border-blue-500/50 p-3 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)",
            }}
          >
            <div className="w-1/2 h-1 mx-auto bg-blue-500/50 rounded-full" />
            <div className="mt-8 space-y-2">
              <div className="h-0.5 w-full bg-blue-500/40 rounded" />
              <div className="h-0.5 w-3/4 bg-blue-500/45 rounded" />
            </div>
          </div>
        </div>

        {/* Android Phone - Adjusted for mobile */}
        <div className="absolute opacity-40 md:bottom-[25%] md:right-[25%] bottom-[20%] right-[10%]">
          <div
            className="w-[clamp(80px,15vw,96px)] h-[clamp(140px,25vw,192px)] rounded-[18px] border-2 border-blue-500/50 p-3 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)",
            }}
          >
            <div className="w-1.5 h-1.5 ml-2 bg-blue-500/50 rounded-full" />
            <div className="mt-8 space-y-2">
              <div className="h-0.5 w-full bg-blue-500/45 rounded" />
              <div className="h-0.5 w-2/3 bg-blue-500/40 rounded" />
            </div>
          </div>
        </div>

        {/* Tablet - Hidden on mobile, visible on larger screens */}
        <div className="absolute opacity-40 hidden md:block" style={{ bottom: "20%", left: "10%" }}>
          <div
            className="w-[clamp(160px,20vw,192px)] h-[clamp(200px,30vw,256px)] rounded-[24px] border-2 border-blue-500/50 p-4 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)",
            }}
          >
            <div className="mt-4 space-y-3">
              <div className="h-1 w-3/4 bg-blue-500/50 rounded" />
              <div className="h-1 w-1/2 bg-blue-500/45 rounded" />
              <div className="h-1 w-2/3 bg-blue-500/40 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Pattern - Responsive positioning */}
      <div className="absolute inset-0">
        <svg
          className="absolute md:top-[40%] md:right-[30%] top-[50%] right-[20%] w-[clamp(48px,10vw,96px)] h-[clamp(48px,10vw,96px)] stroke-blue-500/20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="0.5"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      {/* Accent lines - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[30%] left-0 right-0 h-px opacity-20"
          style={{
            background: "linear-gradient(to right, transparent, #3b82f6, transparent)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 md:right-[25%] right-[15%] w-px opacity-20"
          style={{
            background: "linear-gradient(to bottom, transparent, #6366f1, transparent)",
          }}
        />
      </div>

      {/* Vignette and fades */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent, rgba(3, 7, 17, 0.5))",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, #030711, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, #030711, transparent)",
        }}
      />

      {/* Animation styles */}
      <style jsx>{`
        @keyframes elegantGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes elegantWaveShift {
          0% { background-position: 0% 50%; transform: translateY(0); }
          50% { background-position: 100% 50%; transform: translateY(5px); }
          100% { background-position: 0% 50%; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Background
