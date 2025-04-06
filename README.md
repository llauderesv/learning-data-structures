# Learning Data Structures

This project is a collection of implementations of various data structures and algorithms in JavaScript. It is designed to help you understand and practice fundamental concepts in computer science, including searching, sorting, and working with different types of data structures.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Data Structures](#data-structures)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Linked List](#linked-list)
  - [Doubly Linked List](#doubly-linked-list)
  - [Set Operations](#set-operations)
- [Algorithms](#algorithms)
  - [Searching Algorithms](#searching-algorithms)
  - [Sorting Algorithms](#sorting-algorithms)
  - [Other Utilities](#other-utilities)
- [How to Run](#how-to-run)
- [License](#license)

## Introduction

This repository contains JavaScript implementations of common data structures and algorithms. It is intended for educational purposes and can be used as a reference for learning or practicing coding.

## Project Structure

The project is organized as follows:

### Key Files and Directories

- **Data Structures**: `stack.js`, `queue.js`, `linked-list.js`, `doubly-linked-list.js`, `set.js`
- **Searching Algorithms**: `binary-search.js`, `binary-search2.js`, `binary-search3.js`, `linear-search.js`
- **Sorting Algorithms**: `sorting/`
- **Utilities**: `median.js`, `notes.txt`

## Data Structures

### Stack

A stack is a Last-In-First-Out (LIFO) data structure. The implementation in [`stack.js`](stack.js) includes methods for:

- `push`: Add an element to the stack.
- `pop`: Remove the top element from the stack.
- `isEmpty`: Check if the stack is empty.

### Queue

A queue is a First-In-First-Out (FIFO) data structure. The implementation in [`queue.js`](queue.js) includes methods for:

- `enqueue`: Add an element to the queue.
- `dequeue`: Remove an element from the queue.

### Linked List

A singly linked list is implemented in [`linked-list.js`](linked-list.js). It includes methods for:

- Adding a node.
- Searching for a node.
- Deleting a node.
- Printing the list.

### Doubly Linked List

A doubly linked list is implemented in [`doubly-linked-list.js`](doubly-linked-list.js). It includes methods for:

- Prepending a node.
- Inserting a node.
- Searching for a node.
- Printing the list in forward order.

### Set Operations

Set operations are implemented in [`set.js`](set.js), including:

- `union`: Combine two sets.
- `intersect`: Find the common elements between two sets.

## Algorithms

### Searching Algorithms

- **Binary Search**: Implemented in [`binary-search.js`](binary-search.js), [`binary-search2.js`](binary-search2.js), and [`binary-search3.js`](binary-search3.js).
- **Linear Search**: Implemented in [`linear-search.js`](linear-search.js).

### Sorting Algorithms

- **Bubble Sort**: Implemented in [`sorting/bubble-sort.js`](sorting/bubble-sort.js).
- **Insertion Sort**: Implemented in [`sorting/insertion-sort.js`](sorting/insertion-sort.js).
- **Selection Sort**: Implemented in [`sorting/selection-sort.js`](sorting/selection-sort.js).
- **Sort By**: A utility for custom sorting, implemented in [`sorting/sort-by.js`](sorting/sort-by.js).

### Other Utilities

- **Median Calculation**: Implemented in [`median.js`](median.js).

## How to Run

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd data-structures

1. Install dependencies (if any):

  ```sh
  npm install
  ```

1. Run individual files using Node.js. For example:

  ```sh
  node stack.js
  ```
