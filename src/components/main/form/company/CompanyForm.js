import React from 'react'
import './Company.css';
import { FormGroup, Button, Grid, GridItem } from '../../../../styles/styles'
import { validateCompany } from './validateCompany';
import { createCompany } from '../../../store/company/companyAction';
import { connect } from 'react-redux';
import { setNotification } from '../../../store/global/globalAction';

const mapState = (state) => ({
  companies: state.companies
})

const mapDispatch = {
  createCompany,
  setNotification
}

const CompanyForm = (props) => {
  const { companies, createCompany, setNotification } = props;
  const initialState = {
    name: '',
    address: '',
    revenue: '',
    phoneCode: '',
    phoneNumber: ''
  }
  
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState(initialState);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeNumber = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value.replace(/\D/,'')
    })
  }

  const handleBlur = (event) => {
    const validationErrors = validateCompany(values, event.target.name, errors);
    setErrors(validationErrors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // submitCompany(values);
    const data = {
      id: `CMP${companies.length + 1}`,
      name: values.name,
      address: values.address,
      revenue: values.revenue,
      phone: {
        code: values.phoneCode,
        number: values.phoneNumber
      }
    }
    createCompany(data);

    setErrors(initialState);
    setValues(initialState);

    setLoading(false);
    
    setNotification('New company has been created!')
  }

  const isValid = () => {
    return (
      values.name && errors.name === '' &&
      values.address && errors.address === '' &&
      values.revenue && errors.revenue === '' &&
      values.phoneCode && errors.phoneCode === '' &&
      values.phoneNumber && errors.phoneNumber === ''
    )
  }

  return (
    <div className="separator" style={{padding: '0 16px'}}>
      <h3>
        Company Form
      </h3>
      <form style={{margin: '12px 16px 0'}} onSubmit={handleSubmit}>
        <FormGroup fullwidth style={{marginBottom: errors.name ? 0 : '16px'}}>
          <label>Name</label>
          <input className={`form-control ${errors.name ? 'error' : ''}`} name="name" placeholder="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
          <small>{errors.name ? errors.name : ''}</small>
        </FormGroup>
        <FormGroup fullwidth style={{marginBottom: errors.address ? 0 : '16px'}}>
          <label>Address</label>
          <input className={`form-control ${errors.address ? 'error' : ''}`} name="address" placeholder="address" onChange={handleChange} onBlur={handleBlur} value={values.address} />
          <small>{errors.address ? errors.address : ''}</small>
        </FormGroup>
        <FormGroup fullwidth style={{marginBottom: errors.revenue ? 0 : '16px'}}>
          <label>Revenue</label>
          <input className={`form-control ${errors.revenue ? 'error' : ''}`} type="text" name="revenue" placeholder="revenue" onChange={handleChangeNumber} onBlur={handleBlur} value={values.revenue} />
          <small>{errors.revenue ? errors.revenue : ''}</small>
        </FormGroup>
        <FormGroup fullwidth style={{marginBottom: errors.phoneCode || errors.phoneNumber ? 0 : '16px'}}>
          <label>Phone No</label>
          <Grid container spacing={1}>
            <GridItem sm={3}>
              <input className={`form-control ${errors.phoneCode ? 'error' : ''}`} type="text" name="phoneCode" placeholder="code" onChange={handleChangeNumber} onBlur={handleBlur} value={values.phoneCode} />
            </GridItem>
            <GridItem sm={9}>
              <input className={`form-control ${errors.phoneNumber ? 'error' : ''}`} type="text" name="phoneNumber" placeholder="number" onChange={handleChangeNumber} onBlur={handleBlur} value={values.phoneNumber} />
            </GridItem>
          </Grid>
          <small>{errors.phoneCode && errors.phoneNumber ? 'phone code & number is required' : (errors.phoneCode ? 'phone code is required' : (errors.phoneNumber ? 'phone number is required' : ''))}</small>
        </FormGroup>
        <Button fullwidth disabled={loading || !isValid()}>Submit</Button>
      </form>
    </div>
  )
}

export default connect(mapState, mapDispatch)(CompanyForm);