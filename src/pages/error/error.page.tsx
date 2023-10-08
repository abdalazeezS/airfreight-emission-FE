import error from '../../assets/error.svg';
const ErrorPage = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <h1 className="text-center">Service Unavailable</h1>
      <p>The service is currently unavailable. Please try again later.</p>
      <img src={error} alt="server error" height='50%' />
    </div>
  )
}

export default ErrorPage