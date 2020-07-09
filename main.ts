basic.forever(function () {
    basic.showString("bonjour")
    basic.pause(200)
    basic.showNumber(10853)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
})
