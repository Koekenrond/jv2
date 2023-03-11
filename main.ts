input.onButtonPressed(Button.A, function () {
    if (bewerkingKiezen = 1) {
        if (codeDatMoetUitgevoerdWorden = 4) {
            codeDatMoetUitgevoerdWorden = 1
        } else {
            codeDatMoetUitgevoerdWorden += 1
        }
        if (codeDatMoetUitgevoerdWorden = 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        } else if (codeDatMoetUitgevoerdWorden = 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
        } else if (codeDatMoetUitgevoerdWorden = 3) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
        }
    } else {
        A += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    uitkomst = A + B
    basic.showNumber(uitkomst)
    A = 0
    B = 0
    uitkomst = 0
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    B += 1
    basic.showNumber(B)
})
let B = 0
let uitkomst = 0
let A = 0
let codeDatMoetUitgevoerdWorden = 0
let bewerkingKiezen = 1
codeDatMoetUitgevoerdWorden = 1
