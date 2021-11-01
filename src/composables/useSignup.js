import { ref } from "vue";
import { projectAuth } from "@/firebase/config.js";
const error = ref(null);
const signup = async (email, password, userName) => {
  error.value = null;
  try {
    // try to create a new user with the email and password
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!response) {
      throw new Error("could not complete the signup");
    }
    // if the user is created successfully, then update the user profile
    await response.user.updateProfile({
      displayName: userName,
    });

    error.value = null;
    return response;
  } catch (e) {
    error.value = e.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
