import {Route, Redirect} from 'react-router-dom'

const PrivateRouteAdmin = ({component: Component, ...rest} ) => {
    const AdminToken = localStorage.getItem('token')

    if (AdminToken)
    return (<Route component={Component} />)
    
    return (<Redirect to='/' />)

}

export default PrivateRouteAdmin