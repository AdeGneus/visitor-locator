# Visitor Locator

## A basic web server that greets the user

Usage: send a GET request to `http://example.com/api/hello?visitor_name="Mark"` (where Mark is a visitor's name)

```json
{
  "client_ip": "127.0.0.1", // The IP address of the visitor
  "location": "New York" // The city of the visitor
  "greeting": "Hello, Mark!, the temperature is 11 degrees Celcius in New York"
}
```
