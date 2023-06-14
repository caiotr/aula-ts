//just numbers
var barco;
(function (barco) {
    barco[barco["motor"] = 2] = "motor";
    barco[barco["proa"] = 1] = "proa";
    barco[barco["poupa"] = 1] = "poupa";
})(barco || (barco = {}));
var numeroDeMotores = barco.motor;
console.log('motores:' + numeroDeMotores);
