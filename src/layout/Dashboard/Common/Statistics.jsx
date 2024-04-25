import AdminStatistics from '../../../components/Statistics/AdminStatistics'
import useRole from '../../../hooks/useRole'
import { Helmet } from 'react-helmet-async'

// import GuestStatistics from '../../../components/Dashboard/Statistics/Guest/GuestStatistics'
// import HostStatistics from '../../../components/Dashboard/Statistics/Host/HostStatistics'

const Statistics = () => {
  const [role] = useRole()
  console.log(role)
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      
      {role === 'admin' && <AdminStatistics />}
    </div>
  )
}

export default Statistics