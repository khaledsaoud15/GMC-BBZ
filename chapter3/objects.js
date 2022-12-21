// const dog = {};

// console.log(dog);

// dog.name = "Rex";
// dog.color = "brown";
// dog.age = "6 months";
// dog.legs = "4 legs";
// dog.bark = function () {
//   return "woof woof";
// };

// console.log(dog);

// dog.breed = "bulldog";
// dog.getInfo = function () {
//   return "this dog is " + dog.name + " and he is " + dog.age;
// };

// console.log(dog);
// console.log(dog.getInfo());
// console.log(dog.bark("spike"));

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function getTheHighestSkill(users) {
  let count = 0;
  let username = "";
  let HighestUsers = "";

  for (let user in users) {
    if (users[user].skills.length > count) {
      username = user;
      HighestUsers = users[user];
      count = users[user].skills.length;
    }
  }
  return { count: count, username: username, highestUsers: HighestUsers };
}

console.log(getTheHighestSkill(users));

function getInfo(users) {
  let clients = [];
  let HighestUsers = [];

  for (let user in users) {
    if (users[user].isLoggedIn === true && users[user].points >= 50) {
      clients.push(user);
      HighestUsers.push(users[user]);
    }
  }
  return { users: clients.join(" "), user: HighestUsers };
}

console.log(getInfo(users));

function GetMern(users) {
  let mernStack = [];
  for (let user in users) {
    if (
      users[user].skills.includes("MongoDB") &&
      users[user].skills.includes("Express") &&
      users[user].skills.includes("Node") &&
      users[user].skills.includes("React")
    ) {
      mernStack.push(users[user]);
    }
  }
  return mernStack;
}

console.log(GetMern(users));

function addUser(users, newUser, name) {
  users[name] = newUser;
  return users;
}

console.log(
  addUser(
    users,
    {
      email: "khaledi@gmail.com",
      skills: ["HTML", "CSS", "JavaScript", "react"],
      age: 20,
      isLoggedIn: false,
      points: 100,
    },
    "khaled"
  )
);
console.log(users);
