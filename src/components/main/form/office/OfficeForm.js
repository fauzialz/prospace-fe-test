import React from 'react'
import { FormGroup, Button, Grid, GridItem } from '../../../../styles/styles'
import { validateOffice } from './validateOffice';

export const OfficeForm = (props) => {
  const { submitOffice, companies } = props;
  const initialState = {
    name: '',
    latitude: '',
    longitude: '',
    date: '',
    company: ''
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

  const handleBlur = (event) => {
    const validationErrors = validateOffice(values, event.target.name, errors);
    setErrors(validationErrors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    submitOffice(values);
    
    setErrors(initialState);
    setValues(initialState);

    setLoading(false);
  }


  const isValid = () => {
    return (
      values.name && errors.name === '' &&
      values.latitude && errors.latitude === '' &&
      values.longitude && errors.longitude === '' &&
      values.date && errors.date === '' &&
      values.company && errors.company === ''
    )
  }

  return (
    <div style={{padding: '0 16px'}}>
      <h3>
        Office Form
      </h3>
      <form onSubmit={handleSubmit} style={{margin: '12px 16px 0'}}>

        <FormGroup fullwidth style={{marginBottom: errors.name ? 0 : '16px'}}>
          <label>Name</label>
          <input className={`form-control ${errors.name ? 'error' : ''}`} name="name" placeholder="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
          <small>{errors.name ? errors.name : ''}</small>
        </FormGroup>

        <FormGroup fullwidth style={{marginBottom: errors.longitude || errors.latitude ? 0 : '16px'}}>
          <label>Location</label>
          <Grid container spacing={1}>
            <GridItem sm={6}>
              <input className={`form-control ${errors.latitude ? 'error' : ''}`} name="latitude" placeholder="latitude" onChange={handleChange} onBlur={handleBlur} value={values.latitude} />
            </GridItem>
            <GridItem sm={6}>
              <input className={`form-control ${errors.longitude ? 'error' : ''}`} name="longitude" placeholder="longitude" onChange={handleChange} onBlur={handleBlur} value={values.longitude} />
            </GridItem>
          </Grid>
          <small>{errors.latitude && errors.longitude ? 'latitude & longitude is required' : (errors.latitude ? 'latitude is required' : (errors.longitude ? 'longitude is required' : ''))}</small>
        </FormGroup>

        <FormGroup fullwidth style={{marginBottom: errors.date ? 0 : '16px'}}>
          <label>Office Start Date</label>
          <input type="date" className={`form-control ${errors.date ? 'error' : ''}`} name="date" placeholder="date" onChange={handleChange} onBlur={handleBlur} value={values.date} />
          <small>{errors.date ? errors.date : ''}</small>
        </FormGroup>

        <FormGroup fullwidth style={{marginBottom: errors.company ? 0 : '16px'}}>
          <label>Company</label>
          <select className={`form-control ${errors.company ? 'error' : ''}`} name="company" onChange={handleChange} onBlur={handleBlur} value={values.company} >
            <option>None</option>
            {
              companies && companies.length > 0 ?
              companies.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))
              :
              <option>No Data</option>
            }
          </select>
          <small>{errors.company ? errors.company : ''}</small>
        </FormGroup>

        <Button fullwidth disabled={loading || !isValid()} >Submit</Button>
      </form>
    </div>
  )
}
