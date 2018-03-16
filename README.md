# Getting started

```shell
npm install
# download dependencies

COLOR=tomato npm run build
# set process.env.COLOR to "tomato"
# run webpack

open index.html
# open the webpage
```

# How to reference environment variables in .less files?

The [`less-loader`](https://github.com/webpack-contrib/less-loader) compiles `Less` to `CSS`.

```js
// webpack.config.js

module: {
  rules: [
    {
      test: /\.less$/,
      use: "less-loader"
    }
  ];
}
```

We can pass `Less` specific options to the `less-loader` via `loader` options.

```diff
// webpack.config.js

module: {
  rules: [
    {
      test: /\.less$/,
---   use: "less-loader",
+++   use: {
+++     loader: "less-loader",
+++     options: {}
+++   }
    }
  ];
}
```

We will use the `globalVars` option, which defines a variables that can be referenced by our Less file ([see docs here](http://lesscss.org/usage/#less-options-global-variables)).

```diff
// webpack.config.js

module: {
  rules: [
    {
      test: /\.less$/,
      use: {
        loader: "less-loader",
---     options: {}
+++     options: {
+++         globalVars: {
+++             COLOR: process.env.COLOR
+++         }
+++     }
      }
    }
  ];
}
```

And we make reference to the `COLOR` variable like so:

```less
// styles.less

body {
  background-color: $COLOR;
}
```
