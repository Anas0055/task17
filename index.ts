// 
// Initial guest list
let guests: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank'];

// Printing the original set of invitations
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Informing about the limited space
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Removing guests until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
    }
}

// Printing invitations for the remaining guests
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// Emptying the list
guests.splice(0, guests.length);

// Printing to ensure an empty list
console.log(`Final guest list: ${guests}`);
