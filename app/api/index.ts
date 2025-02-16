import { config, databases } from "@/lib/appwrite";
import { ID } from "appwrite";

type CreateDTO = Record<string, any>;
type UpdateDTO = {
    id: string;
    data: Record<string, any>;
};

type CollectionConfig = {
    databaseId: string;
    collectionId: string;
};

export const createDatabaseApi = (collectionConfig: CollectionConfig) => {
    return {
        create: async (data: CreateDTO) => {
            return await databases.createDocument(
                collectionConfig.databaseId,
                collectionConfig.collectionId,
                ID.unique(),
                {
                    ...data,
                    $createdAt: new Date().toISOString(),
                }
            );
        },

        getAll: async () => {
            const response = await databases.listDocuments(
                collectionConfig.databaseId,
                collectionConfig.collectionId
            );
            return response.documents;
        },

        getOne: async (id: string) => {
            return await databases.getDocument(
                collectionConfig.databaseId,
                collectionConfig.collectionId,
                id
            );
        },

        update: async ({ id, data }: UpdateDTO) => {
            return await databases.updateDocument(
                collectionConfig.databaseId,
                collectionConfig.collectionId,
                id,
                {
                    ...data,
                    $updatedAt: new Date().toISOString(),
                }
            );
        },

        delete: async (id: string) => {
            return await databases.deleteDocument(
                collectionConfig.databaseId,
                collectionConfig.collectionId,
                id
            );
        },
    };
};