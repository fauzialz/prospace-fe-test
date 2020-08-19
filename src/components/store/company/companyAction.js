import dataDummy from '../../../data/dummy.json';

export const LOAD_LIST = '@@LOAD_LIST';
export const LOAD_DETAIL = '@@LOAD_DETAIL';
export const CREATE_COMPANY = '@@CREATE_COMPANY';
export const DELETE_COMPANY = '@@DELETE_COMPANY';
export const UPDATE_OFFICE = '@@UPDATE_OFFICE';

export const loadCompanies = () => ({type: LOAD_LIST, payload: {companies: dataDummy}})
export const loadCompany = (company) => ({type: LOAD_DETAIL, payload: {company}})
export const createCompany = (data) => ({type: CREATE_COMPANY, payload: {data}})
export const deleteCompany = (id) => ({type: DELETE_COMPANY, payload: {id}})
export const updateOffice = (data) => ({type: UPDATE_OFFICE, payload: {data}})