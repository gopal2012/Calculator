let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string).toString(); // Evaluate and convert to string
            } catch {
                string = "Error"; // Handle invalid expressions
            }
        } else if (value === 'C') {
            string = "";
        } else {
            string += value;
        }

        document.querySelector('input').value = string;
    });
});
