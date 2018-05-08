# express-auth-generator

## A starter project template that includes the following

- [X] Basic login/signup
- [X] Google Oauth
- [X] Facebook Oauth
- [X] Connection to mongoDB
- [X] Json-web-tokens
- [X] express-session

## Installing CLI  

### For Linux

```
$ curl -L https://fileserve.herokuapp.com/download/express_auth_generator | bash
$ authgen
```



1. Select the name of the project, then

```
$ cd projectname
$ npm install
```


2. Insert the API credentials for Oauth and URL for mongoDB connection in secret.js

```javascript
module.exports = {
    mongoURL:"your mongoDB url",
    salt:10,
    secretKey:"your session secret",
    gclientID:'your google client ID',
    gclientSecret:'your google client secret',
    gcallbackURL:'your google callback URL',
    fclientID:'your facebook client ID',
    fclientSecret:'your facebook client secret',
    fcallbackURL:'your google callback URL'
};

```


3. You are good to go

```
$ nodemon app
```
