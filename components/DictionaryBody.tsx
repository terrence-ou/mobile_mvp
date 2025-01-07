import { View, StyleSheet, TextInput } from "react-native";
import WordSlider from "@/components/WordSlider";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
// import { wordsDataAtom } from "@/atoms/wordAtom";
import { generateWords } from "@/apis/generate";
import { Word } from "@/models/word";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATA_KEY, SESSION_KEY } from "@/constants/storageKeys";
import { mockWord } from "@/constants/mockData";

export default function DictionaryBody() {
  const [wordsData, setWordsData] = useState<Word[]>([]);
  const [text, setText] = useState<string>("");
  const handleSetText = (text: string) => {
    setText(text);
  };

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await AsyncStorage.getItem(DATA_KEY);
      if (!data) {
        setWordsData([new Word(mockWord)]);
        await AsyncStorage.setItem(DATA_KEY, JSON.stringify({ words: [mockWord] }));
      } else {
        const { words } = JSON.parse(data);
        setWordsData(words.map((word: Word) => new Word(word)));
      }
    };
    getDataFromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text ?? ""}
        onChange={({ nativeEvent }) => {
          handleSetText(nativeEvent.text);
        }}
        onEndEditing={async () => {
          const words = await generateWords(text);
          await AsyncStorage.setItem(DATA_KEY, JSON.stringify({ words }));
          setWordsData(words.map((word: Word) => new Word(word)));
        }}
      />
      <WordSlider words={wordsData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderBottomWidth: 1,
  },
});
