import diaries from "../data/entries";
import { NonSensitiveDiaryEntry, DiaryEntry } from "../types";

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] =>
  diaries.map(({ comment, ...rest }) => rest);

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
};
