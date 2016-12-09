
function checkForm() {
    var inputs = document.forms["myForm"].elements;
    var flag = false;//нет проблем
    for (var i = 1; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            flag = true;//проблема есть
            inputs[i].style.borderColor = "red";
        }
    }
    if (flag) {
        alert("Заполните все поля!");
    }
    else {
        document.forms["myForm"].submit();
    }
}
