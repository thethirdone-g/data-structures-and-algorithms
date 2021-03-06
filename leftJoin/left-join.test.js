'use strict';

const { HashTable, joinHashmaps } = require('./left-join.js');

let table1 = new HashTable(10);

table1.add('key1', 'value1');
table1.add('key2', 'value2');
table1.add('key3', 'value3');

let table2 = new HashTable(10);
table2.add('key1', 'value4');
table2.add('key2', 'value5');
table2.add('key4', 'value6');

let table3 = new HashTable(10);
table3.add('key5', 'value7');
table3.add('key6', 'value8');
table3.add('key7', 'value9');

describe('Testing joinHashTables function', () => {

  it('should return an array of arrays with keys and values with corresponding keys', () => {
    expect(joinHashmaps(table1, table2)).toEqual([['key3', 'value3', null], ['key1', 'value1', 'value4'], ['key2', 'value2', 'value5']]);
  });

  it('should return an array of arrays with keys and values with no corresponding keys', () => {
    expect(joinHashmaps(table1, table3)).toEqual([['key3', 'value3', null], ['key1', 'value1', null], ['key2', 'value2', null]]);
  });

  it('should return a message to use two hashmaps if only one parameter provided', () => {
    expect(joinHashmaps(table1)).toBe('Need two hashmaps');
  });

});