var passwordlengthEl = document.querySelector("#passwordlength");
var symbolsEl = document.querySelector("#symbols");
var numbersEl = document.querySelector("#numbers");
var lowercaseEl = document.querySelector("#lowercase");
var uppercaseEl = document.querySelector("#uppercase");
var similarcharEl = document.querySelector("#similarchar");
var ambiguousEl = document.querySelector("#ambiguous");
var autoEl = document.querySelector("#auto");
var submitformbtn = document.querySelector("#submitform");
var newpasswordEl = document.querySelector("#newpassword");
var validationcommentEl = document.querySelector("#validationcomment");

var symbolchar = ['@', '#', '$', '%', '^', '&', '*','{', '}', '[', ']', '(', ')', '/', '"', '`', '~', ',', ';', ':', '.'];
var numberschar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercasechar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercasechar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var similarchar = ['i','l','1','L','o','0','O'];
var ambiguouschar = ['{', '}', '[', ']', '(', ')', '/', '"', '`', '~', ',', ';', ':', '.'];

autoEl.addEventListener("change", function() {
    if(this.checked) {
        symbolsEl.setAttribute("disabled", "true");
        numbersEl.setAttribute("disabled", "true");
        lowercaseEl.setAttribute("disabled", "true");
        uppercaseEl.setAttribute("disabled", "true");
        similarcharEl.setAttribute("disabled", "true");
        ambiguousEl.setAttribute("disabled", "true");
        passwordlengthEl.setAttribute("disabled", "true");
    }
    if(this.checked === false) {
        symbolsEl.removeAttribute("disabled");
        numbersEl.removeAttribute("disabled");
        lowercaseEl.removeAttribute("disabled");
        uppercaseEl.removeAttribute("disabled");
        similarcharEl.removeAttribute("disabled");
        ambiguousEl.removeAttribute("disabled");
        passwordlengthEl.removeAttribute("disabled");
    }
})

function createnewpassword() {
    event.preventDefault();
    potentialcharacters = [];
    newpassword = [];
    validationcommentEl.textContent = "";
    


    if (autoEl.checked) {
        potentialcharacters = potentialcharacters.concat(symbolchar, numberschar, lowercasechar, uppercasechar);
        passwordlengthEl.value = Math.floor(12 + Math.random()*30);
    }
    else if (passwordlengthEl.value < 8 || passwordlengthEl > 128) {
        validationcommentEl.textContent = "Please choose a password length between 8 and 128 characters";
    }

    else if (autoEl.checked === false && symbolsEl.checked === false && numbersEl.checked === false && lowercaseEl.checked === false && uppercaseEl.checked === false) {
        validationcommentEl.textContent = "Please choose character types to include in your new password";
    }

    else {

        if (symbolsEl.checked) {
            potentialcharacters = potentialcharacters.concat(symbolchar);
        }

        if (numbersEl.checked) {
            potentialcharacters = potentialcharacters.concat(numberschar);
        }

        if (lowercaseEl.checked) {
            potentialcharacters = potentialcharacters.concat(lowercasechar);
        }

        if (uppercaseEl.checked) {
            potentialcharacters = potentialcharacters.concat(uppercasechar);
        }

        if (similarcharEl.checked) {
            for (i = 0; i < similarchar.length; i++) {
                if (potentialcharacters.includes(similarchar[i])) {
                potentialcharacters.splice(potentialcharacters.indexOf(similarchar[i]),1);
                }
                console.log(potentialcharacters);
            }
            
        }

        if (ambiguousEl.checked) {
            for (i = 0; i < ambiguouschar.length; i++) {
                if (potentialcharacters.includes(ambiguouschar[i])) {
                potentialcharacters.splice(potentialcharacters.indexOf(ambiguouschar[i]),1);
                }
            }
        }
    }





    for (i = 0; i < passwordlengthEl.value; i++) {
        
        var charindex = Math.floor(Math.random()* potentialcharacters.length);
        newpassword.push(potentialcharacters[charindex]);
    }

    newpasswordEl.value = newpassword.join('');
}


submitformbtn.addEventListener("click", createnewpassword);

var startpwdgenerator = document.querySelector("#startpwdgenerator");

function showPwdGenerator() {
    document.querySelector("#passwordgenerator").style.display = "block";
    startpwdgenerator.style.display = "none";
    }

startpwdgenerator.addEventListener("click", showPwdGenerator)


