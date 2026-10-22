const accountId = 144553
let accountEmail = "abc123@gmail.com"
var  accountPassword = "1234"
accountCity = "Jaipur"

// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "12224"
accountCity = "/BANGLURU"

console.log(accountId);
let accountState;
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountState]);