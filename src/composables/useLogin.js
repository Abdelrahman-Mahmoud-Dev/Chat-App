import { ref } from "vue";
import { projectAuth } from "@/firebase/config.js";
const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    if (!response) {
      throw Error("incorrect login credentials");
    }
    error.value = null;
    console.log(response);
    return response;
  } catch (e) {
    error.value = e.message;
  }
};
const useLogin = () => {
  return { error, login };
};
export default useLogin;
