type Profile = {
  id: number;
  name: string;
}

type Char = {
  nickname: string;
  level: number;
}

type PlayerInfo = Profile & Char

let p1info: PlayerInfo = {
  id: 1,
  name: 'joao',
  nickname: 'kali',
  level: 0
}

//ou

// type Profile = {
//   id: number;
//   name: string;
// }


// type PlayerInfo = Profile & {
//   nickname: string;
//   level: number;
// }

// let p1info: PlayerInfo = {
//   id: 1,
//   name: 'joao',
//   nickname: 'kali',
//   level: 0
// }