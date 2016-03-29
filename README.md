# MEAN TODO - Super Mean Stack youtube tutorial to learn the mean stack

- npde -v
- npm -v

- create directory in github
- clone

- npm init -y

- npm i -S express

-touch server.js

-node server

-npm i -g webpack webpack-dev-server  (global install)

-npm i -D webpack webpack-dev-server (local install)

-npm i -D babel-loader babel-preset-es2015

-touch webpack.config.js

-set up webpack config but some changes need to be made for development?? (Brian?)

-mkdir src

-touch src/index.js  (entry file)

-mkdir public

-touch public/bundle.js

-in server.js html---create script tag for src='bundle.js'

-node server (serves html) & webpack dev server  (client code server - 8080)

-add package.js changes  for run commands  (npm run dev) - killall -9 node (kill add node servers)

-npm i -S angular angular-ui-router

-npm i -D raw-loader (dev dependences for webpack to read HTML template files)

-change webpack.config to include new loader for HTML files

-touch src/config.js  (where main angular module lives and we can control our routes)--import es6 syntax

-angular.bootstrap(document)  attachs the angular module to the document in our HTML

-mkdir src/todos
-touch src/todos/todos.html  (ui-sref, what it uses to match the config routes to what we have in our  DOM)

-mkdir src/about
-touch src/about/about.html

-setup sass:  complile sass code into css and injects into our HTML code
-npm i -D css-loader style-loader sass-loader node-sass autoprefixer-loader  (auto adds browser prefixes to css that need them)
-update webpack config to recognize scss loader
-mkdir src/css
-touch src/css/master.scss

-npm i -S bootstrap-sass jquery

-npm i -D bootstrap-loader url-loader file-loader resolve-url-loader imports-loader

update webpack.config with bootstrap stuff

-touch src/todos/todos/js (controller)

-touch src/css/todos.scss  (can create more than one css file zero auto centers)

-npm i -S lodash

-mkdis src/factories   (1:15 -1:30)
-touch src/factories/todos-factory.js

------------------------1:30 start back end---------------------------------

mongodb(already have on my computer)
-mongod (run mongo db)
-npm i -S mongoose kerboeros body-parser
-mkdir src/server
-mkdir src/server/db
-touch src/server/db/db.js  (set up mongo model-mongoose.connect etc. auto creates todos db)
-touch src/server/routes.js  (create route folder for server to allow different routes)  (1:36--explain) everything through routestodos (that has /todos at the end) send to todos/routes.js
-touch src/server/todos/routes.js  (1:37 demo)  post request to write to db goes here (get to get from db) request.body is  what we read, what the client is sending to our server.

-1:41 get tasks to display all data from the db

-req.params.id (id sent down from the url) _id match the item from the db, mongoose.Types.ObjectId(id)  1:46









