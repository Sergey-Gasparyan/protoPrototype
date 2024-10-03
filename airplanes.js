const airplanes = {
    takeOff : function () {
        return true
    } ,

    land : function () {
        return true
    }
}
const airplane = Object.create(airplanes , "name")


if(airplane.takeOff()) airplane.isFlying = true
else if(airplane.land()) airplane.isFlying = false