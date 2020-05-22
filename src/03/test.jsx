import shallowEqual from 'shallow-equal';

const obj = { name: 'park' };
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name: 'park' }];

mylist === list1; //false.

shallowEqual(mylist, list1); //true.

shallowEqual(list1, list2); //false.
