import uuid from 'uuid'

const players = [
  {
    id:'1',
    name:'Lorem ipsum dolor sit amet amet.2'
  },
  {
    id:'2',
    name:'Nulla bibendum purus massa nunc.'
  },
  {
    id:'3',
    name:'Fusce a lacinia magna cras amet.'
  },
  {
    id:'4',
    name:'Rhoncus magna.'
  },
  {
    id:'5',
    name:'a'
  }
]



// {
//   '1': {
//     name:'Lorem ipsum dolor sit amet amet.'
//   },
//   '2':{
//     name:'Nulla bibendum purus massa nunc.'
//   },
//   '3':
//   {
//     name:'Fusce a lacinia magna cras amet.'
//   },
//   '4':
//   {
//     name:'Rhoncus magna.'
//   },
//   '5':
//   {
//     name'a'
//   }
// }


const matchingName = (name) => {
  return (player) => {
    return name===player.name
  }
}


export const login = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const player=players.find(matchingName(user.name));

      resolve(player);
    }, 2000);
  });
}


export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}


export const register = (registration) => {
  return new Promise((resolve) => {
    // console.log(`Logging in ${user.name}`);
    setTimeout(() => {
      const id=uuid.v4();
      const user={...registration,id}
      players[id]=user;
      resolve(user);
    }, 2000);
  });
}

export const loadPlayers = () => {
  return new Promise((resolve) => {
    // console.log(`Logging in ${user.name}`);
    setTimeout(() => {
      resolve(players);
    }, 2000);
  });
}
