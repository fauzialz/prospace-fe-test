import React from 'react'
import { Grid, Snackbar } from '../../styles/styles'
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
    <Grid container spacing={2} style={{justifyContent: 'center', height: '100vh'}}>
      <Switch>
        <Route path="/:id" component={Company} />
        <Route path="/" component={Companies} />
      </Switch>
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