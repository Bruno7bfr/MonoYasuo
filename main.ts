let ponto_j2 = 0
let Ponto_j1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    basic.showString("Vamos Jogar!<3")
    basic.pause(randint(1000, 7000))
    basic.showIcon(IconNames.Skull)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    ponto_j2 += 1
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    Ponto_j1 += 1
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
