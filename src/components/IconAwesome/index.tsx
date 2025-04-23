'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas, far, fab)

type IconStyle = 'solid' | 'regular' | 'brands'
type IconSize = number | `${number}px` | 'xs' | 'sm' | 'lg' | 'xl' | '2x' | '3x'

interface IconProps {
  name: IconName
  size?: IconSize
  color?: string
  style?: IconStyle
  className?: string
}

export const Icon = ({name, size = 16, color, style = 'solid', className = ''}: IconProps) => {

  const iconPrefix = style === 'brands' ? 'fab' : 
                     style === 'regular' ? 'far' : 'fas'

  const styleObj = {
    color,
    fontSize: typeof size === 'number' ? `${size}px` : size,
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
  }

  return (
    <FontAwesomeIcon
      icon={[iconPrefix, name]}
      className={className}
      style={styleObj}
    />
  )
}