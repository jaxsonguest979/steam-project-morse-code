radio.onReceivedNumber(function (receivedNumber) {
    Play()
})
function Play () {
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    playMorse()
}
input.onButtonPressed(Button.A, function () {
    playMorse()
})
function playMorse () {
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
radio.setGroup(87)
