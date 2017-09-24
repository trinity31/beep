import { User } from "../../models/users/user.interface";

const userList: User[] = [
  {
    firstName: "Paul",
    lastName: "Holiday",
    email: "paul@paul.com",
    avatar: "assets/img/avatar.png"
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    avatar: "assets/img/avatar.png"
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    email: "sarah@smith.com",
    avatar: "assets/img/avatar.png"
  },
  {
    firstName: "Roger",
    lastName: "Raynolds",
    email: "roger@raynolds.com",
    avatar: "assets/img/avatar.png"
  }
];

export const USER_LIST = userList;
