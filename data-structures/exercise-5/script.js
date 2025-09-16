// Вариант 1: Реализация search() в Trie

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfWord;
  }
}

// пример
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false

// Вариант 2: Применение Set для поиска общих элементов двух массивов

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const set1 = new Set(arr1);
const common = arr2.filter((num) => set1.has(num));

console.log(common); // [3, 4]
