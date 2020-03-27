##### web frontend向server发送api请求
name | official doc | web blog| advantages | disAdvantage
---|---|---|---|---
jquery.ajax| | | 1. easy to use and learn 2.  wide browser support |
XMLHttpRequest |
Fetch API |
axios |  | [make-http-requests-like-a-pro-with-axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/#new_tab)

###### jquery.ajax
###### XMLHttpRequest
###### Fetch API
> Without question, some developers prefer Axios over built-in APIs for its ease of use. But many overestimate the need for such a library.
 The fetch() API is perfectly capable of reproducing the key features of Axios, and it has the added advantage of being readily available in all modern browsers.

see [axios-or-fetch-api](https://blog.logrocket.com/axios-or-fetch-api/)

To send data,
1. fetch() uses the body property, while Axios uses the data property
2. The data in fetch() is stringified
3. The URL is passed as an argument to fetch(). In Axios, however, the URL is set in the options object

###### axios
1. Reference documents

[how-to-make-http-requests-like-a-pro-with-axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/#new_tab)

Axios also provides a set of shorthand methods for performing different types of requests. The methods are as follows:

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])

For instance, the following code shows how the previous example could be written using the axios.post() method:

```
axios.post('/login', {
  firstName: 'Finn',
  lastName: 'Williams'
});
```