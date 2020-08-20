export const validateCompany = (values, blurField, err) => {
  const errors = {
    name: (err && err.name) || "",
    address: (err && err.address) || "",
    revenue: (err && err.revenue) || "",
    phoneCode: (err && err.phoneCode) || "",
    phoneNumber: (err && err.phoneNumber) || "",
  }

  if (!values[blurField]) {
    errors[blurField] = `${blurField} is required`
  }

  if (values[blurField]) {
    errors[blurField] = ''
  }
  return errors;
}