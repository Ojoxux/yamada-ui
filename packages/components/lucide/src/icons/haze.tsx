import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { Haze as OriginalHaze } from "lucide-react"

/**
 * `HazeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HazeIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalHaze}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `Haze` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `HazeIcon` instead.
 */
export const Haze = HazeIcon
