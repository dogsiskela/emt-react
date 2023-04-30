import { getAllBooksApi, getSingleBookApi, rentBookApi } from "./apis";
import { sendGetRequest, sendPostRequest } from "./requests";


export async function fetchAllBooks() {
    return sendGetRequest(getAllBooksApi);
}

export async function fetchSingleBook(id) {
    return sendGetRequest(getSingleBookApi(id));
}

export async function rentBook(id) {
    return sendPostRequest(rentBookApi(id),{});
}