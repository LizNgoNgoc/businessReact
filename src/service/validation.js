function Validation(validationELement) {

   return validationELement.name === 'name' ? ValidationName(validationELement.value) 
      : validationELement.name === 'mail' ? ValidationEmail(validationELement.value) 
      : false
}

function ValidationEmail(validationELement){
   const valid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
   return valid.test(validationELement) ? false : true
}
function ValidationName(validationELement){
   const valid = /^[А-ЯЁ][а-яё]+$/;
   return valid.test(validationELement) ? validationELement.style.borderColor = 'green' : validationELement.style.borderColor = 'red';
}
function ValidationString(){

}

export {Validation}