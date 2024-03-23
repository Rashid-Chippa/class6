#! /user/bin/env  node
let month = "rajab";
console.log(month == "ramadan");
if (month == "ramadan") {
    console.log("no water bottle allowed");
}
if (month == "moharam") {
    console.log("water bottle is allowed");
}
else {
    if (month == "rajab") {
        console.log("water bottle is allowed in rajab");
    }
}
export {};
//else {
// ("why water bottle is not allowed")
//}
