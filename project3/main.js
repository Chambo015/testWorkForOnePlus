import './style.css';
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('blur', function (event) {
        const target = event.target;
        validateField(target);
    });

    form.addEventListener('input', function (event) {
        const target = event.target;

        if (target.name === 'password') {
            validateField(document.getElementById('password'));
            validateField(document.getElementById('confirmPassword'));
            return;
        }
        validateField(target);
    });

    function validateField(field) {
        const fieldName = field.name;
        const fieldValue = field.value;
        const errorElement = document.getElementById(`${fieldName}Error`);

        switch (fieldName) {
            case 'firstName':
                const nameRegex = /^[а-яА-Я]+$/;
                const isNameValid = nameRegex.test(fieldValue) && fieldValue.length <= 15 && !/\s/.test(fieldValue);
                displayError(
                    isNameValid,
                    errorElement,
                    fieldName,
                    'Введите корректное имя (без пробелов, не более 15 символов, кириллица)'
                );
                break;

            case 'lastName':
                const lastNameRegex = /^[а-яА-Я]+$/;
                const isLastNameValid =
                    lastNameRegex.test(fieldValue) && fieldValue.length <= 20 && !/\s/.test(fieldValue);
                displayError(
                    isLastNameValid,
                    errorElement,
                    fieldName,
                    'Введите корректную фамилию (без пробелов, не более 20 символов, кириллица)'
                );
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isEmailValid = emailRegex.test(fieldValue);
                displayError(
                    isEmailValid,
                    errorElement,
                    fieldName,
                    'Введите валидный email-адрес (например, example@example.com)'
                );
                break;

            case 'password':
                const isPasswordValid = fieldValue.length > 8 && !/\s/.test(fieldValue);
                console.log('@password', fieldValue);
                displayError(
                    isPasswordValid,
                    errorElement,
                    fieldName,
                    'Введите корректный пароль (без пробелов, не менее 8 символов)'
                );
                break;

            case 'confirmPassword':
                const passwordValue = document.getElementById('password').value;
                const isConfirmPasswordValid = fieldValue === passwordValue || fieldValue === '';
                displayError(isConfirmPasswordValid, errorElement, fieldName, 'Пароли не совпадают');
                break;

            case 'birthday':
                const birthdayValue = new Date(fieldValue);
                const currentDate = new Date();
                const minDob = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
                const isBirthDayValueValid = birthdayValue <= minDob;
                displayError(isBirthDayValueValid, errorElement, fieldName, 'Вам должно быть не менее 18 лет для регистрации');
                break;
        }

        validateForm();
    }

    const validTarget = new Proxy(
        {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirmPassword: false,
            birthday: false,
            validAllProps: false,
        },
        {
            get: (obj, prop) => {
                if (prop === 'validAllProps') {
                    const value =
                        obj['firstName'] &&
                        obj['lastName'] &&
                        obj['email'] &&
                        obj['password'] &&
                        obj['confirmPassword'] &&
                        obj['birthday'];

                    Reflect.set(obj, prop, value);
                    return value;
                }
                return obj[prop];
            },
            set(obj, prop, value, receiver) {
                const res = Reflect.set(...arguments); // Результат присваивания нового значения
                if (res) {
                    submitButton.disabled = !validTarget.validAllProps;
                    return res;
                }
            },
        }
    );

    function displayError(isValid, errorElement, fieldName, errorMessage) {
        validTarget[fieldName] = isValid;
        console.log('@validTarget', validTarget);
        if (!isValid) {
            errorElement.textContent = errorMessage;
        } else {
            errorElement.textContent = '';
        }
    }

    
});
