// arr.forEach(buuton => {
//     buttons.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//         }
//         else if(e.target.innerHTML=='AC'){
//             string=" ";
//             input.value=string;
//         }
//         else if(e.target.innerHTML=='Del'){
//             string = string.subset(0 ,strring.length-1);
//             input.value=string;
            
//         }
//         else{
//             string +=e.target.innerHTML;
//             input.value=string;
//         }
//         string += e.target.innerHTML;
//         input.value = string;
//     });
// });

// Assuming `buttons` is a NodeList of button elements and `input` is the input field where the output is displayed
const buttons = document.querySelectorAll('.button'); // Selecting all buttons with class "button"
const input = document.querySelector('#input'); // Selecting the input field with id "input"
let string = ""; // Variable to hold the current input string

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value == 'AC') {
            string = "";
            input.value = string;
        } else if (value == 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});


