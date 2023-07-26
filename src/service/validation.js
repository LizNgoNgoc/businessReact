function Validation(validationELement) {
   if(validationELement.name === 'name') {
    return ValidationName()
   } else if(validationELement.name === 'mail'){
    return ValidationEmail()
   } else {
    return ValidationString()
   }
}

function ValidationEmail(validationELement){
   const valid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
   return valid.test(String(validationELement).toLowerCase());
}
function ValidationName(validationELement){
   const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
    return re.test(validationELement);
}
function ValidationString(){

}

export {Validation}