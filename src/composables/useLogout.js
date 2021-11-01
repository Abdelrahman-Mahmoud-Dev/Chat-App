import { ref } from "vue";
import { projectAuth } from "@/firebase/config.js";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    const response = await projectAuth.signOut();
    console.log(response);
  } catch (e) {
    console.log(e.message);
    error.value = e.message;
  }
};
const useLogout = () => {
  return { error, logout };
};
export default useLogout;
