// script.js

// 1) Обязательно определяем TrieNode *до* использования
class TrieNode {
  constructor() {
    this.children = {}; // ключ: символ, значение: TrieNode
    this.endOfWord = false;
  }
}

// 2) Теперь можно безопасно объявить Trie
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.endOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.endOfWord;
  }

  // Доп. метод: проверка префикса
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

// 3) Пример использования / тесты
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");

console.log("search cat ->", trie.search("cat")); // true
console.log("search car ->", trie.search("car")); // true
console.log("search ca  ->", trie.search("ca")); // false (это префикс, но не слово)
console.log("startsWith ca->", trie.startsWith("ca")); // true
console.log("search cow ->", trie.search("cow")); // false
