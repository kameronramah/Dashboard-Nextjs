import type { NextPage } from 'next'
import Error500 from './components/500'



const ErrorPage: NextPage = () => {
  return (
    <div className="container-fluid">
        <Error500/>
    </div>
  )
}

export default ErrorPage