const emailAddy = [];

customers.customers.forEach(cust => {
    const emailAddress = cust.contacts.email;
    const pushEmail = emailAddress.map(function (emails) {
        emailAddy.push(emails);
        return emailAddy;
    })
});

console.log(emailAddy);
