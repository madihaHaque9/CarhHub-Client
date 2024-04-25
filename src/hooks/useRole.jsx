

import { getRole } from "../api/auth";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole=()=>{
    const {user,loading}=useAuth()
  
    // const [role,setRole]=useState(null);
    // const [loading,setLoading]=useState(true)
    // console.log('role',role)
    // useEffect(() => {
    //     setLoading(true)
    //     if (user?.email) {

    //         getRole(user.email)
    //             .then(data => {
    //                 setRole(data);
    //                 setLoading(false)
    //             })
    //             .catch(error => {
    //                 // Handle error if needed
    //                 console.error("Error fetching role:", error);
    //             });
    //     }
    // }, [user]);
    // return [role,loading]
    const {data: role,isLoading}=useQuery({
      enabled : !loading && !!user?.email,
      queryFn: async ()=> await getRole(user?.email),
      queryKey:['role'],
    });
    return [role,isLoading]
}
export default useRole;