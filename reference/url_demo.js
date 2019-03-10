const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

///serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (Root Demain)
console.log(myUrl.host);

//Hostname (host includes the port hostname does NOT)
console.log(myUrl.hostname)

//Pathname
console.log(myUrl.pathname)

//Serialized queiry:
console.log(myUrl.search)

//Params Object:
console.log(myUrl.searchParams)

//Addparam:
myUrl.searchParams.append('abc', '123')
    console.log(myUrl.searchParams)

//Loop through params:
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`))