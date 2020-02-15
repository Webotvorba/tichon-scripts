'use strict';

let WpxIntlTel = (function() {
    let userLang = document.documentElement.getAttribute('lang');

    let phone = document.querySelector("#phone"),
        msg   = document.querySelector("#phone-msg");

    let errorMap = [
        frontEndLocalization[userLang].invalidNumber,
        frontEndLocalization[userLang].invalidCountry,
        frontEndLocalization[userLang].tooShort,
        frontEndLocalization[userLang].tooLong,
        frontEndLocalization[userLang].invalidNumber
    ];

    let reset = function() {
        phone.classList.remove("is-valid");
        phone.classList.remove("is-invalid");
        msg.innerHTML = "";
        msg.classList.remove("d-block");
    };

    $(document).ready(function () {
        if (phone !== null)
        {
            let iti   = window.intlTelInput(phone, {
                hiddenInput: "full_phone",
                initialCountry: window.isoCode.toLowerCase(),
                preferredCountries: ["sk", "cz", "hu", "ro", "pl"],
                utilsScript: "/js/intl-tel-input-utils.js"
            });

            phone.addEventListener('blur', function() {
                reset();
                if (phone.value.trim()) {
                    if (iti.isValidNumber()) {
                        phone.classList.add("is-valid");
                    } else {
                        phone.classList.add("is-invalid");
                        let errorCode = iti.getValidationError();
                        msg.innerHTML = errorMap[errorCode];
                        msg.classList.add("d-block");
                    }
                }
            });

            // on keyup / change flag: reset
            phone.addEventListener('change', reset);
            phone.addEventListener('keyup', reset);
        }
    });
})();