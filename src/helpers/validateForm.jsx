const regExpName = /^[a-zA-Z0-9\s]{3,}$/;
const regMessage = /^[\s\S]{1,1000}$/;
const regExpPhone = /^\d{10}$/;

export const validateName = (field)=>{
    if(regExpName.test(field)&& field.trim()!== ""){
        return true;
    } else{
        return false;
    }
}

export const validateMessage = (field)=>{
    if(regMessage.test(field)&& field.trim() !== ""){
        return true;
    }else{
        return false
    }
}

export const validatePhone = (field)=>{
    if(regExpPhone.test(field)&& field.trim()!== ""){
        return true;
    }else{
        return false
    }
}