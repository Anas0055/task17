// 
// Initial guest list
var guests = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank'];
// Printing the original set of invitations
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Informing about the limited space
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Removing guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
// Printing invitations for the remaining guests
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
// Emptying the list
guests.splice(0, guests.length);
// Printing to ensure an empty list
console.log("Final guest list: ".concat(guests));
