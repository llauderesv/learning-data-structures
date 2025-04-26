function printEveryOther(low, high) {
  if (low > high) { // Base Case
    return;
  } else {
    console.log(low);
    printEveryOther(low + 2, high);
  }
}

printEveryOther(0, 10);
