import React from 'react'
import { updateOffice, loadCompany } from '../../store/company/companyAction'
import { connect } from 'react-redux'
import { Divider } from '../../../styles/styles'
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
    <div>
      {
        companies &&
        companies.detail &&
        <React.Fragment>
          <h2>{companies.detail.name}</h2>
          <Divider style={{marginTop: '8px'}} />
          <CompanyDetail data={companies.detail} {...{history}} />
          <Divider />
          <OfficeList data={companies.detail} {...{updateOffice, loadCompany, match}} />
        </React.Fragment>
      }
    </div>
  )
}

export default connect(mapState, mapDispatch)(Company);