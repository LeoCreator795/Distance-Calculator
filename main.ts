input.onButtonPressed(Button.A, function () {
    Passos += 1
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("" + (Passos * 0.6))
})
input.onButtonPressed(Button.AB, function () {
    Passos = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Passos))
})
let Passos = 0
basic.showString("Distance Calculator")
