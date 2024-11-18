/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import app from "../config/firebase";
import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

interface IUseFetchProps {
  collectionName: string;
  prevent?: boolean;
  refetch?: boolean;
  setRefetch?: (value: boolean) => void;
}

export const useFetch = ({
  collectionName,
  prevent,
  refetch,
  setRefetch,
}: IUseFetchProps) => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const db = getFirestore(app);

  async function getData() {
    if (prevent || (!collectionName && !db)) return;
    try {
      const col = collection(db, collectionName);
      setLoading(true);
      const getColDocs = await getDocs(col);
      const list = getColDocs.docs.map((doc) => doc.data());
      setData(list);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (db && collectionName) getData();

    if (!collectionName)
      console.error("Please input the collection name on your useDB");
  }, [db, collectionName]);

  useEffect(() => {
    if (refetch) {
      getData();
      setRefetch?.(false);
    }
  }, [refetch]);

  return {
    data,
    loading,
  };
};
