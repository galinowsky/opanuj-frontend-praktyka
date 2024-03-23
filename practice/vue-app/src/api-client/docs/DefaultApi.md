# RickAndMortyApi.DefaultApi

All URIs are relative to *https://rickandmortyapi.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharacters**](DefaultApi.md#getCharacters) | **GET** /character | Get a list of characters



## getCharacters

> CharacterListResponse getCharacters()

Get a list of characters

### Example

```javascript
import RickAndMortyApi from 'rick_and_morty_api';

let apiInstance = new RickAndMortyApi.DefaultApi();
apiInstance.getCharacters((error, data, response) => {
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

[**CharacterListResponse**](CharacterListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

