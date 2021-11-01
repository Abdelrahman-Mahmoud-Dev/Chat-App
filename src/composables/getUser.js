// to listen for authendication state changes in our application so when user is logged in or logged out there changes in authentication state Firebase will let us know

import { ref } from "vue";
import { projectAuth } from "@/firebase/config.js";
const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUserName = () => {
  return { user };
};
export default getUserName;
