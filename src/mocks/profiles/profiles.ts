import { Profile } from "../../models/profile/profile.interface";

const userList: Profile[] = [
  {
    firstName: "Paul",
    lastName: "Holiday",
    email: "paul@paul.com",
    avatar: "assets/img/avatar.png",
    dateOfBirth: new Date()
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    avatar: "assets/img/avatar.png",
    dateOfBirth: new Date()
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    email: "sarah@smith.com",
    avatar: "assets/img/avatar.png",
    dateOfBirth: new Date()
  },
  {
    firstName: "Roger",
    lastName: "Raynolds",
    email: "roger@raynolds.com",
    avatar: "assets/img/avatar.png",
    dateOfBirth: new Date()
  }
];

export const USER_LIST = userList;
