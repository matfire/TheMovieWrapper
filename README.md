# The Movie Wrapper

## A fully-typed TMDB Api wrapper

---

## Usage

### Install

`npm i @matfire/the_movie_wrapper --save`

### Initialization

there is a single available export in this library.

```js
import Client from "@matfire/the_movie_wrapper"

const client = new Client("<insert_your_api_key>");
```

### Available Methods

#### Authentication
- getAuthenticationToken() -> retrieve an authentication token for user authentication
- createAuthUrl(callbackUrl) -> generates the authentication url where the user should be redirected. Expects a callbackUrl
- createSession(requestToken) -> generates a session_id from a request token