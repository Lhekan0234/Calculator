const keys = document.querySelectorAll(".keys");
const display_input = document.querySelectorAll(".display .input");
const display_output = document.querySelectorAll(".display .output");

let input = "";

for (let key of keys){
    const value = key.dataset.key;
    
    key.addEventListener('click', () => {
        if (value == "clear"){
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
         }else if (value == "backspace") {
            input = input.slice (0, -1);
            display_input.innerHTML = input;
        } else if (value == "=") {
            let result = eval(inputs);

            display_output.innerHTML = result;
        } else if (value == "brackets") {
           if 
           (
            input.indexOf ("(") == -1 ||
            input.indexOf ("(") != -1 && 
            input.indexOf(")") != -1  &&
            input.lastIndexOf("(") < input.lastIndexOf(")")
             ) {
            input += "(";
           }  else if (
           input.indexOf("(") != -1 &&
           input.indexOf(")") == -1 ||
           input.indexOf("(") != -1 &&
           input.lastIndexOf("(")> input.lastIndexOf(")")
            ) {
            input += ")";
           }

           display_input.innerHTML = input;
        } else {
            input +=value;
            display_input.innerHTML = input;
        }
    })
}