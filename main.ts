let bira = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.clearDistance(Motors.M1)
basic.forever(function () {
    bira = parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
    if (bira < 5) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
    }
})
basic.forever(function () {
    basic.showNumber(parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1)))
})
