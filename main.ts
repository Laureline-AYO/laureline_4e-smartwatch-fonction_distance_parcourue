function DistanceP () {
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        Distance += pas
    }
    if (input.buttonIsPressed(Button.AB)) {
        Distance = 0
        pas = 0.25
        basic.showNumber(Distance)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.A)) {
        if (Distance < 1000) {
            basic.showNumber(Distance)
            basic.showString("m")
        } else {
            basic.showNumber(Distance / 1000)
            basic.showString("km")
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (pas <= 1.2) {
            pas += 0.1
        }
        if (pas > 1.2) {
            pas = 1.2
        }
    }
}
let pas = 0
let Distance = 0
Distance = 0
pas = 0.25
basic.forever(function () {
    DistanceP()
})
