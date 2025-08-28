import React, { ReactNode, isValidElement } from "react"
import { motion } from "framer-motion"

const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
  children: ReactNode
  href?: string
}

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: ReactNode }>
    return extractText(element.props?.children)
  }
  return ""
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  const text = extractText(children)
  const Wrapper: any = href ? motion.a : motion.span
  return (
    <Wrapper
      initial="initial"
      whileHover="hovered"
      {...(href ? { href, target: "_blank" } : {})}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase 
       sm:text-7xl md:text-[8rem] cursor-pointer "
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </Wrapper>
  )
}

export default FlipLink
