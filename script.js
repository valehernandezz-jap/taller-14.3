const products = []

// Función para agregar producto al array y mostrarlo en la lista
const addProduct = (name, price, category) => {
  const product = { name, price, category }
  products.push(product)
  displayProducts(products)
}

// Desestructuro los datos del formulario y agrego el producto
document
  .getElementById('productForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.getElementById('productName').value
    const price = document.getElementById('productPrice').value
    const category = document.getElementById('productCategory').value

    // Desestructuración
    const product = { name, price, category }
    addProduct(product.name, product.price, product.category)

    // Limpio el formulario
    document.getElementById('productForm').reset()
  })

// Muestro los productos en la lista
const displayProducts = (productArray) => {
  const productList = document.querySelector('#productList ul')
  productList.innerHTML = '' // Limpio la lista
  productArray.forEach((product) => {
    const listItem = document.createElement('li')
    listItem.classList.add('list-group-item')
    listItem.textContent = `Nombre: ${product.name}, Precio: $${product.price}, Categoría: ${product.category}`
    productList.appendChild(listItem)
  })
}

// Función para duplicar la lista de productos utilizando el operador SPREAD
document.getElementById('duplicateButton').addEventListener('click', () => {
  const newProduct = { name: 'Nuevo Producto', price: 100, category: 'General' }

  // Agregp el nuevo producto a la lista original
  products.push(newProduct)

  // Muestro la lista actualizada
  displayProducts(products)
})

// Función para filtrar productos por categoría utilizando REST
const filterProductsByCategory = (category, ...allProducts) => {
  if (!category) return allProducts // Si no hay categoría, devuelvo todos los productos
  return allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )
}

// Filtro de productos por categoría
document.getElementById('filterButton').addEventListener('click', () => {
  const categoryFilter = document.getElementById('categoryFilter').value
  const filteredProducts = filterProductsByCategory(categoryFilter, ...products)
  displayProducts(filteredProducts)
})
