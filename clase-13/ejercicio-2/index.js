var getNum0a255 = function () { return Math.floor(Math.random() * 256); };
var Color2 = /** @class */ (function () {
    function Color2() {
    }
    Color2.prototype.get = function () {
        var color = "rgb(".concat(getNum0a255(), ", ").concat(getNum0a255(), ", ").concat(getNum0a255(), ")");
        return color;
    };
    return Color2;
}());
var color2 = new Color2();
console.log(color2.get());
