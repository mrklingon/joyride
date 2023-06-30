let starship = game.createSprite(2, 2)
basic.forever(function () {
    if (600 < joystickbit.getRockerValue(joystickbit.rockerType.X)) {
        starship.set(LedSpriteProperty.Direction, 0)
        starship.move(1)
    }
    if (400 > joystickbit.getRockerValue(joystickbit.rockerType.X)) {
        starship.set(LedSpriteProperty.Direction, 90)
        starship.move(1)
    }
    if (600 < joystickbit.getRockerValue(joystickbit.rockerType.X)) {
        starship.set(LedSpriteProperty.Direction, 270)
        starship.move(1)
    }
    if (600 < joystickbit.getRockerValue(joystickbit.rockerType.Y)) {
        starship.set(LedSpriteProperty.Direction, 180)
        starship.move(1)
    }
    if (400 > joystickbit.getRockerValue(joystickbit.rockerType.Y)) {
        starship.set(LedSpriteProperty.Direction, 180)
        starship.move(1)
    }
    basic.pause(100)
})
