// an autocomplete feature working
class TrieNode {
  children;
  constructor() {
    this.children = {};
  }
}

class Trie {
  root;
  constructor() {
    this.root = new TrieNode();
  }

  search(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return null;
      }
    }
    return currentNode;
  }

  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        let newNode = new TrieNode();
        currentNode.children[char] = newNode;
        currentNode = newNode;
      }
    }
    currentNode.children['*'] = null;
  }

  collectAllWords(node, word = '', words = []) {
    let currentNode = node || this.root;
    for (let key of Object.keys(currentNode.children)) {
      if (key === '*') {
        words.push(word);
      } else {
        let childNode = currentNode.children[key];
        this.collectAllWords(childNode, word + key, words);
      }
    }
    return words;
  }

  autoComplete(prefix) {
    let currentNode = this.search(prefix);
    if (!currentNode) {
      return null;
    }
    return this.collectAllWords(currentNode);
  }

  *[Symbol.iterator]() {
    console.log(Object.entries(this.root.children));
    const stack = [{ node: this.root, prefix: '' }];

    while (stack.length > 0) {
      let item = stack.pop();
      if (!item) return;
      let { node, prefix } = item;
      if (!node) break;
      for (const [key, childNode] of Object.entries(node.children)) {
        const newPrefix = prefix + key;
        yield newPrefix;
        stack.push({ node: childNode, prefix: newPrefix });
      }
    }
  }

  printAllKey(node = this.root) {
    let currentNode = node;
    for (let key of Object.keys(currentNode.children)) {
      console.log(key);
      if (key !== '*') {
        this.printAllKey(currentNode.children[key]);
      }
    }
  }
}

const trie = new Trie();
trie.insert('cat'); // suggestion
trie.insert('can'); // suggestion
trie.insert('cannon'); // suggestion
console.log(trie.autoComplete('c'));
console.log(trie.collectAllWords());

console.log(JSON.stringify(trie.root, null, 2));
// trie.printAllKey();

for (let val of trie) {
  console.log(val);
}
