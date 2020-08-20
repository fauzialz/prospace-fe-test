import React from 'react'
import { FormGroup, Button } from '../../../styles/styles';

export const CompanyDetail = (props) => {
  const { data, history } = props;

  const buttonPosition ={
    position: 'absolute',
    bottom: 0,
    right: 0
  }

  return (
    <div style={{marginTop: '16px', position: 'relative'}}>
      <FormGroup fullwidth readonly>
        <label>Address</label>
        <input className="form-control" readOnly value={data.address} />
      </FormGroup>
      <FormGroup fullwidth readonly>
        <label>Revenue</label>
        <input className="form-control" readOnly value={data.revenue} />
      </FormGroup>
      <FormGroup fullwidth readonly>
        <label>Phone No</label>
        <input className="form-control" readOnly value={`(${data.phone.code}) ${data.phone.number}`} />
      </FormGroup>
      <Button style={buttonPosition} onClick={() => history.push('/')}>Back to Overview</Button>
    </div>
  )
}
