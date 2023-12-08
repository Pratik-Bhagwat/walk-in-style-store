import { Models } from "appwrite";
import React from "react";

export type TNewUser = {
  name: string;
  email: string;
  password: string;
};

export type TInitialUser = {
  id: string;
  name: string;
  email: string;
  cart: Models.Document[];
};

export type TAuthState = {
  user: TInitialUser;
  setUser: React.Dispatch<React.SetStateAction<TInitialUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
  cart: Models.Document[];
  setCart: React.Dispatch<React.SetStateAction<Models.Document[]>>;
};

export type TSelectedFilter = {
  gender?: string;
  price?: string;
  brand?: string;
};

export type TFilteredProducts = {
  products: Models.DocumentList<Models.Document>;
  selectedFilter: TSelectedFilter;
};

export type TCart = {
  id: number;
  name: string;
  category: string[];
  price: string;
  thumbnail: string;
  imageUrls: string[];
  description: string;
};

export type TCartItem = {
  $id: string;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
};
