import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarCheck2 as CalendarCheck2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarCheck2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCheck2 = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarCheck2Icon} {...props} />,
)
