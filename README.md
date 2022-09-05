# mediamask-js

Mediamask - JavaScript client for the mediamask POST API

- API version: 1.0.5
- Package version: 1.0.9
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mediamask-js --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your mediamask-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import Mediamask from 'mediamask-js';

var defaultClient = Mediamask.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new Mediamask.MediamaskApi()
var newImage = {"template":"3fa85f64-5717-4562-b3fc-2c963f66afa6","dynamic_layers":[{"name":"text placeholder name","text":"an example text"},{"name":"image placeholder name","image":"https://example.com/example.jpg"}]}; // {NewImage} Provide the template and placeholders values that should be rendered in the image
api.html(newImage).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://mediamask.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Mediamask.MediamaskApi* | [**html**](docs/MediamaskApi.md#html) | **POST** /html | Render HTML for a template with dynamic layer values
*Mediamask.MediamaskApi* | [**renderImage**](docs/MediamaskApi.md#renderImage) | **POST** /image | Render a new image
*Mediamask.MediamaskApi* | [**templates**](docs/MediamaskApi.md#templates) | **GET** /templates | Get all tempaltes


## Documentation for Models

 - [Mediamask.DynamicLayer](docs/DynamicLayer.md)
 - [Mediamask.Error](docs/Error.md)
 - [Mediamask.ImagePlaceholder](docs/ImagePlaceholder.md)
 - [Mediamask.NewImage](docs/NewImage.md)
 - [Mediamask.NewImageDynamicLayersInner](docs/NewImageDynamicLayersInner.md)
 - [Mediamask.Template](docs/Template.md)
 - [Mediamask.Templates200Response](docs/Templates200Response.md)
 - [Mediamask.TextPlaceholder](docs/TextPlaceholder.md)
 - [Mediamask.ValidationError](docs/ValidationError.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication

