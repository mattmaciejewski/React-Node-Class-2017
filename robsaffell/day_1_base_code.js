//base constructor
function computer () {
    var _cpu = 4;
    var c = {};
    c.GetCpu = function () {return _cpu};
    c.RAM = 8;
    c.hdd = 500;
    c.bootup = function () {
        console.log("starting...");
    }

    return c;
}

var myComputer = new computer();
console.log(myComputer);
myComputer.bootup();