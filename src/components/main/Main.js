import React from 'react'
import { Grid, GridItem, Paper, Snackbar } from '../../styles/styles'
import Companies from './list/Companies'
import { loadCompanies } from '../store/company/companyAction'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import Company from './detail/Company'

const mapState = (state) => ({
  notification: state.global.notification
})

const mapDispatch = {
  loadCompanies,
}

const Main = (props) => {
  const { loadCompanies, notification } = props;
  React.useEffect(() => {
    loadCompanies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container style={{justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <GridItem sm={12} md={8} lg={6}>
        <Paper style={{minHeight: '95vh'}} elevation={3}>
          <Switch>
            <Route path="/:id" component={Company} />
            <Route path="/" component={Companies} />
          </Switch>
        </Paper>
      </GridItem>
      <Snackbar>
        <div className={`content ${notification.show ? 'show' : ''}`}>
          <div className="message">
            {notification.message}
          </div>
        </div>
      </Snackbar>
    </Grid>
  )
}

export default connect(mapState, mapDispatch)(Main);