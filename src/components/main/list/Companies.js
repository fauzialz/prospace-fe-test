import React from 'react'
import { GridItem, Divider, Paper } from '../../../styles/styles'
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
      <GridItem sm={12} md={3} lg={3}>
        <Paper style={{height: '95vh', overflowY: 'auto'}} elevation={3}>
          <CompanyForm />
          <Divider style={{marginTop: '16px', marginBottom: '12px'}} />
          <OfficeForm />
        </Paper>
      </GridItem>
      <GridItem sm={12} md={8} lg={6}>
        <Paper style={{height: '95vh', overflowY: 'auto'}} elevation={3}>
          <CompanyList />
        </Paper>
      </GridItem>
    </React.Fragment>
  )
}

export default connect(mapState, mapDispatch)(Companies);