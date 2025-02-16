import {config} from "@/lib/appwrite";
import {createDatabaseApi} from "@/app/api";


export const sellerApi = createDatabaseApi({
    databaseId: config.databaseId,
    collectionId: config.sellersId,
});