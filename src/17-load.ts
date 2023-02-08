import _ from 'lodash';

const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 35 },
  { name: 'Jack', age: 35 },
];

const result = _.groupBy(data, (item) => item.age);

console.log(result);
