export function getProducts() {
    const url = 'https://dummyjson.com/products/';
    return fetch(url).then((response) => response.json());
}

export function getCategories() {
    return fetch('https://dummyjson.com/products/categories').
        then(response => response.json());
}

export function fetchProductsByCategory(category) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(response => response.json())
}

export function fetchSearchByProducts(word) {
    return fetch(`https://dummyjson.com/products/search?q=${word}`)
        .then(response => response.json()) 
}
