import { PhraseGenData } from '@constants/phraseGen.data'
import { getRandomNumber } from '@utils/getRandomNumber'
import { useState } from 'react'

import styles from './phraseGenerator.module.scss'

const PhraseGenerator = () => {
    const [number, setNumber] = useState(9)
    return (
        <div
            className={styles.right}
            onClick={() => setNumber(getRandomNumber(PhraseGenData.length))}
        >
            <p>{PhraseGenData[number]}</p>
        </div>
    )
}

export default PhraseGenerator
