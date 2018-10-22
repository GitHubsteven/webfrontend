to create a basic web skeleton by node.js + express
1. install express generator
```
npm install express-generator -g
```
2. For example, the following creates an Express app named express-test.
 The app will be created in a folder named express-test in the current working directory and the view engine will be set to Pug:
```
express --view=pug myapp
```
result is
```
create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.pug
   create : myapp/views/layout.pug
   create : myapp/views/error.pug
   create : myapp/bin
   create : myapp/bin/www
```
cd the root dir and install
```
cd express-test
npm install
```
On MacOS or Linux, run the app with this command:
```
DEBUG=myapp:* npm start
```
windows, use the commands:
```
set DEBUG=myapp:* & npm start
```
Then load http://localhost:3000/ in your browser to access the app.

The generated app has the following directory structure:

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```