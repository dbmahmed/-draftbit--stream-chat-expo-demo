import AsyncStorage from "@react-native-async-storage/async-storage";
export const getItem = async (key, defaultValue) => {
  const value = await AsyncStorage.getItem(key);
  if (!value) return defaultValue;
  return JSON.parse(value);
};
export const removeItem = async (key) => {
  await AsyncStorage.removeItem(key);
};
export const setItem = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};
