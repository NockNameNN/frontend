import { getProducts, getCategories, fetchProductsByCategory, fetchSearchByProducts } from "./requests.js";

const list = document.querySelector('.js-list')
const select = document.querySelector('.js-select')
const search = document.querySelector('.js-search')

getProducts().then((data) => {
    data.products.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item.title
        list.append(li)
    })
})

getCategories().then(data => {
    data.forEach(e => {
        const option = document.createElement('option')
        option.text = e
        select.appendChild(option)
    })
})

select.addEventListener('change', el => {
    list.innerHTML = ''
    fetchProductsByCategory(el.target.value).then(data => {
        data.products.forEach(e => {
            const li = document.createElement('li')
            li.textContent = e.title
            list.append(li)
        })
    })
})

search.addEventListener('change', el => {
    list.innerHTML = ''
    fetchSearchByProducts(el.target.value).then(data => {
        data.products.forEach(e => {
            const li = document.createElement('li')
            li.textContent = e.title
            list.append(li)
        })
    })
})


