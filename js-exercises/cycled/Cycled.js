class Cycled {
  constructor(arrayToBeCycled) {
    this.arrayToBeCycled = arrayToBeCycled;
    this.currentIndex = 0;
  }

  current() {
    return this.arrayToBeCycled[this.currentIndex];
  }

  next() {
    if (this.currentIndex === this.arrayToBeCycled.length - 1) {
      this.currentIndex = 0;
      return this.arrayToBeCycled[this.currentIndex];
    }

    this.currentIndex += 1;
    return this.arrayToBeCycled[this.currentIndex];
  }

  get index() {
    return this.currentIndex;
  }

  set index(value) {
    if (this.arrayToBeCycled[value]) {
      this.currentIndex = value;
    }
  }

  previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.arrayToBeCycled.length - 1;
      return this.arrayToBeCycled[this.currentIndex];
    }

    this.currentIndex -= 1;
    return this.arrayToBeCycled[this.currentIndex];
  }

  indexOf(searchValue) {
    return this.arrayToBeCycled.indexOf(searchValue);
  }

  reversed() {
    return {
      reversedArr: [...this.arrayToBeCycled].reverse(),
      index: 0,
      next() {
        const curIndex = this.index;
        if (this.index >= this.reversedArr.length) {
          return { value: this.index, done: true };
        }

        this.index += 1;
        return { value: this.reversedArr[curIndex], done: false };
      },
    };
  }

  [Symbol.iterator]() {
    return {
      arr: this.arrayToBeCycled,
      index: this.currentIndex,
      next() {
        const curIndex = this.index;
        if (curIndex >= this.arr.length) {
          return { value: this.index, done: true };
        }

        this.index += 1;
        return { value: this.arr[curIndex], done: false };
      },
    };
  }

  //   reversed() {
  //     //const reversedArr = this.arrayToBeCycled.reverse();
  //     console.log(this.arrayToBeCycled.reverse());
  //     return new Cycled(this.arrayToBeCycled.reverse());
  //   }
}

export { Cycled };
