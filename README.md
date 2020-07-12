# Rakuten TV Clone

This repository hosts the code for Rakuten TV clone.

## 1. Technologies

The solution relies/uses on the following technologies:

* TypeScript
* Sass
* ReactJS (v16)
* Mobx
* Webpack
* Gulp


## 2. Setup and running

Clone the repo and follow these steps to run the application properly:

1. Install dependencies:
```bash
$ yarn install 
```

2. Build the application and run the server:
```bash
$ yarn run start-prod 
```

3. Run the proxy (it uses local-cors-proxy to avoid cors errors): 
```bash
$ yarn run proxy 
```

4. Compile css:
```bash
$ gulp sass:compile 
```

5. Copy assets to dist folder:
```bash
$ gulp assets:copy 
```


Once the previous steps were completed the application is accessible through:

http://localhost:3000/
