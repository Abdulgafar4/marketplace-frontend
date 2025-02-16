import {config} from "@/lib/appwrite";
import {createDatabaseApi} from "@/app/api";

export const reviewsApi = createDatabaseApi({
    databaseId: config.databaseId,
    collectionId: config.reviewsId,
});