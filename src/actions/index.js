export const NAMECHANGE = 'NAMECHANGE';
export const PASSWORDCHANGE = 'PASSWORDCHANGE';
export const ACCOUNTTYPECHANGE = 'ACCOUNTTYPECHANGE';
export const IDCHANGE = 'IDCHANGE';
export const AMOUNT = 'AMOUNT';
export const ONSUBMITACTION = 'ONSUBMITACTION';
export const OTHERACOUNT = 'OTHERACOUNT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const WITHDRAW = 'WITHDRAW';
export const DEPOSIT = 'DEPOSIT';

export function nameChange(name) {
    const action = {
        type:NAMECHANGE,
        nametxt :name
    }
    return action;
}


export function passwordChange(pass) {
    const action = {
        type:PASSWORDCHANGE,
        password :pass
    }
    return action;
}

export function acountChange(type) {
    const action = {
        type:ACCOUNTTYPECHANGE,
        accounttype :type
    }
    return action;
}

export function idChange(ids) {
    const action = {
        type:IDCHANGE,
        id :ids
    }
    return action;
}


export function amountChange(amounts) {
    const action = {
        type:AMOUNT,
        amount :amounts
    }
    return action;
}


export function onsubmitaction(e) {
    const action = {
        type:ONSUBMITACTION,
        event:e
    }
    return action;
}

export function otherAcount() {
    const action = {
        type:OTHERACOUNT
       
    }
    return action;
}

export function login(e) {
    const action = {
        type:LOGIN,
        event:e
       
    }
    return action;
}

export function logout() {
    const action = {
        type:LOGOUT
       
    }
    return action;
}

export function withDraw(e) {
    const action = {
        type:WITHDRAW,
        event:e
       
    }
    return action;
}

export function depositaction(e) {
    const action = {
        type:DEPOSIT,
        event:e
       
    }
    return action;
}
