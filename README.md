<div align="center">
    <h1>runner-z</h1>
    <a href="https://www.npmjs.com/package/runner-z">runner-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/runner-z-7x8slg">LIVE EXAMPLE</a></b>
</div>

---
+ task runner with timeout.

## Installation

install via npm:
```
npm i runner-z
```

## Usage

### Properties

|  Property       |     Data Type        | Default  Value                     | Property Unit |
| :-------------: | :------------------: | :--------------------------------: | :-----------: |
| `fallback`      |   `callback/promise` |    func({ iteration,isLastTime  }) |               |
| `delay`         |   `number`           |    1000                            |      `ms`     |
| `maxIteration`  |   `number`           |    0                               |       -       |


### Guideline

```js
/**
 Props
+ maxIteration
    maxLoop = 0: infinite
    maxLoop > 0: limit
+ delay: default 1000ms
+ fallback: callback or promise
```

```js
/**
********************************
**** update
+ setMaxIteration(maxIteration: number);
+ setDelay(delay: number);
+ setCallback(callback: TPFallback);

********************************
**** execute basic
+ start(): start now
+ stop(): stop now
+ restart()

********************************
**** execute
+ startAfter(): start after delay (props)
+ startAfterTimeout(time: number) start after time
ex:
- delay: 5000
- startAfterTimeout(3000)
=> we can start after 3000ms, then delay repeat 5000ms

********************************
**** get status
+ isRunning(): boolean;
+ getTimes(): number;
*/

```

##### sync function
```js
import { Runner } from 'runner-z';

const runner = new Runner({
    fallback: params => {
      const { iteration } = params;
      console.log(runner.isRunning());
    },
    delay: 5000,
    maxIteration: 3,
  });
runner.start();

```
##### async function
```js
import { Runner } from 'runner-z';

const runner = new Runner({
    fallback: async params => {
      const { iteration } = params;
      const results = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${iteration}`,
      );
      const info = await results.json();
      console.log(info);
      console.log(runner.isRunning());
    },
    delay: 5000,
    maxIteration: 3,
  });

runner.start();

```
### License

MIT
