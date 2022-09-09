
function validateForm() {
    document.getElementById('faultName').className = "myStyle";
    document.getElementById('faultEmail').className = "myStyle";
    document.getElementById('faultPass').className = "myStyle";
    document.getElementById('faultCfPass').className = "myStyle";
    document.getElementById('faultPhone').className = "myStyle";
    document.getElementById('faultLocate').className = "myStyle";
    if (validateName() == true && validateEmail() == true && validatePass() == true && validateCfPass() == true && validatePhone() == true && validateLocate() == true) {
        alert("Bạn đã đăng ký")
    }
    validateName()
    validateEmail()
    validatePass()
    validateCfPass()
    validatePhone()
    validateLocate()
}

function validateName() {
    let a = document.getElementById("name").value;
    if (a == "") {
        document.getElementById("name").classList.add("red-border")
        document.getElementById("faultName").innerHTML = "Cần nhập tên"
        document.getElementById("name").focus();
    } else {
        document.getElementById("faultName").innerHTML = "";
        document.getElementById("name").classList.remove("red-border")
        return true;
    }
}

function validateEmail() {
    let b = document.getElementById("email").value;
    let aCong = b.indexOf("@");
    let dauCham = b.lastIndexOf(".");
    if (b == '') {
        document.getElementById("faultEmail").innerHTML = "Cần nhập email"
        document.getElementById("email").focus();
        return false;
    } else if (aCong < 1 || dauCham < aCong + 2 || dauCham + 2 > b.length) {
        document.getElementById("faultEmail").innerHTML = "Nhập sai email";
        document.getElementById("email").focus();
        return false;
    } else {
        document.getElementById("faultEmail").innerHTML = "";
        return true;
    }
}

function validatePass() {
    let c = document.getElementById("pass").value;
    if (c.length < 6 || c.length > 20 || c == '') {
        document.getElementById("faultPass").innerHTML = "Nhập sai mật khẩu";
        document.getElementById("pass").focus();
    } else {
        document.getElementById("faultPass").innerHTML = "";
        return true;
    }
}

function validateCfPass() {
    let d = document.getElementById("cf-pass").value;
    let c = document.getElementById("pass").value;
    if (d == '' || d != c) {
        document.getElementById("faultCfPass").innerHTML = "Nhập lại sai mật khẩu"
        document.getElementById("cf-pass").focus();
    } else {
        document.getElementById("faultCfPass").innerHTML = "";
        return true;
    }
}

function validatePhone() {
    let e = document.getElementById("phone-num").value;
    let phoneNum = isNaN(e);
    if (e == '') {
        document.getElementById("faultPhone").innerHTML = "Cần nhập số điện thoai"
        document.getElementById("phone-num").focus();
        return false;
    } else {
        document.getElementById("faultPhone").innerHTML = "";
    }
    if (phoneNum == true) {
        document.getElementById("faultPhone").innerHTML = "Cần nhập đúng ký tự số"
        document.getElementById("phone-num").focus();
        return false;
    } else {
        document.getElementById("faultPhone").innerHTML = "";
    }
    if (e.length < 10 || e.length > 11) {
        document.getElementById("faultPhone").innerHTML = "Cần nhập đúng số điện thoại"
        document.getElementById("phone-num").focus();
        return false;
    } else {
        document.getElementById("faultPhone").innerHTML = "";
        return true;
    }
}

function validateLocate() {
    let f = document.getElementById("location").value;
    if (f == '') {
        document.getElementById("faultLocate").innerHTML = "Cần nhập địa chỉ";
        document.getElementById("location").focus();
    } else {
        document.getElementById("faultLocate").innerHTML = "";
        return true;
    }
}

