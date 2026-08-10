import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PaintPhysicsSection.css";

const paintPath = `
  M 110 310
  C 190 300, 210 390, 330 370
  C 455 350, 430 245, 550 260
  C 680 278, 635 410, 770 380
  C 855 360, 885 300, 985 315
`;

export default function PaintPhysicsSection() {
  const [phase, setPhase] = useState("idle");

  const startAnimation = () => {
    if (phase !== "idle") return;

    setPhase("fall");

    // Bucket hits the floor
    setTimeout(() => {
      setPhase("pour");
    }, 900);

    // Paint starts flowing
    setTimeout(() => {
      setPhase("flow");
    }, 1450);

    // Final design complete
    setTimeout(() => {
      setPhase("complete");
    }, 4600);
  };

  const reset = () => {
    setPhase("idle");
  };

  const isFallen =
    phase === "fall" ||
    phase === "pour" ||
    phase === "flow" ||
    phase === "complete";

  const isPouring =
    phase === "pour" ||
    phase === "flow" ||
    phase === "complete";

  const isFlowing =
    phase === "flow" ||
    phase === "complete";

  return (
    <section className="paintSection">
      <div className="paintNoise" />

      {/* Header */}
      <div className="paintHeader">
        <div className="paintEyebrow">
          <span className="paintStatusDot" />
          INTERACTIVE EXPERIMENT
        </div>

        <h2>
          Make an
          <br />
          <span>impact.</span>
        </h2>

        <p>
          Tap the bucket and watch the idea take shape.
          A physical interaction becomes a digital mark.
        </p>
      </div>

      {/* Scene */}
      <div className="paintScene">
        <div className="studioGlow" />

        <div className="studioFloor">

          {/* Ground shadow */}
          <motion.div
            className="bucketShadow"
            animate={{
              scaleX: isFallen ? 1.35 : 0.9,
              scaleY: isFallen ? 0.7 : 0.9,
              opacity: isFallen ? 0.65 : 0.4,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />

          {/* =========================
              PAINT DESIGN
          ========================== */}

          <svg
            className="paintCanvas"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Main liquid gradient */}
              <linearGradient
                id="liquidGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00a99b" />
                <stop offset="35%" stopColor="#00f1d8" />
                <stop offset="55%" stopColor="#52fff0" />
                <stop offset="100%" stopColor="#00c8b7" />
              </linearGradient>

              {/* Highlight */}
              <linearGradient
                id="liquidHighlight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#65fff2" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#65fff2" />
              </linearGradient>

              {/* Glow */}
              <filter id="liquidGlow">
                <feGaussianBlur stdDeviation="15" />
              </filter>

              {/* Shadow */}
              <filter id="liquidShadow">
                <feDropShadow
                  dx="0"
                  dy="15"
                  stdDeviation="12"
                  floodColor="#000"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>

            {/* ---------------------------------
                PAINT GLOW
            ---------------------------------- */}

            <AnimatePresence>
              {isFlowing && (
                <motion.path
                  className="paintGlow"
                  d={paintPath}
                  fill="none"
                  stroke="#00ffe1"
                  strokeWidth="90"
                  strokeLinecap="round"
                  filter="url(#liquidGlow)"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.28,
                  }}
                  transition={{
                    pathLength: {
                      duration: 3,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 0.4,
                    },
                  }}
                />
              )}
            </AnimatePresence>

            {/* ---------------------------------
                MAIN PAINT
            ---------------------------------- */}

            <motion.path
              className="paintBody"
              d={paintPath}
              fill="none"
              stroke="url(#liquidGradient)"
              strokeWidth="64"
              strokeLinecap="round"
              filter="url(#liquidShadow)"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={
                isFlowing
                  ? {
                      pathLength: 1,
                      opacity: 1,
                    }
                  : {
                      pathLength: 0,
                      opacity: 0,
                    }
              }
              transition={{
                pathLength: {
                  duration: 3,
                  ease: [0.35, 0, 0.15, 1],
                },
                opacity: {
                  duration: 0.25,
                },
              }}
            />

            {/* ---------------------------------
                WET HIGHLIGHT
            ---------------------------------- */}

            <motion.path
              className="paintHighlight"
              d={paintPath}
              fill="none"
              stroke="url(#liquidHighlight)"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={
                isFlowing
                  ? {
                      pathLength: 1,
                      opacity: 0.55,
                    }
                  : {
                      pathLength: 0,
                      opacity: 0,
                    }
              }
              transition={{
                pathLength: {
                  duration: 3,
                  ease: [0.35, 0, 0.15, 1],
                },
              }}
            />

            {/* ---------------------------------
                PAINT DROPS
            ---------------------------------- */}

            <AnimatePresence>
              {phase === "complete" && (
                <>
                  <motion.ellipse
                    cx="385"
                    cy="412"
                    rx="18"
                    ry="9"
                    fill="#00dfca"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />

                  <motion.ellipse
                    cx="680"
                    cy="425"
                    rx="11"
                    ry="6"
                    fill="#00dfca"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  />

                  <motion.ellipse
                    cx="850"
                    cy="347"
                    rx="7"
                    ry="4"
                    fill="#00dfca"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.55 }}
                  />
                </>
              )}
            </AnimatePresence>
          </svg>

          {/* =========================
              BUCKET
          ========================== */}

          <motion.div
            className="bucketWrapper"
            onClick={startAnimation}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                startAnimation();
              }
            }}
            role="button"
            tabIndex={phase === "idle" ? 0 : -1}
            aria-label="Knock over the paint bucket"
            initial={{
              rotate: 0,
              x: 0,
              y: 0,
            }}
            animate={
              phase === "idle"
                ? {
                    rotate: 0,
                    x: 0,
                    y: 0,
                  }
                : {
                    rotate: -82,
                    x: -10,
                    y: 125,
                  }
            }
            transition={{
              duration: 0.85,
              ease: [0.7, 0, 0.2, 1],
            }}
          >
            <div className="bucket">

              {/* Handle */}
              <div className="bucketHandle">
                <span />
              </div>

              {/* Bucket body */}
              <div className="bucketBody">

                {/* Opening */}
                <div className="bucketTop">
                  <div className="bucketRim">
                    <div className="paintInside" />
                  </div>
                </div>

                {/* Metal */}
                <div className="bucketMetal">
                  <span className="metalHighlight" />
                  <span className="metalShade" />
                </div>

                {/* Bottom */}
                <div className="bucketBottom" />
              </div>

              {/* Paint pouring from bucket */}
              <AnimatePresence>
                {isPouring && (
                  <motion.div
                    className="pouringPaint"
                    initial={{
                      scaleY: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scaleY: 1,
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                  >
                    <span className="pourHighlight" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Small droplets while pouring */}
          <AnimatePresence>
            {isPouring && (
              <>
                <motion.div
                  className="liquidDrop dropOne"
                  initial={{
                    opacity: 0,
                    y: -20,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [-20, 10, 35, 60],
                    scale: [0, 1, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: 2,
                    ease: "easeIn",
                  }}
                />

                <motion.div
                  className="liquidDrop dropTwo"
                  initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [-10, 20, 45, 70],
                    scale: [0, 1, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.25,
                    repeat: 2,
                    ease: "easeIn",
                  }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Finished marker */}
          <AnimatePresence>
            {phase === "complete" && (
              <motion.div
                className="completeMark"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <span />
                FORM COMPLETE
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scene label */}
          <div className="sceneLabel">
            <span>01</span>
            <div />
            <span>
              {phase === "idle"
                ? "TAP THE BUCKET"
                : phase === "fall"
                ? "IMPACT"
                : phase === "pour"
                ? "LIQUID RELEASE"
                : phase === "flow"
                ? "FORMING"
                : "LIQUID / FORM"}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom instruction */}
      <div className="paintBottom">
        <div>
          <span className="instructionDot" />
          {phase === "idle"
            ? "CLICK / TAP TO BEGIN"
            : phase === "complete"
            ? "EXPERIMENT COMPLETE"
            : "PLEASE WAIT"}
        </div>

        {phase === "complete" && (
          <button
            className="resetButton"
            onClick={reset}
          >
            RESET ↗
          </button>
        )}
      </div>
    </section>
  );
}