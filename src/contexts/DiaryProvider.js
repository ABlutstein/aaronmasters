import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const DiaryContext = createContext();
const DiaryProvider = ({ children }) => {
  const [diary, setDiary] = useState([]);

  const findDiary = async () => {
    const result = await AsyncStorage.getItem("diary");
    if (result !== null) setDiary(JSON.parse(result));
  };

  useEffect(() => {
    findDiary();
  }, []);

  return (
    <DiaryContext.Provider value={{ diary, setDiary, findDiary }}>
      {children}
    </DiaryContext.Provider>
  );
};

export const useDiary = () => useContext(DiaryContext);

export default DiaryProvider;
