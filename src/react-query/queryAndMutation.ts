import {
  createUserAccount,
  getAllProducts,
  getProductById,
  getRandomProducts,
  logout,
  searchProducts,
  signInAccount,
} from "@/appwrite/api";
import { TNewUser } from "@/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { toast } from "sonner";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: TNewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSearchProducts = (searchTerm: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH_POSTS, searchTerm],
    queryFn: () => searchProducts(searchTerm),
    enabled: !!searchTerm,
  });
};

export const useGetProductById = (productId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });
};

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_PRODUCTS],
    queryFn: getAllProducts,
  });
};

export const useGetUserById = (userId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_BY_ID, userId],
    queryFn: () => getProductById(userId),
    enabled: !!userId,
  });
};

export const useGetRandomProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RANDOM_PRODUCTS],
    queryFn: () => getRandomProducts(),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      toast.success("logout successfull");
    },
    onError: () => {
      toast.error("logout failed");
    },
  });
};
