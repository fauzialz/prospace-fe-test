import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './PlayAction'
import { setLoading } from '../components/store/global/globalAction'
import { Grid, GridItem, Paper, Divider, Button, FormGroup } from '../styles/styles'

const mapState = (state) => ({
  count: state.play,
  loading: state.global.loading
})

const mapDispatch = {
  inc: incrementCounter,
  dec: decrementCounter,
  setLoad: setLoading
}

const Playground = (props) => {
  return (
    <Grid container style={{justifyContent: 'center'}}>
      <GridItem sm={12} md={6}>
        <Grid container spacing={2}>
          <GridItem sm={12} md={6}>
            <Paper>
              <h1>{props.count}</h1>
              <Divider />
              <Grid container>
                <button onClick={() => props.inc('Increment')}>+</button>
                <Divider vertical flexItem style={{margin: '0 16px', width: '2px'}} />
                <button onClick={() => props.dec('Decrement')}>-</button>
              </Grid>
            </Paper>
          </GridItem>
          <GridItem sm={12} md={6}>
            <Paper>
              <h1>{props.loading ? 'Loading' : 'Stand By'}</h1>
              <Divider middle />
              <button onClick={() => props.setLoad(!props.loading)}>Set Loading</button>
              <Button>ABCD</Button>
              <Button disabled>ABCD</Button>
              <Button fullwidth>ABCD</Button>
              <Button fullwidth disabled>ABCD</Button>
            </Paper>
            <Paper>
              <FormGroup fullwidth>
                <label>Coba</label>
                <input className="form-control" placeholder="cobain input" />
                <small>Required*</small>
              </FormGroup>
              <FormGroup fullwidth>
                <label>Select*</label>
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <small>Required*</small>
              </FormGroup>
            </Paper>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default connect(mapState, mapDispatch)(Playground);