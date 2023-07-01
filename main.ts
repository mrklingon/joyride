function setShip (x: number, y: number) {
    if (!(starshipx == oldX && starshipy == oldy)) {
        led.plotBrightness(oldX, oldy, ob2)
        ob2 = led.pointBrightness(x, y)
        led.plotBrightness(x, y, 255)
        oldX = x
        oldy = y
    }
}
input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    oldBack = 0
    start = starshipx
    for (let index = 0; index < starshipx + 1; index++) {
        led.plot(start, starshipy)
        basic.pause(100)
        start += -1
    }
    start = starshipx
    for (let index = 0; index < starshipx + 1; index++) {
        led.unplot(start, starshipy)
        basic.pause(100)
        start += -1
    }
    led.plot(starshipx, starshipy)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    mkStars()
    setShip(starshipx, starshipy)
    led.plot(starshipx, starshipy)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    oldBack = 0
    for (let index = 0; index <= 4 - starshipx; index++) {
        led.plot(starshipx + index, starshipy)
        basic.pause(100)
    }
    for (let index = 0; index <= 4 - starshipx; index++) {
        led.unplot(starshipx + index, starshipy)
        basic.pause(100)
    }
    led.plot(starshipx, starshipy)
})
function mkStars () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 13; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), randint(15, 100))
    }
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    starshipx = 2
    starshipy = 2
    setShip(2, 2)
})
let start = 0
let ob2 = 0
let oldBack = 0
let oldy = 0
let oldX = 0
let starshipy = 0
let starshipx = 0
joystickbit.initJoystickBit()
starshipx = 2
starshipy = 2
oldX = 2
oldy = 2
oldBack = 0
ob2 = 0
mkStars()
led.plotBrightness(starshipx, starshipy, 255)
basic.forever(function () {
    if (600 < joystickbit.getRockerValue(joystickbit.rockerType.X)) {
        starshipx = (starshipx + 4) % 5
    }
    if (400 > joystickbit.getRockerValue(joystickbit.rockerType.X)) {
        starshipx = (starshipx + 6) % 5
    }
    if (600 < joystickbit.getRockerValue(joystickbit.rockerType.Y)) {
        starshipy = (starshipy + 4) % 5
    }
    if (400 > joystickbit.getRockerValue(joystickbit.rockerType.Y)) {
        starshipy = (starshipy + 6) % 5
    }
    setShip(starshipx, starshipy)
    basic.pause(100)
})
