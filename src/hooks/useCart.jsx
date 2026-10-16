import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
     
    const axiosSecure = useAxiosSecure();
    const {user, loading } = useAuth();
    const { refetch , data : cart = [], isPending, error} = useQuery({
        queryKey: ['cart', user?.email] ,
         enabled: !loading && !!user?.email,
        queryFn : async()=>{
            const res = await axiosSecure.get('/carts');
            return res.data;
        }
    });

    return [cart, refetch, isPending, error];
};

export default useCart;