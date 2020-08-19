import React from 'react'
import { Grid, GridItem, Paper, FormGroup, Divider, CloseButton, Modal, Button } from '../../../../styles/styles'
import { deleteCompany, loadCompany } from '../../../store/company/companyAction'
import { connect } from 'react-redux'

const mapState = (state) => ({
  companies: state.companies
})

const mapDispatch = {
  deleteCompany,
  loadCompany
}

const Companies = (props) => {

  const { companies, deleteCompany, loadCompany } = props;
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

  return (
    <div>
      <h2 style={{marginBottom: '12px'}}>Companies</h2>
      {
        companies.list && companies.list.length > 0 ?
          <Grid container spacing={2}>
          {companies.list.map(item => (
              <GridItem key={item.id} sm={12} md={6}>
                <Paper hover onClick={() => loadCompany(item)}>
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

export default connect(mapState, mapDispatch)(Companies);