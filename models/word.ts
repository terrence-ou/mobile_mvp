class WordOrigin {
  language: string;
  meaning: string;
  constructor(data: any) {
    this.language = data.language || "";
    this.meaning = data.meaning || "";
  }
}

class WordDefinition {
  partOfSpeech: string;
  meaning: string;
  examples: string[];

  constructor(data: any) {
    this.partOfSpeech = data.part_of_speech || "";
    this.meaning = data.meaning || "";
    this.examples = data.examples || [];
  }
}

class WordTenses {
  present: string;
  past: string;
  continuous: string;
  future: string;

  constructor(data: any) {
    this.present = data.present || "";
    this.past = data.past || "";
    this.continuous = data.continuous || "";
    this.future = data.future || "";
  }
}

class Word {
  word: string;
  origin: WordOrigin;
  pronunciation: string;
  definitions: WordDefinition[];
  tenses: WordTenses;
  synonyms: string[];
  antonyms: string[];
  relatedTerms: string[];

  constructor(data: any) {
    this.word = data.word || "";
    this.origin = new WordOrigin(data.origin);
    this.pronunciation = data.pronunciation || "";
    this.definitions = (data.definitions || []).map(
      (definition: any) => new WordDefinition(definition)
    );
    this.tenses = new WordTenses(data.tenses);
    this.synonyms = data.synonyms || [];
    this.antonyms = data.antonyms || [];
    this.relatedTerms = data.related_terms || [];
  }
}

export { Word, WordOrigin, WordDefinition, WordTenses };
