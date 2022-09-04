# Mediamask.MediamaskApi

All URIs are relative to *https://mediamask.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**html**](MediamaskApi.md#html) | **POST** /html | Render HTML for a template with dynamic layer values
[**renderImage**](MediamaskApi.md#renderImage) | **POST** /image | Render a new image
[**templates**](MediamaskApi.md#templates) | **GET** /templates | Get all tempaltes



## html

> String html(newImage)

Render HTML for a template with dynamic layer values

### Example

```javascript
import Mediamask from 'mediamask-js';
let defaultClient = Mediamask.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Mediamask.MediamaskApi();
let newImage = {"template":"3fa85f64-5717-4562-b3fc-2c963f66afa6","dynamic_layers":[{"name":"text placeholder name","text":"an example text"},{"name":"image placeholder name","image":"https://example.com/example.jpg"}]}; // NewImage | Provide the template and placeholders values that should be rendered in the image
apiInstance.html(newImage, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newImage** | [**NewImage**](NewImage.md)| Provide the template and placeholders values that should be rendered in the image | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/html, application/json


## renderImage

> File renderImage(newImage)

Render a new image

### Example

```javascript
import Mediamask from 'mediamask-js';
let defaultClient = Mediamask.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Mediamask.MediamaskApi();
let newImage = {"template":"3fa85f64-5717-4562-b3fc-2c963f66afa6","dynamic_layers":[{"name":"text placeholder name","text":"an example text"},{"name":"image placeholder name","image":"https://example.com/example.jpg"}]}; // NewImage | Provide the template and placeholders values that should be rendered in the image
apiInstance.renderImage(newImage, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newImage** | [**NewImage**](NewImage.md)| Provide the template and placeholders values that should be rendered in the image | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: image/png, application/json


## templates

> Templates200Response templates()

Get all tempaltes

### Example

```javascript
import Mediamask from 'mediamask-js';
let defaultClient = Mediamask.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Mediamask.MediamaskApi();
apiInstance.templates((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Templates200Response**](Templates200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

