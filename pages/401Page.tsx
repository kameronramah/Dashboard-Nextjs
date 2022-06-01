import type { NextPage } from 'next'
import Error401 from './components/401'



const ErrorPage: NextPage = () => {
  return (
    <div className="container-fluid">
        <Error401/>
    </div>
  )
}

export default ErrorPage