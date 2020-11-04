import { map, filter, invert, merge, all, some } from './objectUtils';

describe('Testing Map', () => {
  test('This should return a object as per the logic on the function', () => {
    const obj = {
      chocolates: 5,
      drinks: 10,
      beer: 5,
    };

    const callbackFN = ([key, value]) => [key.toUpperCase(), value * 2];
    let modifiedObj = map(obj, callbackFN);
    expect(modifiedObj).toEqual({ CHOCOLATES: 10, DRINKS: 20, BEER: 10 });

    const filterCBFunc = ([key, values]) => key === 'chocolates';
    modifiedObj = filter(obj, filterCBFunc);
    expect(modifiedObj).toEqual({ chocolates: 5 });
  });

  test('This should return object with key values pair inverted', () => {
    const generalObj = {
      name: 'Sumit',
      age: 25,
      foodie: true,
    };

    const invertedObject = invert(generalObj);
    expect(invertedObject).toEqual({
      Sumit: 'name',
      25: 'age',
      true: 'foodie',
    });
  });

  test('This should merge all objects into one', () => {
    const object1 = {
      name1: 'Sumit',
      age1: 25,
      foodie: true,
    };

    const object2 = {
      name2: 'Nikhil',
      age2: 25,
      foodie: true,
    };

    const mergedObj = merge(object1, object2);
    expect(mergedObj).toEqual({
      name1: 'Sumit',
      age1: 25,
      foodie: true,
      name2: 'Nikhil',
      age2: 25,
    });
  });

  test('This will test Object all method', () => {
    const testObject = {
      Person1: {
        name: 'Sumit',
        age: 25,
      },
      Person2: {
        name: 'Nikhil',
        age: 25,
      },
    };
    const allPersonsOfSameAge = ([key, value]) => key && value.age === 25;
    expect(all(testObject, allPersonsOfSameAge)).toBeTruthy();
  });

  test('Test Object some', () => {
    const testObject = {
      Person1: {
        name: 'Sumit',
        age: 25,
      },
      Person2: {
        name: 'Nikhil',
        age: 25,
      },
      Person3: {
        name: 'Rushikesh',
        age: 29,
      },
    };
    const somePersonsOfSameAge = ([key, value]) => key && value.age === 25;
    expect(some(testObject, somePersonsOfSameAge)).toBeTruthy();
  });
});

// write your own test cases
