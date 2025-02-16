import {config} from "@/lib/appwrite";
import {createDatabaseApi} from "@/app/api";

export const productsApi = createDatabaseApi({
    databaseId: config.databaseId,
    collectionId: config.productsId,
});