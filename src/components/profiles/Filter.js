// import React from 'react'

// function Filter() {
//   const [bodyTypeValue, setBodyTypeValue] = React.useState('')
//   const [politicalViewValue, setPoliticalViewValue] = React.useState('')
//   const [genderValue, setGenderValue] = React.useState('')
//   const [sexualOrientationValue, setSexualOrientationValue] = React.useState('')
//   const [lookingForValue, setLookingFoValue] = React.useState('')
//   const [humanValue, setHumanValue] = React.useState('')
//   const [drinkingValue, setDrinkingValue] = React.useState(null)
//   const [smokingValue, setSmokingValue] = React.useState(null)
//   const [religionValue, setReligionValue] = React.useState('')
//   const [houseTrainedValue, setHouseTrainedValue] = React.useState(null)
//   const [dietaryRequirementsValue, setDietaryRequirementsValue] = React.useState('')
//   const [childrenValue, setChildrenValue] = React.useState('')

//   const handleBodyType = (e) => {
//     setBodyTypeValue(e.target.value)
//   }

//   const handlePoliticalView = (e) => {
//     setPoliticalViewValue(e.target.value)
//   }

//   const handleGender = (e) => {
//     setGenderValue(e.target.value)
//   }

//   const handleSexualOrientation = (e) => {
//     setSexualOrientationValue(e.target.value)
//   }

//   const handleLookingFor = (e) => {
//     setLookingFoValue(e.target.value)
//   }

//   const handleHuman = (e) => {
//     setHumanValue(e.target.value)
//   }

//   const handleDrinking = (e) => {
//     setDrinkingValue(e.target.value)
//   }

//   const handleSmoking = (e) => {
//     setSmokingValue(e.target.value)
//   }

//   const handleReligion = (e) => {
//     setReligionValue(e.target.value)
//   }

//   const handleHouseTrained = (e) => {
//     setHouseTrainedValue(e.target.value)
//   }

//   const handleDietaryRequirements = (e) => {
//     setDietaryRequirementsValue(e.target.value)
//   }

//   const handleChildren = (e) => {
//     setChildrenValue(e.target.value)
//   }

//   const filterProfiles = (profiles) => {
//     return profiles.filter(profile => {
//       return (
//         profile.bodyType.includes(bodyTypeValue) || bodyTypeValue === '') &&
//         (profile.politicalView.includes(politicalViewValue) || politicalViewValue === '') &&
//         (profile.gender.includes(genderValue) || genderValue === '') &&
//         (profile.sexualOrientation.includes(sexualOrientationValue) || sexualOrientationValue === '') &&
//         (profile.lookingFor.includes(lookingForValue) || lookingForValue === '') &&
//         (profile.human.includes(humanValue) || humanValue === '') &&
//         (profile.drinking.includes(drinkingValue) || drinkingValue === null) &&
//         (profile.smoking.includes(smokingValue) || smokingValue === null) &&
//         (profile.religion.includes(religionValue) || religionValue === '') &&
//         (profile.houseTrained.includes(houseTrainedValue) || houseTrainedValue === null) &&
//         (profile.dietaryRequirements.includes(dietaryRequirementsValue) || dietaryRequirementsValue === '') &&
//         (profile.children.includes(childrenValue) || childrenValue === '')
//     })
//   }


//   return (
//     <section>
//       <label>Body Type
//         <select onChange={handleBodyType}>
//           <option></option>
//           <option>Toned</option>
//           <option>Average</option>
//           <option>Large</option>
//           <option>Muscular</option>
//           <option>Slim</option>
//           <option>Stocky</option>
//         </select>
//       </label>
//       <label>Political View
//         <select onChange={handlePoliticalView}>
//           <option></option>
//           <option>Liberal</option>
//           <option>Moderate</option>
//           <option>Conservative</option>
//           <option>Other</option>
//           <option>Prefer Not to Say</option>
//         </select>
//       </label>
//       <label>Gender
//         <select onChange={handleGender}>
//           <option></option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Non-Binary</option>
//           <option>Other</option>
//           <option>Prefer Not to Say</option>
//         </select>
//       </label>
//       <label>Sexual Orientation
//         <select onChange={handleSexualOrientation}>
//           <option></option>
//           <option>Gay</option>
//           <option>Straight</option>
//           <option>Bisexual</option>
//           <option>Lesbian</option>
//           <option>Allosexual</option>
//           <option>Androsexual</option>
//           <option>Asexual</option>
//           <option>Autosexual</option>
//           <option>Bicurious</option>
//           <option>Demisexual</option>
//           <option>Fluid</option>
//           <option>Graysexual</option>
//           <option>Gynesexual</option>
//           <option>Monosexual</option>
//           <option>Omnisexual</option>
//           <option>Pansexual</option>
//           <option>Polysexual</option>
//           <option>Queer</option>
//           <option>Questioning</option>
//           <option>Skoliosexual</option>
//           <option>Spectrasexual</option>
//           <option>Not Listed</option>
//         </select>
//       </label>
//       <label>Looking For
//         <select onChange={handleLookingFor}>
//           <option></option>
//           <option>Chat</option>
//           <option>Dates</option>
//           <option>Friends</option>
//           <option>Networking</option>
//           <option>Relationship</option>
//           <option>Right Now</option>
//         </select>
//       </label>
//       <label>Human
//         <select onChange={handleHuman}>
//           <option></option>
//           <option>Have Human</option>
//           <option>Want Human</option>
//           <option>Don&apos;t Want Human</option>
//         </select>
//       </label>
//       <label>Drinking
//         <select onChange={handleDrinking}>
//           <option></option>
//           <option value={true}>Yes</option>
//           <option value={false}>No</option>
//         </select>
//       </label>
//       <label>Smoking
//         <select onChange={handleSmoking}>
//           <option></option>
//           <option value={true}>Yes</option>
//           <option value={false}>No</option>
//         </select>
//       </label>
//       <label>Religion
//         <select onChange={handleReligion}>
//           <option></option>
//           <option>Buddhist</option>
//           <option>Catholic</option>
//           <option>Christian</option>
//           <option>Hindu</option>
//           <option>Jewish</option>
//           <option>Muslim</option>
//           <option>Spiritual</option>
//           <option>Agnostic</option>
//           <option>Atheist</option>
//           <option>Other</option>
//           <option>Prefer Not to Say</option>
//         </select>
//       </label>
//       <label>House Trained
//         <select onChange={handleHouseTrained}>
//           <option></option>
//           <option value={true}>Yes</option>
//           <option value={false}>No</option>
//         </select>
//       </label>
//       <label>Dietary Requirements
//         <select onChange={handleDietaryRequirements}>
//           <option></option>
//           <option>Vegetarian</option>
//           <option>Vegan</option>
//           <option>Gluten Free</option>
//           <option>Dairy Free</option>
//           <option>Pescatarian</option>
//           <option>Paleo</option>
//           <option>Keto</option>
//           <option>Kosher</option>
//           <option>Halal</option>
//         </select>
//       </label>
//       <label>Children
//         <select onChange={handleChildren}>
//           <option></option>
//           <option>Have Children</option>
//           <option>Want Children</option>
//           <option>Don&apos;t Want Children</option>
//         </select>
//       </label>
//     </section>
//   )

// }

// export default Filter