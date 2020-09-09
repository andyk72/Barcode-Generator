Infos
-----

Web barcode generator  

Current limitations:  

- Page layout A4 only supported
- 24 barcodes per page only supported
- No external inputs architecture implemented

Dependencies
------------

https://lindell.me/JsBarcode/  

Config
------

Two parameters can be configured, hardcoding those in app.js:  

- barcodeIdPrefix
- pagesNumber

Run Development
---------------

```
> npm start
```

Build Production
----------------

```
> npm run build
```

Todos
-----

- Same string length for all barcodes
- Add dynamic page layout
- Different barcodesPerPage support
- Different barcode formats (barcodeFormat) support
- Url input pagesNumber support
- Url input barcodeFormat support
- Url input barcodesPerPage support
- Url input barcodeIdPrefix support
- Form input
- Form input Textfield pagesNumber support
- Form input Select barcodeFormat support
- Form input Textfield barcodesPerPage support
- Form input Textfield barcodeIdPrefix support
- Form input generate button