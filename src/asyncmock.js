const products = [
    { 
        id: 1, 
        name: 'Iphone 13', 
        price: 1000, 
        category: 'Moviles', 
        img:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { 
        id: 2, 
        name: 'HP 15S-fq2159ns', 
        price: 1734, 
        category: 'Ordenadores', 
        img:'https://blog.soltekonline.com/content/images/2019/11/0-2.jpg', 
        stock: 25, 
        description:'Descripcion del HP 15S I3Core'
    },
    { 
        id: 3, 
        name: 'Playstation5', 
        price: 876, 
        category: 'Consolas', 
        img:'https://cdn.mena-tech.com/wp-content/uploads/2020/06/s2.jpg', 
        stock: 25, 
        description:'Descripcion de la Playstation5'
    },
    { 
        id: 4, 
        name: 'Reddragon Keyboard', 
        price: 65, 
        category: 'Perifericos', 
        img:'https://hardzone.es/app/uploads-hardzone.es/2018/06/Switches-para-teclados-mec%C3%A1nicos-01.jpg', 
        stock: 25, 
        description:'Descripcion del teclado mecanico reddragon'
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(products => products.id === parseInt(id)))
        }, 2000)
    })
}