import { Physics, Debug } from '@react-three/rapier'

import Lights from './Lights.jsx'

import useGame from './stores/useGame.jsx'

import { Level } from './Level.jsx'
import Player from './Player.jsx'

export default function Experience()
{
    const blocksCount = useGame(state => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)

    return <>

        <color args={ [ '#bdedfc' ] } attach='background'></color>

        <Physics>
            <Lights />
            <Level count={ blocksCount } seed={ blocksSeed }/>
            <Player />
        </Physics>

    </>
}