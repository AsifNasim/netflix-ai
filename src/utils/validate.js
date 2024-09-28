export const validateData = (name, email, password) => {
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(name === ''){
        return 'Name cannot be empty';
    }

    if(!isEmailValid){
        return "Email is invalid";
    }

    if(!isPasswordValid){
        return "Password is invalid";
    }

    return null;


}