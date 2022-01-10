function ProfileEditPage({ handleSubmit, handleChange, formData, handleImageUpload }) {
  return (
    <form className="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <div>
          <input
            // className={`input ${formErrors.name ? 'error' : ''}`}
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        {/* {formErrors.name && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.name}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="picture" className="label">
          Profile Picture
        </label>
        <div>
          <img
            // className={`input ${formErrors.picture ? 'error' : ''}`}
            // type="file"
            src={formData.picture}
            alt="profile picture"
            id="picture"
            onClick={handleImageUpload}
          />
        </div>
      </div>
      <div>
        <label htmlFor="elevatorPitch" className="label">
          Elevator Pitch
        </label>
        <div>
          <textarea
            // className={`input ${formErrors.elevatorPitch ? 'error' : ''}`}
            maxLength="140"
            placeholder="Elevator Pitch"
            name="elevatorPitch"
            id="elevatorPitch"
            onChange={handleChange}
            value={formData.elevatorPitch}
          />
        </div>
        {/* {formErrors.elevatorPitch && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.elevatorPitch}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="age" className="label">
          Age
        </label>
        <div>
          <input
            // className={`input ${formErrors.age ? 'error' : ''}`}
            type="number"
            placeholder="Age"
            name="age"
            id="age"
            onChange={handleChange}
            value={formData.age}
          />
        </div>
        {/* {formErrors.age && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.age}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="height" className="label">
          Height (cm)
        </label>
        <div>
          <input
            // className={`input ${formErrors.height ? 'error' : ''}`}
            type="number"
            placeholder="Height in cm"
            name="height"
            id="height"
            onChange={handleChange}
            value={formData.height}
          />
        </div>
        {/* {formErrors.height && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.height}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="weight" className="label">
          Weight (kg)
        </label>
        <div>
          <input
            // className={`input ${formErrors.weight ? 'error' : ''}`}
            type="number"
            placeholder="Weight in kg"
            name="weight"
            id="weight"
            onChange={handleChange}
            value={formData.weight}
          />
        </div>
        {/* {formErrors.weight && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.weight}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="bodyType" className="label">
          Body Type
        </label>
        <div>
          <select
            name="bodyType"
            id="bodyType"
            onChange={handleChange}
            value={formData.bodyType}>
            <option></option>
            <option>Toned</option>
            <option>Average</option>
            <option>Large</option>
            <option>Muscular</option>
            <option>Slim</option>
            <option>Stocky</option>
          </select>
        </div>
        {/* {formErrors.bodyType && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.bodyType}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="animalType" className="label">
          Animal Type
        </label>
        <div>
          <input
            // className={`input ${formErrors.animalType ? 'error' : ''}`}
            placeholder="Dog, Goat, Dragon, Axolotl... "
            name="animalType"
            id="animalType"
            onChange={handleChange}
            value={formData.animalType}
          />
        </div>
        {/* {formErrors.bodyType && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.animalType}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="politicalView" className="label">
          Political View
        </label>
        <div>
          <select
            name="politicalView"
            id="politicalView"
            onChange={handleChange}
            value={formData.politicalView}>
            <option></option>
            <option>Liberal</option>
            <option>Moderate</option>
            <option>Conservative</option>
            <option>Other</option>
            <option>Prefer Not to Say</option>
          </select>
        </div>
        {/* {formErrors.politicalView && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.politicalView}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="gender" className="label">
          Gender
        </label>
        <div>
          <select
            name="gender"
            id="gender"
            onChange={handleChange}
            value={formData.gender}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
            <option>Other</option>
            <option>Prefer Not to Say</option>
          </select>
        </div>
        {/* {formErrors.gender && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.gender}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="sexualOrientation" className="label">
          Sexual Orientation
        </label>
        <div>
          <select
            name="sexualOrientation"
            id="sexualOrientation"
            onChange={handleChange}
            value={formData.sexualOrientation}>
            <option></option>
            <option>Gay</option>
            <option>Straight</option>
            <option>Bisexual</option>
            <option>Lesbian</option>
            <option>Allosexual</option>
            <option>Androsexual</option>
            <option>Asexual</option>
            <option>Autosexual</option>
            <option>Bicurious</option>
            <option>Demisexual</option>
            <option>Fluid</option>
            <option>Graysexual</option>
            <option>Gynesexual</option>
            <option>Monosexual</option>
            <option>Omnisexual</option>
            <option>Pansexual</option>
            <option>Polysexual</option>
            <option>Queer</option>
            <option>Questioning</option>
            <option>Skoliosexual</option>
            <option>Spectrasexual</option>
            <option>Not Listed</option>
          </select>
        </div>
        {/* {formErrors.sexualOrientation && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.sexualOrientation}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="lookingFor" className="label">
          Looking For
        </label>
        <div>
          <select
            name="lookingFor"
            id="lookingFor"
            onChange={handleChange}
            value={formData.lookingFor}>
            <option></option>
            <option>Chat</option>
            <option>Dates</option>
            <option>Friends</option>
            <option>Networking</option>
            <option>Relationship</option>
            <option>Right Now</option>
          </select>
        </div>
        {/* {formErrors.lookingFor && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.lookingFor}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="human" className="label">
          Human
        </label>
        <div>
          <label className="radio">
            <input
              type="radio"
              name="human"
              id="human"
              value="Have Human"
              onChange={handleChange}
              checked={formData.human === 'Have Human'}
            />
            Have Human
          </label>
          <label className="radio">
            <input
              type="radio"
              name="human"
              id="human"
              value="Want Human"
              onChange={handleChange}
              checked={formData.human === 'Want Human'}
            />
            Want Human
          </label>
          <label className="radio">
            <input
              type="radio"
              name="human"
              id="human"
              value="Dont Want Human"
              onChange={handleChange}
              checked={formData.human === 'Dont Want Human'}
            />
            Don&apos;t Want Human
          </label>
          <label className="radio">
            <input
              type="radio"
              name="human"
              id="human"
              value="preferNotToSay"
              onChange={handleChange}
              checked={formData.human === 'preferNotToSay'}
            />
            Prefer Not To Say
          </label>
        </div>
        {/* {formErrors.human && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.human}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="drinking" className="label">
          Drinking
        </label>
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              name="drinking"
              id="drinking"
              onChange={handleChange}
              checked={formData.drinking}
            />
            I like a drink
          </label>
        </div>
        {/* {formErrors.drinking && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.drinking}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="smoking" className="label">
          Smoking
        </label>
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              name="smoking"
              id="smoking"
              onChange={handleChange}
              checked={formData.smoking}
            />
            I like a smoke
          </label>
        </div>
        {/* {formErrors.smoking && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.smoking}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="religion" className="label">
          Religion
        </label>
        <div>
          <select
            name="religion"
            id="religion"
            onChange={handleChange}
            value={formData.religion}>
            <option></option>
            <option>Buddhist</option>
            <option>Catholic</option>
            <option>Christian</option>
            <option>Hindu</option>
            <option>Jewish</option>
            <option>Muslim</option>
            <option>Spiritual</option>
            <option>Agnostic</option>
            <option>Atheist</option>
            <option>Other</option>
            <option>Prefer Not to Say</option>
          </select>
        </div>
        {/* {formErrors.religion && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.religion}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="houseTrained" className="label">
          House Trained
        </label>
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              name="houseTrained"
              id="houseTrained"
              onChange={handleChange}
              checked={formData.houseTrained}
            />
            I know where to pee
          </label>
        </div>
        {/* {formErrors.houseTrained && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.houseTrained}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="dietaryRequirements" className="label">
          Dietary Requirements
        </label>
        <div>
          <select
            name="dietaryRequirements"
            id="dietaryRequirements"
            onChange={handleChange}
            value={formData.dietaryRequirements}>
            <option></option>
            <option>Vegetarian</option>
            <option>Vegan</option>
            <option>Gluten Free</option>
            <option>Dairy Free</option>
            <option>Pescatarian</option>
            <option>Paleo</option>
            <option>Keto</option>
            <option>Kosher</option>
            <option>Halal</option>
          </select>
        </div>
        {/* {formErrors.dietaryRequirements && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.dietaryRequirements}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="children" className="label">
          Children
        </label>
        <div>
          <label className="radio">
            <input
              type="radio"
              name="children"
              id="children"
              value="Have Children"
              onChange={handleChange}
              checked={formData.children === 'Have Children'}
            />
            Have Children
          </label>
          <label className="radio">
            <input
              type="radio"
              name="children"
              id="children"
              value="Want Children"
              onChange={handleChange}
              checked={formData.children === 'Want Children'}
            />
            Want Children
          </label>
          <label className="radio">
            <input
              type="radio"
              name="children"
              id="children"
              value="Dont Want Children"
              onChange={handleChange}
              checked={formData.children === 'Dont Want Children'}
            />
            Don&apos;t Want Children
          </label>
          <label className="radio">
            <input
              type="radio"
              name="children"
              id="children"
              value="Prefer Not To Say"
              onChange={handleChange}
              checked={formData.children === 'Prefer Not To Say'}
            />
            Prefer Not To Say
          </label>
        </div>
        {/* {formErrors.human && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.human}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <button type="submit">
          Update
        </button>
      </div>
    </form>
  )
}

export default ProfileEditPage