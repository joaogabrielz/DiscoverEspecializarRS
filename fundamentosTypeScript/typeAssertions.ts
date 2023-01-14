// como se fosse uma conversao de algo que nao tem tipo em um tipo
// usado ao consumir uma API por exemplo

// Assertion
type UserResponse = {
  ui: number,
  name: string,
  avatar: string
};

let userResponse = {} as UserResponse;
userResponse.avatar;
userResponse.name;