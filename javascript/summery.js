console.log('I am javascrpit for my file');

const blogs = document.getElementsByTagName('p');
console.log(blogs);

// const friend = document.getElementsById('Friends');
// console.log(Friends.children);
const friend = document.getElementById('Friends');
// console.log(friend.children);
const fifth = friend.children[4];
console.log(fifth);
friend.removeChild(fifth);

const friends = document.createElement('li');
friends.innerText = 'Friend-11'
friend.appendChild(friends)