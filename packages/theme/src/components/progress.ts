import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import { getColor, isArray } from "@yamada-ui/utils"

export const Progress: ComponentMultiStyle<"Progress"> = {
  baseStyle: {
    filledTrack: ({
      colorScheme: c = "primary",
      colorMode: m,
      filledTrackColor: f,
      hasStripe,
      isAnimation,
      theme: t,
    }) => {
      hasStripe = !isAnimation && hasStripe

      const color = mode("rgba(255, 255, 255, 0.15)", "rgba(0,0,0,0.1)")(m)

      const bgColor = f
        ? isArray(f)
          ? mode(getColor(f[0], f[0])(t, m), getColor(f[1], f[1])(t, m))(m)
          : getColor(f, f)(t, m)
        : getColor(`${c}.500`)(t, m)

      const bgImage = hasStripe
        ? `linear-gradient(
            45deg,
            ${color} 25%,
            transparent 25%,
            transparent 50%,
            ${color} 50%,
            ${color} 75%,
            transparent 75%,
            transparent
          )`
        : isAnimation
          ? `linear-gradient(
            to right,
            transparent 0%,
            ${bgColor} 50%,
            transparent 100%
          )`
          : undefined

      return {
        bgImage,
        transitionDuration: "slow",
        transitionProperty: "common",
        ...(hasStripe ? { bgSize: "1rem 1rem" } : {}),
        ...(!isAnimation ? { bgColor } : {}),
      }
    },
    track: {
      bg: "border",
    },
  },

  sizes: {
    xs: {
      track: {
        h: "1",
      },
    },
    sm: {
      track: {
        h: "2",
      },
    },
    md: {
      track: {
        h: "3",
      },
    },
    lg: {
      track: {
        h: "4",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
}
