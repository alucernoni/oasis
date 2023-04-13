# README


## Oasis
Oasis is a web application designed to help wanna-be plant parents (who weren't gifted with a green thumb) to enter the world of houseplants with recommendations on easy-to-care for plants and reminders to help plant parents stay on track of plant care as they build their oasis.

## User Stories:
- Users can create and log into their accounts (with password validations and error handling)
- Users can create a personalized profile page, where they are able to view their plants (with recommendations on ideal care conditions for those plants), view any plant tasks (i.e. "time to water your Ficus!" or "time to fertilize your Monstera!"), give nicknames to their plants, and view a map on their location (based on geolocation) to search for nearby plant nurseries/shops.
- Users can view easy house plant recommendations based on factors like plants that do well in low-light areas, or plants that are suited to a forgetful waterer. They can also add or update plants and plant care details. 

## Tools Used in Application:
### - Planning: 
  - Trello for project management
  - dbdiagram.io for ERD
  - Draw.io for React Components tree
  - Figma for wire-framing
### - Frontend
  - JavaScript
  - React.js
  - Redux
  - Mapbox
  - Cloudinary (for hosting plant images)
  - Chakra UI
  - Custom CSS
### - Backend
  - Ruby on Rails
  - PostgreSQL

## Future Additions I'd Like to Incorporate:
- Users receive a text message when a plant care task is ready (plan to use Twilio)
- Users can get navigation to plant shops via the map on their profile page
- Users can access and converse with other users on a "Help" forum
- Mobile version

<img width="1440" alt="Screen Shot 2023-04-13 at 11 31 31 AM" src="https://user-images.githubusercontent.com/102399239/231902677-5d28ea05-4dcb-4a54-b1c2-29bc0fce2f5e.png">


https://user-images.githubusercontent.com/102399239/231902938-8bf0ca86-2e33-45aa-91e1-ceac940c0a73.mov


## Set Up and Installation

### Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

### Installation

Run:

```sh
bundle install
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

### Environment Setup
### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```
