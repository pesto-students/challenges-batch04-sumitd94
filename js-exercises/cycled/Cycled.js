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

  //   reversed() {
  //     //const reversedArr = this.arrayToBeCycled.reverse();
  //     console.log(this.arrayToBeCycled.reverse());
  //     return new Cycled(this.arrayToBeCycled.reverse());
  //   }
}

export { Cycled };
