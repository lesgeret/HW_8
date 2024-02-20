// 1
window.onload = function () {

    // 2
    let inputFullName = document.getElementById('fullname');

    inputFullName.onkeydown = (e) => {

    if (parseInt(e.key) || e.key === "0") {
        return false;
    }
}

    // 3
    let inputUserName = document.getElementById('username');

    inputUserName.onkeydown = (e) => {
        let symbol = e.key;
        if (symbol === "." || symbol === ",") {
            return false;
        }
    }

    // 4
    let checkboxAgree = document.getElementById('check');

    checkboxAgree.onclick = () => {
        if (!(checkboxAgree.checked)) {
            console.log("Не согласен")
        } else {
            console.log("Согласен")
        }
    }

    // 5 описание функции при нажатии на кнопку Sign Up
    let signUpFunction = function () {

        let inputEmail = document.getElementById('email');
        let inputPwd = document.getElementById('pwd');
        let inputRepPwd = document.getElementById('repeat-pwd');

        if (!inputFullName.value) {
            alert("Fill out the Name form");
            return;
        }
        if (!inputUserName.value) {
            alert("Fill out the Username form");
            return;
        }
        if (!inputEmail.value) {
            alert("Fill out the Email form");
            return;
        }
        if (!inputPwd.value) {
            alert("Fill out the Password form");
            return;
        }
        if (inputPwd.value.length < 8) {
            alert("Minimum 8 characters in password!")
            return;
        }
        if (!inputRepPwd.value) {
            alert("Fill out the Repeat password form");
            return;
        }
        if (!(inputPwd.value === inputRepPwd.value)) {
            alert("Passwords not match");
            return;
        }
        if (!checkboxAgree.checked) {
            alert("Are you Agree to our Terms of Service and Privacy Statement ?");
            checkboxAgree.checked = true;
            return;
        }

        document.getElementById('popup').style.display = 'block';

        document.getElementById('popup-btn').onclick = function () {
            document.getElementById('popup').style.display = 'none';
            // func to Login
            toLoginPage();
        }

        inputFullName.value = "";
        inputUserName.value = "";
        inputEmail.value = "";
        inputPwd.value = "";
        inputRepPwd.value = "";
        checkboxAgree.checked = false;
    }
    // вызываем эту функцию
    let signUpButton = document.getElementById('signup_btn');
    signUpButton.addEventListener('click', signUpFunction);  /* назначаем первый слушатель */

    // 6
    // функция логина в систему
    let toLoginPage = function () {

        let inputPwd = document.getElementById('pwd');
        inputUserName.value = "";
        inputPwd.value = "";

        // переименовывание заголовка
        let h1 = document.getElementById('hw-h1');
        h1.textContent = "Log In to the system";
        h1.style.marginBottom = "50px";

        // удаляем текст
        document.getElementsByClassName('hw-left_content-info')[0].remove();

        // удаляем лейблы
        document.getElementById('label-fullname').remove();
        document.getElementById('label-email').remove();
        document.getElementById('label-repeat-pwd').remove();

        // удаляем инпуты
        document.getElementById('fullname').remove();
        document.getElementById('email').remove();
        document.getElementById('repeat-pwd').remove();

        // удаляем чекбокс
        checkboxAgree.remove();
        document.getElementById('checkbox-label').remove();

        // замена текста в кнопке
        signUpButton.textContent = "Sign In";

        // удаление ссылки
        accountLink.remove();

        // функция второго слушателя Sign Up
        let loginFunction = function () {

            if (!inputUserName.value || !inputPwd.value) {
                alert("Fill out the form");
                return;
            }
            alert("Welcome, " + inputUserName.value + "!");
            inputUserName.value = "";
            inputPwd.value = "";
        }

        signUpButton.removeEventListener('click', signUpFunction); /* удаляем первый слушатель */
        signUpButton.addEventListener('click', loginFunction); /* назначаем второй слушатель */
    }

    // вызов функции
    let accountLink = document.getElementById('account_link');
    accountLink.onclick = toLoginPage;


    // window.onload
}