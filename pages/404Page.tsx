import type { NextPage } from 'next'
import Error404 from './components/404'



const ErrorPage: NextPage = () => {
  return (
    <div className="container-fluid">
        <Error404/>
    </div>
  )
}

export default ErrorPage