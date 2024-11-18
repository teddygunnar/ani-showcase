import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import app from "../config/firebase";

const useFirestoreCollection = ({
  collectionName,
}: {
  collectionName: string;
}) => {
  const db = getFirestore(app);
  const [value, loading, error, reload] = useCollectionDataOnce(
    collection(db, collectionName)
  );

  return {
    data: value,
    loading,
    error,
    reload,
  };
};

export default useFirestoreCollection;
