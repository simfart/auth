import { authApi } from "shared/api/auth/authApi";

export const signIn = async (payload: { email: string; password: string }) => {
  return await authApi
    .post<{ token: string }>(`/users/login`, payload)
    .then((res) => res.data);
};

import axios from "axios";
import { useQuery } from "react-query";

export const useLogin = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products;
    },
  });
};
export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setIsLoggedIn } = useAuthStore();

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      window.localStorage.setItem("jwt", data.token);

      setIsLoggedIn(true);

      queryClient.invalidateQueries(["user"]);

      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
