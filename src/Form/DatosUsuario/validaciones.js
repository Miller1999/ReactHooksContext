export const ValidarEmail = (email) => {
    const length = email.length
    if(length > 8 && length < 50 && email.includes("@")){
        return true
    }else{
        return false
    }
}

export function ValidarPassword(password){
    const length = password.length
    if(length > 8 && length < 12){
        return true
    }else{
        return false
    }
}