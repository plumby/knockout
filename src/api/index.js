

const users={};


export const login = (user) => {
  return new Promise((resolve) => {
    // console.log(`Logging in ${user.name}`);
    setTimeout(() => {
      resolve(true);
      return users[user.name];
      // console.log('Logged in');
    }, 2000);
  });
}

export const register = (user) => {
  return new Promise((resolve) => {
    // console.log(`Logging in ${user.name}`);
    setTimeout(() => {
      users[user.name]=user;
      resolve(true);
      //console.log('Logged in');
    }, 2000);
  });
}
