import React from 'react'
import { updateOffice, loadCompany } from '../../store/company/companyAction'
import { connect } from 'react-redux'
import { Divider, GridItem, Paper } from '../../../styles/styles'
import { CompanyDetail } from './CompanyDetail'
import { OfficeList } from './OfficeList'

const mapState = (state) => ({
  companies: state.companies
})

const mapDispatch = {
  updateOffice,
  loadCompany
}

const Company = (props) => {
  const { companies, updateOffice, loadCompany, match, history } = props;
  
  React.useEffect(() => {
    loadCompany(match.params.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <React.Fragment>
      {
        companies &&
        companies.detail &&
        <React.Fragment>
          <GridItem sm={12} md={3} lg={3}>
            <Paper elevation={3}>
              <h2>{companies.detail.name}</h2>
              <Divider style={{marginTop: '8px'}} />
              <CompanyDetail data={companies.detail} {...{history}} />
            </Paper>
          </GridItem>
          <GridItem sm={12} md={8} lg={6}>
            <Paper style={{height: '95vh', overflowY: 'auto'}} elevation={3}>
              <OfficeList data={companies.detail} {...{updateOffice, loadCompany, match}} />
            </Paper>
          </GridItem>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default connect(mapState, mapDispatch)(Company);