import { atom } from 'recoil'
import { IPlayer } from '../types'

export const playersState = atom({
    key: 'playersState',
    default: [] as IPlayer[],
})
