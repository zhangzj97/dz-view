import { test as BarTest } from './Bar';
import { test as BarSingleTest } from './BarSingle';
import { test as FooTest } from './Foo';

export const testMap = {
  [BarTest.code]: BarTest,
  [BarSingleTest.code]: BarSingleTest,
  [FooTest.code]: FooTest,
};
