import React from 'react'
import { Grid, GridItem, Paper, Divider } from '../../styles/styles'
import { CompanyForm } from './form/company/CompanyForm'
import { OfficeForm } from './form/office/OfficeForm'
import { Companies } from './list/company/Companies'
import Data from '../../data/dummy.json';
import { loadCompanies, createCompany, deleteCompany, updateOffice } from '../store/company/companyAction'
import { connect } from 'react-redux'

const mapState = (state) => ({
  companies: state.companies
})

const mapDispatch = {
  loadCompanies,
  createCompany,
  deleteCompany,
  updateOffice
}

const Main = (props) => {
  const { loadCompanies, createCompany, deleteCompany: deleteCmp, updateOffice } = props;
  React.useEffect(() => {
    loadCompanies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [companies, setCompanies] = React.useState(Data);
  const submitCompany = (value) => {
    const { name, address, revenue, phoneCode, phoneNumber } = value;
    const data = {
      id: `CMP${companies.length + 1}`,
      name,
      address,
      revenue,
      phone: {
        code: phoneCode,
        number: phoneNumber
      }
    }
    setCompanies([...companies, data])
    createCompany(data);
  }

  const submitOffice = (value) => {
    const findCompany = companies.find(item => item.id === value.company);
    const data = {
      id: `OFC${findCompany.offices.length + 1}`,
      name: value.name,
      location: {
        latitude: value.latitude,
        longitude: value.longitude
      },
      date: value.date
    }
    findCompany.offices.push(data);
    setCompanies(
      companies.map(item => (item.id === value.company ? findCompany : item))
    )
    updateOffice(findCompany);
  }

  const deleteCompany = (id) => {
    const filterData = companies.filter(item => item.id !== id);
    setCompanies(filterData);
    deleteCmp(id);
  }

  return (
    <Grid container style={{justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <GridItem sm={12} md={8} lg={6}>
        <Paper style={{minHeight: '95vh'}} elevation={3}>
          <Grid container spacing={2}>
            <GridItem sm={12} md={6}>
              <CompanyForm {...{submitCompany}} />
            </GridItem>
            <GridItem sm={12} md={6}>
              <OfficeForm {...{companies, submitOffice}} />
            </GridItem>
          </Grid>
          <Divider middle style={{marginTop: '24px'}} />
          <div style={{marginTop: '16px'}}>
            <Companies {...{companies, deleteCompany}} />
          </div>
        </Paper>
      </GridItem>
    </Grid>
  )
}

export default connect(mapState, mapDispatch)(Main);