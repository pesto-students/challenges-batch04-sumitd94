function accessorProperties() {
  const obj = {
    integer: 0,
    get number() {
      return parseInt(this.integer.toString(2), 10);
    },

    set number(value) {
      this.integer = value;
    },
  };

  return obj;
}

export { accessorProperties };
