import ErrorMessage from "./ErrorMessage"
import Loader from './Loader'

const AxiosContainer = (props) => {
  const { fullError, loading, error, loaderMessage, children}= props
  if(loading) return <Loader content={loaderMessage} />
  if (error) return <ErrorMessage error={error} fullError={fullError} />
  return(
    <>
    {children}
    </>
  )
}

export default AxiosContainer