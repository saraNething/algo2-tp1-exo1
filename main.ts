input.onButtonPressed(Button.A, function () {
    led.unplot(pos_X, 0)
    pos_X = Math.max(0, pos_X - 1)
    led.plot(pos_X, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(pos_X, 0)
    pos_X = 0
    pos_X = Math.min(4, pos_X + 1)
    led.plot(pos_X, 0)
})
let pos_X = 0
pos_X = 2
led.plot(pos_X, 0)
let direction = 1
basic.forever(function () {
    basic.pause(500)
    led.unplot(pos_X, 0)
    if (pos_X >= 4) {
        direction = -1
    } else if (pos_X <= 0) {
        direction = 1
    }
    led.plot(pos_X, 0)
})
