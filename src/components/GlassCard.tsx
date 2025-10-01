import type { FC, ReactNode } from "react"
import { Card } from "antd"
import type { CardProps } from "antd"

interface GlassCardProps extends CardProps {
  children?: ReactNode
}

const GlassCard: FC<GlassCardProps> = ({ children, ...rest }) => {
  return (
    <Card className="glass-card" {...rest}>
      {children}
    </Card>
  )
}

export default GlassCard
