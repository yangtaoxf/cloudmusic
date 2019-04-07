export const userName = state => state.userInfo.userName
export const nickName = state => state.userInfo.nickName
export const avatarUrl = state => state.userInfo.avatarUrl

export const singer = state => state.songs.singer
export const playing = state => state.songs.playing
export const fullScreen = state => state.songs.fullScreen
export const playList = state => state.songs.playList
export const sequenceList = state => state.songs.sequenceList
export const mode = state => state.songs.mode
export const currentIndex = state => state.songs.currentIndex
export const audio = state => state.songs.audio
export const currentSong = (state) => {
    return state.songs.playList[state.songs.currentIndex] || {}
}

