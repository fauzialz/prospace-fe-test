This app is using some library
  1. react-router-dom : I'm using this to setup the routing
  2. redux & react-redux : This two is needed for react to use redux
  3. redux thunk : to apply numbers of function on redux action
  4. redux-devtools : activate redux devtools on chrome
  5. styled-components : this used to create reusable style

this app using data dummy

to running this app
  1. npm install (to install dependencies)
  2. npm start

when we running this app, it's access page with route /
the page is showing companies data, company form and offices form

when there's no data on companies, it shows some message 'there is no companies created yet'

to create company we can using company form, submit will clickable when all of the data is filled
same goes to office form but for select company we need company data first if not it's always none 
so we can't create office

to delete company we could click X on company card, then pop up will show and if we click delete then the data will be deleted
same goes for delete offices data

to see offices data we could go to detail page by clicking company card, on detail page there's button to back to companies page



Not much I can explain for this, but that's it
Thanks