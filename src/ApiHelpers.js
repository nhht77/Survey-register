export async function registerCustomer(val){

    return fetch("/users", {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
       body: JSON.stringify({
        firstname: val.firstName,
        lastname: val.lastName,
        email: val.email,
        birthdate: val.birthdate.split("/").reverse().join("-"),
        phone: val.phone,
        streetAddress: val.streetAddress,
        postalCode: val.postalCode,
        type: val.type
        })
      }).then(res => {
         if(!res.ok) {
           if(res.status >=400 && res.status < 500) {
             return res.json().then(data => {
               let err = {errorMessage: data.message};
               throw err;
             })
           } else {
             let err = {errorMessage: 'Please try again later, server is not resonding'};
             throw err;
           }
         }
         return res.json();
      })
}

export async function registerAccount(val){
    return fetch("/accounts", {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
       body: JSON.stringify({
        account: val.username,
        password: val.password,
        })
      }).then(res => {
         if(!res.ok) {
           if(res.status >=400 && res.status < 500) {
             return res.json().then(data => {
               let err = {errorMessage: data.message};
               throw err;
             })
           } else {
             let err = {errorMessage: 'Please try again later, server is not resonding'};
             throw err;
           }
         }
         return res.json();
      })
}