# KendraioImageTagger

[![](https://img.shields.io/npm/v/@kendraio/image-tagger)](https://www.npmjs.com/package/@kendraio/image-tagger)


Kendraio Image Tagger component wrapped as a web component using Angular Elements.
Can be used independently of Angular.

Work in progress, TODO:

 - expose the tag preview component
 - expose default settings (tag size, etc)

## Installation

To install from NPM use: 

```shell script
npm install --save @kendraio/image-tagger
```
    
Or, include the compiled JS directly into your HTML by adding a script tag:

```html
<script src="https://unpkg.com/@kendraio/image-tagger/main-es2015.js" type="module"></script>
```
    
## Usage

Add the component to your HTML markup:

```html
<kendraio-image-tagger src="/assets/example-image.jpg" alt="Example Image"></kendraio-image-tagger>
```

And then listen to the `tagsChanged` event to get the updated list of tags:

```javascript
const tagger = document.querySelector('kendraio-image-tagger');
tagger.addEventListener('tagsChanged', (event) => {
  console.log(`tagsChanged:`, event.detail);
});
```

You can set the default list of tags by setting the `tags` property on the custom element.
