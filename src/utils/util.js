import { allUsers } from "../allUsers";

export function getAvatar(currentUser) {
  var file = null
  if (currentUser == "jane-doe") {
      file = require("./../assets/avatar-3-female.jpg")
  } else if(currentUser == "john-doe") {
      file = require("./../assets/avatar-2-male.jpg")
  } else if (currentUser == "batman-robin") {
      file = require("./../assets/avatar-1-male.jpg")
  } else {
      file = require("./../assets/none.jpg")
  }
  return file;
}




