let captcha = 1234;
let ValidaCaptcha = prompt("Ingrese código captcha:");

while (captcha != 0 && ValidaCaptcha != 0) {
    if (captcha == ValidaCaptcha) {
        alert("Código captcha correcto");
        break;
    } else {
        alert("Código captcha incorrecto");
        ValidaCaptcha = prompt("Ingrese código captcha:");
    }
}