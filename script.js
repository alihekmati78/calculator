const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button")


buttons.forEach(button =>
    button.addEventListener("click", () => {
        const btnValue = button.textContent;
        switch(btnValue) {
            case '=':
                display.value = eval(display.value);
                break;
            case "AC":
                display.value = ""
                break;
            case "DE":
                display.value = display.value.slice(0, -1);
                break;
            default:
                display.value += btnValue;
        }
    })
    );