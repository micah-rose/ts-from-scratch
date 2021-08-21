// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role {
    ADMIN, READ_ONLY, AUTHOR
}

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 3;

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if(person.role === Role.ADMIN) {
    console.log('is admin');
}

// person.role.push('admin');
// person.role[1] = 10;

//person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}