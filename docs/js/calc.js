calculator();

function calculator() {
    var teclas = document.getElementsByTagName("input");
    var num1, num2, result, op_sign;

    for (i = 1; i < teclas.length; i++) {
        teclas[i].onclick = function () {
            var calc_screen = document.getElementById("calc_screen");

            if (num1 == null) {
                if (this.value != "+" && this.value != "-" && this.value != "*" && this.value != "/" && this.value != "=") {
                    calc_screen.value = calc_screen.value + this.value;
                } else {
                    num1 = calc_screen.value;
                    calc_screen.value = null;
                    op_sign = this.value;
                    if (this.value == "=") {
                        calc_screen.value = num1;
                        num1 = null;
                        op_sign = null;
                    }
                }
            } else {
                if (this.value != "+" && this.value != "-" && this.value != "*" && this.value != "/" && this.value != "=") {
                    calc_screen.value = calc_screen.value + this.value;
                } else {
                    if (this.value == "=") {
                        
                        num2 = calc_screen.value;
                        calc_screen.value = null;
                        num1 = parseInt(num1);
                        num2 = parseInt(num2);

                        switch (op_sign) {
                            case "+":
                                result = num1 + num2;
                                break;

                            case "-":
                                result = num1 - num2;
                                break;

                            case "*":
                                result = num1 * num2;
                                break;

                            case "/":
                                result = num1 / num2;
                                break;
                        }
                        num1 = num2;
                        calc_screen.value = result;
                    }
                }
            }
        }
    }
}