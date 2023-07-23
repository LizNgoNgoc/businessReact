function Validation(validationELement) {
   if(validationELement.name === 'name') {
    return ValidationName()
   } else if(validationELement.name === 'mail'){
    return ValidationEmail()
   } else {
    return ValidationString()
   }
}

function ValidationEmail(){

}
function ValidationName(){

}
function ValidationString(){

}

export {Validation}