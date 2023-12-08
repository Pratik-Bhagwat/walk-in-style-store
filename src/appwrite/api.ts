import { TNewUser } from "@/types";
import { account, appwriteConfig, databases } from "./config";
import { ID, Models, Query } from "appwrite";

export async function createUserAccount(user: TNewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    const newUser = await saveUserToDB({
      id: newAccount.$id,
      email: newAccount.email,
      name: newAccount.name,
      cart: [],
    });
    return newUser;
  } catch (error) {
    return error;
  }
}

export async function saveUserToDB(user: {
  id: string;
  email: string;
  name: string;
  cart: string[];
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);
    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const userAccount = await account.get();
    return userAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getInfiniteProducts({
  pageParam: productParam,
}: {
  pageParam: number;
}) {
  const queries: any[] = [Query.orderDesc("$updatedAt"), Query.limit(9)];

  if (productParam) {
    queries.push(Query.cursorAfter(productParam.toString()));
  }

  try {
    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      queries
    );

    if (!products) throw Error;
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function searchProducts(searchTerm: string) {
  try {
    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      [Query.search("name", searchTerm)]
    );

    if (!products) throw Error;
    console.log(products);
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(productId?: string) {
  if (!productId) throw Error;

  try {
    const product = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      productId
    );

    if (!product) throw Error;

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts() {
  try {
    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId
    );

    if (!products) throw Error;

    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(userId?: string) {
  if (!userId) throw Error;

  try {
    const user = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      userId
    );

    if (!user) throw Error;

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getRandomProducts() {
  try {
    const products = await getAllProducts();
    if (!products) {
      console.log("No products found");
      return;
    }
    const allProducts = products.documents;
    const randomProducts: Models.Document[] = [];
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * allProducts.length);
      randomProducts.push(allProducts[idx]);

      allProducts.splice(idx, 1);
    }
    return randomProducts;
  } catch (error) {
    console.log(error);
  }
}

export async function logout() {
  try {
    const logout = account.deleteSessions();
    return logout;
  } catch (error) {
    console.log(error);
  }
}
