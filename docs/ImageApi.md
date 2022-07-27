# MediamaskApi.ImageApi

All URIs are relative to *https://mediamask.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**renderImage**](ImageApi.md#renderImage) | **POST** /image | Render a new image



## renderImage

> File renderImage(newImage)

Render a new image

### Example

```javascript
import MediamaskApi from 'mediamask_api';
let defaultClient = MediamaskApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MediamaskApi.ImageApi();
let newImage = {"template":"3fa85f64-5717-4562-b3fc-2c963f66afa6","placeholders":[{"name":"text placeholder name","text":"an example text"},{"name":"image placeholder name","image":"https://example.com/example.jpg"}]}; // NewImage | Provide the template and placeholders values that should be rendered in the image
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

