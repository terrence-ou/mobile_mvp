// import { atomWithStorage, createJSONStorage } from "jotai/utils";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { SessionStorage, WordsStorage } from "@/models/storage";
// import { DATA_KEY } from "@/constants/storageKeys";
// import { mockWordList, mockWord } from "@/constants/mockData";
// import { Word } from "@/models/word";

// const storage = createJSONStorage<WordsStorage>(() => AsyncStorage);
// const initVal = {
//   words: [...mockWordList.words, mockWord].map((word) => new Word(word)),
// };
// export const wordsDataAtom = atomWithStorage<WordsStorage>(DATA_KEY, initVal, storage);
