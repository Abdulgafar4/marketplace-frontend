import { Client, Databases } from 'appwrite';

const client = new Client();
export const config = {
    enpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    databaseId: process.env.NEXT_PUBLIC_DATABASE_ID!,
    sellersId: process.env.NEXT_PUBLIC_SELLERS_ID!,
    wishlistId: process.env.NEXT_PUBLIC_WISHLIST_ID!,
    productsId: process.env.NEXT_PUBLIC_PRODUCTS_ID!,
    reviewsId: process.env.NEXT_PUBLIC_REVIEWS_ID!,
}

client
    .setEndpoint(config.enpoint)
    .setProject(config.projectId);

const databases = new Databases(client);

export { client, databases };
