## mediamask-js@1.1.10

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install mediamask-js --save
```

### Usage

```js
import { MediamaskApi, Configuration } from 'mediamask-js';

const api = new MediamaskApi(
  new Configuration({
    accessToken: 'API_TOKEN',
  })
);

api.templates().then((response) => {
  console.log(response.data);
});
```
