const API = 'http://localhost:8080/api'


export const getAllBooksApi = API + '/books'
export const getSingleBookApi = (id) => API + '/books/' + id
export const rentBookApi = (id) => API + '/books/rent/' + id