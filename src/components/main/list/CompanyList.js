import React from 'react'
import { Grid, GridItem, Paper, FormGroup, Divider, CloseButton, Modal, Button } from '../../../styles/styles'
import { deleteCompany } from '../../store/company/companyAction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapState = (state) => ({
  companies: state.companies
})

const mapDispatch = {
  deleteCompany,
}

const CompanyList = (props) => {
  const { history } = props;

  const { companies, deleteCompany } = props;
  const [modal, setModal] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState();

  const openModalDel = (id) => {
    setDeleteId(id);
    setModal(!modal);
  }

  const closeModalDel = () => {
    setDeleteId();
    setModal(!modal);
  }

  const handleDelete = () => {
    deleteCompany(deleteId);
    setModal(!modal);
  }

  const goDetail = (item) => {
    history.push(`/${item.id}`)
  }

  return (
    <div>
      {
        companies.list && companies.list.length > 0 ?
        <React.Fragment>
          <h2 style={{marginBottom: '12px'}}>Companies</h2>
            <Grid container spacing={2}>
            {companies.list.map(item => (
                <GridItem key={item.id} sm={12} md={6}>
                  <Paper hover onClick={() => goDetail(item)}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <h3>
                        {item.name}
                      </h3>
                      <CloseButton onClick={() => openModalDel(item.id)}>X</CloseButton>
                    </div>
                    <Divider />
                    <div style={{marginTop: '24px'}}>
                      <FormGroup fullwidth readonly>
                        <label>Address</label>
                        <input className="form-control" readOnly value={item.address} />
                      </FormGroup>
                      <FormGroup fullwidth readonly>
                        <label>Revenue</label>
                        <input className="form-control" readOnly value={item.revenue} />
                      </FormGroup>
                      <FormGroup fullwidth readonly>
                        <label>Phone No</label>
                        <input className="form-control" readOnly value={`(${item.phone.code}) ${item.phone.number}`} />
                      </FormGroup>
                    </div>
                  </Paper>
                </GridItem>
              ))}
            </Grid>
          </React.Fragment>
        :
        <h4>there is no companies created yet</h4>
      }
      <Modal show={modal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Delete</h4>
              <CloseButton onClick={closeModalDel} >X</CloseButton>
            </div>
            <div className="modal-body">
              <p>Cobain modal</p>
            </div>
            <div className="modal-footer">
              <Button onClick={closeModalDel} >Cancel</Button>
              <Button danger onClick={handleDelete} >Delete</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default withRouter(connect(mapState, mapDispatch)(CompanyList));