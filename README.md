In your package.json, add:

```js
"export": "next build && next export"
```

Generate static HTML files with

```bash
npm run export
```

which will put all generated files in the `/out` directory.

### Statically generate routes with variable params

https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

#### exportTrailingSlash

https://nextjs.org/docs/api-reference/next.config.js/trailing-slash

Create file `next.config.js` and add:

```js
module.exports = {
  exportTrailingSlash: true,
};
```


