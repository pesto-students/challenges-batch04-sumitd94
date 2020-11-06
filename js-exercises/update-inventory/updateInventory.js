function updateInventory(currentInventory, freshInventory) {
  if (!Array.isArray(currentInventory)) {
    throw new Error(
      `Expected first arguement to be Array, Received ${typeof currentInventory}`,
    );
  }

  if (!Array.isArray(freshInventory)) {
    throw new Error(
      `Expected second arguement to be Array, Received ${typeof freshInventory}`,
    );
  }

  const updatedInventory = [];
  const currentInventoryObj = Object.fromEntries(
    currentInventory.map(([quantity, itemName]) => [
      itemName,
      parseInt(quantity, 10),
    ]),
  );

  const freshInventoryObj = Object.fromEntries(
    freshInventory.map(([quantity, itemName]) => [itemName, parseInt(quantity, 10)]),
  );

  for (const itemName in freshInventoryObj) {
    if (currentInventoryObj[itemName]) {
      currentInventoryObj[itemName] += freshInventoryObj[itemName];
    } else {
      currentInventoryObj[itemName] = freshInventoryObj[itemName];
    }
  }

  const sortedKeys = Object.keys(currentInventoryObj).sort();
  sortedKeys.forEach((key) => updatedInventory.push([currentInventoryObj[key], key]));

  return updatedInventory;
}

export { updateInventory };
