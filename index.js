// Creacion de clase “ProductManager” que gestione un conjunto de productos
class ProductManager {
    // Desde su constructor se crea el elemento "productos", iniciandose como un array vacio
    constructor(){
        this.products = [];
    }

    // Método para devolver el arreglo con todos los productos creados hasta ese momento
    getProducts(){
        return this.products
    }

    // Cada producto que se agrega cuenta con propiedades
    addProduct(title, description, price, thumbnail, code, stock){
        // Todas las propiedades del producto que se agrega son obligatorias
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('¡ERROR: Debe ingresar todos los campos!');
        } else {
            // El CODE del producto que se agrega no se puede repetir
            const codeExistente = this.products.find(e => e.code === code);
            // Se crea un ID autoincremental por cada producto agregado, el cual surge de 
            // agregarle 1 al ultimo elemento del array PRODUCTS
            if (!codeExistente) {
                const id = 
                    this.products.length === 0 
                        ? 1 
                        : this.products[this.products.length - 1].id + 1
                const newProduct = {
                    id,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                this.products.push(newProduct)
                console.log(`¡El producto: "${title}", CODE: "${code}" fue agregado exitosamente!`);
            } else {
                console.log(`¡ERROR: El CODE "${code}" ya existe!`);
            }
        }
    }

    // Método para buscar en ID de un producto en particular
    getProductById(idBuscado) {
        const productoBuscado = this.products.find(e => e.id === idBuscado);
        if (productoBuscado) {
            console.log(`El ID buscado por el usuario es del producto: `, productoBuscado);
        } else {
            console.log(`ERROR: El ID "${idBuscado}" no fue encontrado`);
        } 
    }
}

const newProduct = new ProductManager()

console.log(`Get Products inicial: `,newProduct.getProducts());

// Ejemplo de producto agregado correctamente con ID 1//
newProduct.addProduct(
    'Sensor', 
    'Sensor de estacionamiento trasero marca toyota',
    50000,
    './media/fotosensor',
    '113355',
    20,
    )
// Ejemplo de producto agregado correctamente con ID 2//
newProduct.addProduct(
    'Barra', 
    'Barra anti vuelco marca toyota',
    90000,
    './media/fotobarra',
    '779911',
    7,
    )
// Ejemplo de producto agregado correctamente con ID 3//
newProduct.addProduct(
    'Cobertor', 
    'Cobertor caja marca toyota',
    30000,
    './media/fotocobertor',
    '447755',
    9,
    )

// Ejemplo de producto de no se agrega porque tiene el mismo codigo que uno ya agregado
newProduct.addProduct(
    'Nuevo Sensor', 
    'Nuevo Sensor de estacionamiento trasero marca toyota',
    60000,
    './media/fotosensornuevo',
    '113355',
    5,
    )

// Ejemplo de producto de no se agrega porque la faltan campos
newProduct.addProduct(
    'Llanta', 
    'Llanta de aleacion marca toyota',
    70000,
    './media/fotollanta',
    '224466',
    )

console.log(`Get Products final: `,newProduct.getProducts());

// Ejemplos de ID buscado y encontrado
newProduct.getProductById(1);
newProduct.getProductById(2);

// Ejemplo de ID buscado y no encontrado
newProduct.getProductById(5);


