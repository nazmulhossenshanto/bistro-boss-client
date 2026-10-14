 
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = ()=>{
  const axiosSecure = useAxiosSecure();
    const {data : menu = [], isPending: isMenuLoading} = useQuery({
        queryKey: ["menu"],
        queryFn: async()=>{
            const res = await axiosSecure.get('/menu'); 
            return res.data;
        }
    })

    return [menu, isMenuLoading]

}

export default useMenu;