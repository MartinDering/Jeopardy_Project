// async function getUsers() {
//   const res = await axios.get("https://reqres.in/api/users");
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post("https://reqres.in/api/users", {
//     username: "buttersthechicke",
//     email: "Butters@gmail.com",
//     age: 5,
//   });
//   console.log(res);
// }
// createUser();

// async function getUsers() {
//   const res = await axios.get('https://reqres.in/api/users');
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post('https://reqres.in/api/users', { username: 'ButtersTheChicken', email: "butters@gmail.com", age: 1 });
//   console.log(res);
// }

// createUser();

async function getUsers(token) {
  const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {
    params: { token },
  });
  console.log(res);
}
async function createUser(username, password, name) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/signup",
    { user: { name, username, password } }
  );
  console.log(res);
}
async function logIn(username, password) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/login",
    { user: { username, password } }
  );
  console.log(res);
  return res.data.token;
}
async function getUsersAuth() {
  const token = await logIn("Thicksuckers", "asdflkj");
  getUsers(token);
}
getUsersAuth();
// getUsers();

async function createStory() {
  const token = await logIn("Thicksuckers", "asdflkj");
  const newStory = {
    token,
    story: {
      author: "Butters",
      title: "Bock Bock bock",
      url: "https://chickens4lyfe.com",
    },
  };
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/stories",
    newStory
  );
  console.log(res);
}

createStory();
// async function getUsers(token) {
//   const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', { params: { token } });
//   console.log(res);
// }

// async function signUp(username, password, name) {
//   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } })
//   console.log(res);
// }

// async function login(username, password) {
//   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { username, password } })
//   console.log(res);
//   return res.data.token;
// }
// // getUsers();
// // signUp('butterschicken', '238197sadhj', 'butters the chicken')

// async function getUsersWithAuth() {
//   const token = await login('butterschicken', '238197sadhj');
//   getUsers(token);
// }

// async function createStory() {
//   const token = await login('butterschicken', '238197sadhj');
//   const newStory = {
//     token,
//     story: {
//       author: 'Butters',
//       title: 'BOCK BOCK BOCK',
//       url: 'http://chickens4lyfe.com'
//     }
//   }
//   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
//   console.log(res);
// }

// // getUsersWithAuth();
// createStory();
