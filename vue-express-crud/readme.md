[consulted blog](https://www.techiediaries.com/vue-js-express-tutorial/)

commands to create project 
```
1. mkdir vue-express-crud
2. cd vue-express-crud
3. npm init
4. npm install express --save
5. echo '' > app.js     //create app.js then delete ''

//create the package indeed
npm install --save  express  body-parser cors mongoose nodemon
```

create the mongo model folder and the models
```
mkdir models
echo '' > Todo.js   //and then remove ''
```
create the route,do like above.
```
mkdir route
echo '' > routes.js   //and then remove ''
```
import to the app.js and use it 
```
let router = require('../route/routes.js')
app.route(router);
```
steps to create frontend module
1. install vue/cli
```
    npm install --global @vue/cli 
```
2. create module frontend
```
vue create frontend
```
3. inside and install axios
```
cd fontend
npm install --save axios
```

