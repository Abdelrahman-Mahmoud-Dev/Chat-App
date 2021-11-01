import { ref } from "vue";
import { projectFirebase } from "@/firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async function (messageDetails) {
    error.value = null;
    try {
      await projectFirebase.collection(collection).add({
        ...messageDetails,
      });
    } catch (e) {
      error.value = e.message;
      console.log(error);
    }
  };
  return { addDoc, error };
};

export default useCollection;
