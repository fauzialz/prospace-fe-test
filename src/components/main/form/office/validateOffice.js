export const validateOffice = (values, blurField, err) => {
  const errors = {
    name: (err && err.name) || "",
    latitude: (err && err.latitude) || "",
    longitude: (err && err.longitude) || "",
    date: (err && err.date) || "",
    company: (err && err.company) || "",
  }

  if (!values[blurField]) {
    errors[blurField] = `${blurField} is required`
  }

  if (values[blurField]) {
    errors[blurField] = ''
  }
  
  return errors;
}