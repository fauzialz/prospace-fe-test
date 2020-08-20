import React from 'react'
import { Grid, GridItem, Paper, CloseButton, FormGroup, Divider, Modal, Button } from '../../../styles/styles';

export const OfficeList = (props) => {
  const { data, updateOffice, loadCompany, match } = props;

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
    const filter = data.offices.filter(item => item.id !== deleteId);
    const values = {
      ...data,
      offices: filter
    }
    // data = values;
    updateOffice(values);
    loadCompany(match.params.id);
    setModal(!modal);
  }
  return (
    <div style={{marginTop: '16px'}}>
      {
        data.offices && data.offices.length > 0 ?
        <React.Fragment>
        <h2 style={{marginBottom: '12px'}}>Offices</h2>
          <Grid container spacing={2}>
            {
              data.offices.map(item => (
                <GridItem key={item.id} sm={12} md={6}>
                  <Paper>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <h3>
                        {item.name}
                      </h3>
                      <CloseButton onClick={() => openModalDel(item.id)}>X</CloseButton>
                    </div>
                    <Divider />
                    <div style={{marginTop: '24px'}}>
                      <FormGroup fullwidth readonly>
                        <label style={{bottom: '90%'}}>Location</label>
                        <input className="form-control" readOnly style={{height: '1.7rem'}} value={`Lat - ${item.location.latitude}`} />
                        <input className="form-control" readOnly style={{height: '1.7rem'}} value={`Log - ${item.location.longitude}`} />
                      </FormGroup>
                      <FormGroup fullwidth readonly>
                        <label>Office Start Date</label>
                        <input className="form-control" readOnly value={item.date} type="date" />
                      </FormGroup>
                    </div>
                  </Paper>
                </GridItem>
              ))
            }
          </Grid>
        </React.Fragment>
        :
        <h4>there is no offices created yet</h4>
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
