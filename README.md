# Project 3 - Sniff
## Overview
This project was the third and first full-stack project of the General Assembly Software Engineering Immersive Course. This was a group project, done in a group of 3 and lasted one week. As a group, we chose to create a dating website for animals called 'Sniff'

## Brief
The brief was to create a full-stack application by creating our own back-end and front-end
### Technical Requirements
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate front-end built with React
* Have a complete product with multiple relationships and CRUD functionality and have multiple models

## Collaborators
* [Esin Yilmazbilek](https://github.com/EsinYilmazbilek)
* [Joe Freeman](https://github.com/joefreeman8)

## Built With
* Express
* Node.js
* Mongoose
* MongoDB
* Insomnia
* React.js
* JSX
* CSS
* SASS
* MUI Framework
* Axios
* React-Router-DOM
* Hamburger React
* Git
* GitHub

## Key Features
### Minimum Requirements
* User schema and ability to create a user profile
* Message schema and ability to message other users
* Edit and delete user profile

### Stretch Goals
* Delete messages and chats
* Like button
* Rating of profiles

## Deployed Version
[View the deployed version of the app](https://sniff.netlify.app/)
![Screen Grab of home page](./src/assets/homePage.png)
You may use the following credentials to sign in:
* Email: willowtree@email
* Password: pass

## Planning
Our first stage of planning was deciding what app we wanted to create as we were given free reign for this. We quickly realised we had a mutual love for pets and animals and we also wanted to push ourselves and create something new which we hadn't done before, such as a dating app so we just combined the two.

We were able to work well together and bounce ideas to come up with an initial plan and put everything in an Excalidraw:
![Screen grab of excalidraw](./src/assets/excalidraw.png)
We decided that we wanted to all work on as many components as we could, especially aspects that were new to us all therefore we all acted as full-stack engineers for this project.

As a team, we split up the back-end components in order to work through them as quickly as possible and once that was up and running we focused on the front-end.

## The Build
Throughout the projects we had daily stand-ups to check in on what everyone was working on and help eachother with any bugs or issues. We also stayed on a Zoom call all day while working in order to keep open communication and support eachother as well as using Slack to share code snippets.

We used branches to code individually and throughout the day would have multiple 'mergefests' where we would take turns merging to the main branch and pushing so that we would all have the most up-to-date code.

## Work Split
Back-End:
* Alex - Schema and Error Handling
* Esin - Controllers
* Joe - Enviroment, Router and Database of registered users

Front-End:
* Alex - Index Page, Profile Show Page, Chat
* Esin - NavBar, Home Page, Chat
* Joe - Register, Login, Edit Profile, Chat

## Back-End
When working on the back-end, we each started working on our assigned elements while on a Zoom call so we could provide support when needed.

My main focus was creating the two Schemas, one for the user profiles and one for the chat history. I used Mongoose Schema to build these and used Mongoose unique validator for pre-save validation within the Mongoose schemas and bcrypt to encrypt user passwords.:
```js
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String },
  elevatorPitch: { type: String, required: true, maxlength: 140 },
  age: { type: Number, required: true },
  height: { type: Number },
  weight: { type: Number },
  bodyType: { type: String },
  animalType: { type: String, required: true },
  politicalView: { type: String },
  gender: { type: String },
  sexualOrientation: { type: String },
  lookingFor: [{ type: String, required: true }],
  human: { type: String },
  drinking: { type: Boolean },
  smoking: { type: Boolean },
  religion: { type: String },
  houseTrained: { type: Boolean },
  dietaryRequirements: [{ type: String }],
  children: { type: String },
})

userSchema.set('toJSON', {
  transform(_doc, json) {
    delete json.password
    return json
  },
})

userSchema.virtual('passwordConfirmation').set(function (passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation
})

userSchema.pre('validate', function (next) {
  if (
    this.isModified('password') &&
    this.password !== this._passwordConfirmation
  ) {
    this.invalidate('passwordConfirmation', 'does not match')
  }
  next()
})

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}


userSchema.plugin(mongooseUniqueValidator)

export default mongoose.model('User', userSchema)
```

While the user model was quite straight forward, the chat model was slightly more complicated. I quickly realised that two schemas would be needed for it to work, one named ```chatSchema``` to store the user information and nested within a ```messages``` key, I created an array with a second ```messagesSchema``` where the individuals messages between those two users would be stored. This enabled us to allow individual messages to be deleted on the front-end, without having to delete the entire chat.
```js
const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
},{
  timestamps: true,
})

const chatSchema = new mongoose.Schema({
  messages: [messageSchema],
  userOne: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  userTwo: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})
```

Once I created the the required schemas, I was able to pick up any unfinished work that my teammates hadn't gotten to yet. I focused on improving our error handling both for user experience but also, more importantly, for the front-end engineer. I concluded that there would be two main errors, one if the user is unauthorised to perform the action and one if the item is not found:
```js
export class NotFound extends Error {
  constructor() {
    super()

    this.name = 'NotFound'
  }
}

export class Unauthorized extends Error {
  constructor() {
    super()

    this.name = 'Unauthorized'
  }
}
```

Once we all finished our assigned tasks and our data was seeded, we checked all our endpoints on Insomnia to ensure our back-end was running properly. We were able to finish our entire back-end in just one day, which surpassed our expectations or timeline and with that we started on the front-end on day 2 of the project.

## Front-End
When tackling the front-end, we broke it up into components which needed to be completed and allocated each component to a team member. The chat feature was something new to all of us so we decided to work on that together as an educational experience for everyone.

The two main components I worked on were the Index Page which would display all the user profiles and the Profile Show Page which is a display of a specific user profile.
### Index Page
When creating the index page, I used the MUI Card component and the Grid component to display the profile image, name, age and blurb in a grid. While this was a quick task, the most challenging aspect was the extensive filtering we wanted to impliment, as wanted the user to be able to filter the users using multiple attributes at the same time. The below code allowed us to do this and I am personally quite proud of it as I managed to code it by myself:
```js
const filterProfiles = (profiles) => {
    return profiles.filter(profile => {
      return (
        profile._id !== currentUserId) &&
        (profile.age >= ageMinValue || ageMinValue === null) &&
        (profile.age <= ageMaxValue || ageMaxValue === null) &&
        (profile.weight >= weightMinValue || weightMinValue === null) &&
        (profile.weight <= weightMaxValue || weightMaxValue === null) &&
        (profile.height >= heightMinValue || heightMinValue === null) &&
        (profile.height <= heightMaxValue || heightMaxValue === null) &&
        (profile.bodyType?.includes(bodyTypeValue) || bodyTypeValue === '') &&
        (profile.politicalView?.includes(politicalViewValue) || politicalViewValue === '') &&
        (profile.gender?.includes(genderValue) || genderValue === '') &&
        (profile.sexualOrientation?.includes(sexualOrientationValue) || sexualOrientationValue === '') &&
        (profile.lookingFor?.includes(lookingForValue) || lookingForValue === '') &&
        (profile.human?.includes(humanValue) || humanValue === '') &&
        (String(profile.drinking)?.includes(drinkingValue) || drinkingValue === null) &&
        (String(profile.smoking)?.includes(smokingValue) || smokingValue === null) &&
        (profile.religion?.includes(religionValue) || religionValue === '') &&
        (String(profile.houseTrained)?.includes(houseTrainedValue) || houseTrainedValue === null) &&
        (profile.dietaryRequirements?.includes(dietaryRequirementsValue) || dietaryRequirementsValue === '') &&
        (profile.children?.includes(childrenValue) || childrenValue === '')
    })
  }
```
![Screen grab of index page](./src/assets/index.png)
### Profile Show Page
The profile show page is a simple display page for all the information in a user's profile. Using props I was able to to direct the user to the correct profile, once they clicked on it from the index page.

The most complex aspect of this page, was the conditional formatting on the messaging feature embeded into the page. Using the logged in used ID from local storage, the used ID of the viewed profile and the chat history pulled from the back-end we were able to determine whether the two users have chatted before. If they have chatted before clicking the 'message' button takes the user directly to their chat and displays the chat history. If they haven't, a chatbox opens up on the profile show page where they can initiate a conversation from there. The below code snippet allows this function:
```js
const handleMessageButtonClick = () => {
    if (
      chats.length > 0
    ) {
      console.log('here')
      navigate(`/chat/${chats[0]._id}`)
    } else {
      setIsMessaging(true)
      console.log('there')
    }
  }
```
![Screen grab of profile show page](./src/assets/profileShow.png)
