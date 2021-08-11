import { Card, Column } from '../interface/Column';

const column1: Card[] = [
  {
    _id: 'christy',
    name: 'Essay on the environment',
    colorCode: 'green',
    deadline: 'July 12',
  },
];

const column2: Card[] = [
  {
    _id: 'lisa',
    name: 'Midterm exam',
    colorCode: 'red',
    deadline: 'March 10',
  },
  {
    _id: 'john',
    name: 'Practice exam',
    colorCode: 'red',
  },
];

const column3: Card[] = [
  {
    _id: 'gammy',
    name: 'Homework',
    colorCode: 'red',
  },
];

const column4: Card[] = [
  {
    _id: 'judith',
    name: 'Workshop',
    colorCode: 'yellow',
  },
  {
    _id: 'ferguson',
    name: 'Practice exam',
    colorCode: 'red',
  },
  {
    _id: 'pauly',
    name: 'Research',
    colorCode: 'green',
    deadline: 'May 30',
  },
];
export const columns: Column[] = [
  { cards: column1, _id: 'column1', name: 'Philosophy' },
  { cards: column2, _id: 'column2', name: 'Math' },
  { cards: column3, _id: 'column3', name: 'In Progress' },
  { cards: column4, _id: 'column4', name: 'Completed' },
];
