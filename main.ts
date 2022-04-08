input.onButtonPressed(Button.A, function () {
    if (reading < 400) {
        basic.showString("Isolant")
    } else {
        basic.showString("Conducteur")
    }
})
let reading = 0
reading = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
	
})
