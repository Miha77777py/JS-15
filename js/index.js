const users = [ 
    { 
        name:"Ivan", 
        friends:['Misha',"David",'Bob'], 
        skills:['JavaScript',"Java","CSS","HTML"], 
        balance:4500, 
    }, 
    { 
        name:"Misha", 
        friends:['Ivan',"David",'Tom'], 
        skills:['JavaScript',"Python","React","HTML","Rust"], 
        balance:1000, 
    }, 
    { 
        name:"David", 
        friends:['Misha',"Ivan",'John',"Luke"], 
        skills:['JavaScript',"C++","SASS","HTML","jQuery"], 
        balance:3100, 
    }, 
    { 
        name:"Bob", 
        friends:['Ivan',"Tom",'Thomas'], 
        skills:['JavaScript',"Java","CSS","HTML","PHP","Angular"], 
        balance:43500, 
    }, 
    { 
        name:"Thanos", 
        friends:['Thomas',"Ludwig",'Novak'], 
        skills:['JavaScript',"Python","C","Go"], 
        balance:3000000000, 
    }, 
];

const getTotalBalance = arr => arr.reduce((acc, el) => acc + el.balance, 0);

console.log(getTotalBalance(users));

const getNamesByFriend = (arr, friend) => 
    arr.filter(({friends}) => friends.includes(friend)).map(el => el.name);

console.log(getNamesByFriend(users, "Ivan"));

const getNamesByFriendsCount = arr => 
    arr.sort((a, b) => a.friends.length + b.friends.length).map(el => el.name);

console.log(getNamesByFriendsCount(users));

const getAllSkills = arr => 
    arr.map(el => el.skills)
        .flat(Infinity)
        .filter((el, index) => arr.map(el => el.skills).flat(Infinity).indexOf(el) === index)
        .sort((a, b) => a.localeCompare(b));

console.log(getAllSkills(users));