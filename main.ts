let accY = 0
radio.setGroup(1)
basic.forever(function () {
    accY = pins.map(
    input.acceleration(Dimension.Y),
    350,
    1023,
    0,
    30
    )
    radio.sendNumber(accY)
})
