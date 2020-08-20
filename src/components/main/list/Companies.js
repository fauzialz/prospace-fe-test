import React from 'react'
import { Grid, GridItem, Divider } from '../../../styles/styles'
import CompanyForm from '../form/company/CompanyForm'
import OfficeForm from '../form/office/OfficeForm'
import CompanyList from './CompanyList'
import { connect } from 'react-redux'

const mapState = (state) => ({
  companies: state.companies
})

const mapDispatch = {
}

const Companies = (props) => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <GridItem sm={12} md={6}>
          <CompanyForm />
        </GridItem>
        <GridItem sm={12} md={6}>
          <OfficeForm />
        </GridItem>
      </Grid>
      <Divider middle style={{marginTop: '24px'}} />
      <div style={{marginTop: '16px'}}>
        <CompanyList />
      </div>
    </React.Fragment>
  )
}

export default connect(mapState, mapDispatch)(Companies);