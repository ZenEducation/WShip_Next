import { combineReducers } from 'redux'
import theme from './theme/themeSlice'
import auth from './auth'
import base from './base'
import locale from './locale/localeSlice'
import departmentListing from './recruitmentPortal/departmentListingSlice';

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        base,
        locale,
        departmentListing,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
