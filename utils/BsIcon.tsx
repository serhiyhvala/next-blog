import {TypesBsIcons} from '@type/bsIconTypes'
import {FC} from 'react'
import * as BsIcons from 'react-icons/bs/index'

type BsIconsProps = {
    name: TypesBsIcons
    size: number
}

const BsIcon: FC<BsIconsProps> = ({name, size = 30}) => {
    const IconComponent = BsIcons[name]
    return <IconComponent size={size}/>
}

export default BsIcon
