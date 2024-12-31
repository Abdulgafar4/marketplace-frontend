import {config, databases} from "@/lib/appwrite";
import {ID} from "appwrite";

export const sellerApi = {
    create: async (data: CreateSellerDTO) => {
        return await databases.createDocument(
            config.databaseId,
            config.sellersId,
            ID.unique(),
            {
                ...data,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }
        );
    },

    getAll: async () => {
        const response = await databases.listDocuments(
            config.databaseId,
            config.sellersId
        );
        return response.documents;
    },

    getOne: async (id: string) => {
        return await databases.getDocument(
            config.databaseId,
            config.sellersId,
            id
        );
    },

    update: async ({ sellerId, data }: UpdateSellerDTO) => {
        return await databases.updateDocument(
            config.databaseId,
            config.sellersId,
            sellerId,
            {
                ...data,
                updatedAt: new Date().toISOString(),
            }
        );
    },

    delete: async (id: string) => {
        return await databases.deleteDocument(
            config.databaseId,
            config.sellersId,
            id
        );
    },
};
