# ember-cli-brotli

An ember-cli add-on to compress assets using brotli.

This is a fork of [ember-cli-gzip](https://github.com/gpoitch/ember-cli-gzip).

**Note:** If you use the ember-deploy addon, just use their brotli plugin: https://www.npmjs.com/package/ember-cli-deploy-brotli

**Note:** This addon is only useful for production builds and requires a webserver that can serve precompressed assets, like NGINX with the [ngx\_brotli](https://github.com/google/ngx_brotli) module and `brotli_static` enabled for asset paths.

This is more of a low-level addon for custom deployments.

## Install
```
npm install --save-dev ember-cli-brotli
```

By simply including this add on, js and css assets will automatically be compressed with brotli on production builds.

## Options

For more control, you can define options in your app's Brocfile.js:

```js
var app = new EmberApp({
  brotli: {
    // options
  }
});
```

- **enabled** : (Default `true` in production environment)
- **extensions** : Array of file extentions that should be compressed. (Default `['js', 'css']`)
- **keepUncompressed**: Whether the uncompressed versions of the files should be kept. (Default `false`)
- **appendSuffix**: Whether to append the .br suffix. (Default `true`)
- **XXX**: Where `XXX` comes from [BrotliOptions](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_brotlioptions).

## References
- [broccoli-brotli](https://github.com/myfreeweb/broccoli-brotli)
