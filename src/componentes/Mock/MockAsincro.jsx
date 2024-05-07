const productos=[
    {
      id: 1,
      title: "Bicicleta Scott Aspect 980",
      price: 620.269,
      description: "Equipada con transmisión de 12 velocidades Shimano y una horquilla Suntour, junto con tecnología de bloqueo remoto para permitir diferentes ajustes del recorrido en función de las necesidades de cada momento. ",
      category: "Bicicletas",
      image: "https://yuhmak.vtexassets.com/arquivos/ids/174057-1200-auto?v=638243375890230000&width=1200&height=auto&aspect=true",
      stock:5
    },
    {
      id: 2,
      title: "Bicicleta Scott Aspect 750",
      price: 575.505,
      description: "bicicleta de montaña rígida sin suspensión trasera, diseñada para ser ligera, eficaz y con un precio razonable. Los frenos son de disco y los componentes de Syncros. Es el modelo perfecto para principiantes",
      category: "Bicicletas",
      image: "https://d2yn9m4p3q9iyv.cloudfront.net/scott/2021/aspect-750/thumbs/1000/b288e.webp",
     stock:3
    },
    {
      id: 3,
      title: "Skate Completo Seal Element",
      price: 169.999,
      description: "Skate Completo Seal Element, un clásico que ofrece rendimiento confiable. Destacado por el logotipo del árbol de ELEMENT en la parte inferior central.",
      category: "Skates",
      image: "https://http2.mlstatic.com/D_NQ_NP_676443-MLU75934653885_042024-O.webp",
      stock:4
    },
    {
      id: 4,
      title: "Skate Hatched White Gold Element",
      price: 169.999,
      description: "La patineta Hatched White Gold presenta nuestra marca clásica en elegantes colores dorados en la parte inferior. Este equipo completo ofrece una conducción suave y lista para la calle para patinadores de muchos niveles, incluido el principiante. Fiables y centrados en el rendimiento, ",
      category: "Skates",
      image: "https://http2.mlstatic.com/D_NQ_NP_950392-MLA49714203013_042022-O.webp",
      stock:6
    },
    {
      id: 5,
      title: "Scooter Pro Envy Prodigy S8",
      price: 344.599,
      description: "El Scooter Envy Prodigy es el modelo para Freestyle numero 1 de ventas en el mundo. Y en esta nueva linea llamado Series 8 ahora presenta una edición Street con componentes específicos para la calle.",
      category: "MonoPatin",
      image: "https://http2.mlstatic.com/D_NQ_NP_738856-MLA49378060477_032022-O.webp",
      stock:2
    },
    {
      id: 6,
      title: "Scooter Pro Bestial Wolf Rocky 12",
      price: 416.799,
      description: "Versión totalmente renovada del Rocky, versión R12, el scooter ideal para los riders más experimentados. Scooter Profesional Nivel Pro Avanzado con tabla color RAINBOW (Tornasolado) y manubrio de color negro.",
      category: "MonoPatin",
      image: "https://http2.mlstatic.com/D_NQ_NP_763921-MLA71388390631_082023-O.webp",
      stock:4
    }
]


export const getProd=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2300);
    })
}

export const getProdById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productId = parseInt(id); // Convertir el ID a número
      const producto = productos.find((producto) => producto.id === productId);
      if (producto) {
        resolve(producto);
      } else {
        reject("Producto no encontrado");
      }
    }, 2300);
  });
};




export const getProdByCategoria = (category)=>{
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(productos.filter((producto)=>producto.category===category))
    },2300)
  });
}