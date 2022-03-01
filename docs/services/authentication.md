# Authentication Service

## Description
this service is responsible for handling authentication. It generates authentication urls against TMDB's website and handles register a `session_id` to the client instance.

## Available Methods

- getAuthenticationToken() : get temporary authentication token
- createAuthUrl(redirectUrl) : generate url for user authentication. If specified, appends redirectUrl to request
- createSession(requestToken) : gets session_id from request token

## Example

```javascript
client.authentication.createAuthUrl('example.com')
```
