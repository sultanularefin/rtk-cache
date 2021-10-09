import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
} from './counterSlice';

/*

yarn test==>


```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```


*/

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {

    const actual = counterReducer(undefined, { type: 'unknown' });


    console.log("..... [should handle initial state][actual]", actual);


    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());

    console.log("actual.value[should handle increment]",actual.value);
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    console.log("actual.value [should handle decrement]",actual.value);
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    console.log("actual.value [should handle incrementByAmount]",actual.value);
    expect(actual.value).toEqual(5);
  });


  /**
   * Creates a test closure.
   *
   * @param name The name of your test
   * @param fn The function for your test
   * @param timeout The timeout for an async function test
   */

  // (name: string, fn?: ProvidesCallback, timeout?: number): void;
});
