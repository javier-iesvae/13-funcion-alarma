function alarm () {
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
}
input.onGesture(Gesture.Shake, function () {
    alarm()
})
