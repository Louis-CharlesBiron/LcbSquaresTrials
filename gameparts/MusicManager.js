class MusicManager {
    static DEFAULT_VOLUME = 0.4

    constructor(audioElement) {
        this._audio = audioElement
        this.volume = MusicManager.DEFAULT_VOLUME
        this._audio.loop = true
    }

    loadMusic(path) {
        this.src = path
        this.play()
    }

    play() {
        if (this.src) this._audio.play()
    }

    stop() {
        if (this.src) this._audio.pause()
    }

    get src() {return this._audio?.src}
    get volume() {return this._audio?.volume}
    get muted() {return this._audio?.muted}

    set src(src) {this._audio.src = src}
    set volume(volume) {this._audio.volume = volume}
    set muted(muted) {this._audio.muted = muted}
}