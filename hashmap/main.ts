export class Hashmap {
  // https://stackoverflow.com/a/7616484
  static hash = (str: string) => {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  };

  arr: Array<Array<{ key: string; value: string }>>;

  constructor() {
    this.arr = [];
  }

  get = (key: string, manuallySetHash?: number) => {
    const hash =
      manuallySetHash === undefined ? Hashmap.hash(key) : manuallySetHash;
    if (this.arr[hash] === undefined) {
      return null;
    }

    const entries = this.arr[hash];
    for (const entry of entries) {
      if (entry.key === key) return entry.value;
    }
    return null;
  };

  set = (key: string, value: string, manuallySetHash?: number) => {
    const hash =
      manuallySetHash === undefined ? Hashmap.hash(key) : manuallySetHash;

    if (this.arr[hash] === undefined) {
      this.arr[hash] = [];
    }
    const foundEntry = this.arr[hash].find((entry) => entry.key === key);
    if (foundEntry) {
      foundEntry.value = value;
    } else {
      this.arr[hash].push({ key, value });
    }
  };

  remove = (key: string, manuallySetHash?: number) => {
    const hash =
      manuallySetHash === undefined ? Hashmap.hash(key) : manuallySetHash;
    if (this.arr[hash] === undefined) return;

    const entries = this.arr[hash];
    const index = entries.findIndex((entry) => entry.key === key);
    if (index === -1) return;

    this.arr[hash] = entries
      .slice(0, index)
      .concat(entries.slice(index + 1, entries.length));
  };

  print = () => {
    console.log(this.arr);
  };
}
