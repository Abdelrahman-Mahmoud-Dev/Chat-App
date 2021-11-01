import { ref, watchEffect } from "vue";

import { projectFirebase } from "@/firebase/config";
import { formatDistanceToNow } from "date-fns";
const getCollection = (collectionName) => {
  const docs = ref(null);
  const error = ref(null);

  const collectionRef = projectFirebase
    .collection(collectionName)
    .orderBy("createdAt");

  const unSubscribe = collectionRef.onSnapshot(
    (snap) => {
      console.log("snap");
      let data = [];
      snap.docs.forEach((doc) => {
        let createdAt =
          doc.data().createdAt &&
          formatDistanceToNow(doc.data().createdAt.toDate());

        doc.data().createdAt && data.push({ ...doc.data(), createdAt });
      });

      docs.value = data;
      error.value = null;
    },
    // call back function to catch errors that come from snapshot listener
    (err) => {
      docs.value = null;
      console.log(err);
      error.value = err.message;
    }
  );
  // onInvalidate is a function that unsubscribes from the collection
  // oninvalid is called when the component is unmounted
  // we tell watch effect to avoid calling the function when the component is unmounted by passing a function
  watchEffect((onInvalidate) => {
    console.log("from inside watch Effect");
    onInvalidate(() => {
      unSubscribe();
      console.log("from inside watch Effect onInvalidate");
    });
  });
  return {
    docs,
    error,
  };
};
export default getCollection;
