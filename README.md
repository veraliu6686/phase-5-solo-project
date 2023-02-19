# petMemo - a pet manage tool and a social media platform

## Welcome to petMemo!

### It's a place for pet owners to well manage their pets and share the daily life of their babies.


### Here you may:


* welcome a new baby to your home
* record a daily activety for your pets
* sxplore the community to see who else is sharing their pets
* follow/unfollow a user
* add todos of your daily schedule
* check how long you've been with each baby.
* track your pet's inventories
* use your favorite color theme

## to start the app:

### for the backend
```
$ cd pet_story
```
you have to start PostgreSQL to set up the database
```
$ sudo service postgresql start
```
```
$ rails db:create db:migrate
```
#### If you would like to use the seed file as an example,
* uncomment the line 8-25 in the seeds.rb
* remember to put username, email, and password in line 11

```
$ rails db:seed
$ rails server
```
now the backend data will be present at http://localhost:3000/

### for the frontend
```
$ cd client
$ npm install
$ npm run dev
```
you will find the application can be open on http://localhost:5173/

## For your information:
* This app was created with Vite.js. Here is a quick guide for you to try it out.🤔 https://vitejs.dev/guide/
* Check out the Daisy UI color theme I imported if you're interested.👀 https://daisyui.com/docs/themes/
* YouTube Demo🐱‍👤 https://youtu.be/pP-QdswOrOE
