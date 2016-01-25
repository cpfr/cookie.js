# cookie.js
A set of convenience functions for getting and setting cookies on a website via JavaScript

## Usage:

```
Cookie.set("username", "cpf");
Cookie.set("password", "12345");
Cookie.getKeys();       // returns a list of all cookies set
                        // ["username", "password"]
Cookie.get("username"); // returns "cpf"
Cookie.remove("cpf");   // removes the "username" cookie
Cookie.clearAll();      // removes all cookies
```