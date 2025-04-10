const data = {
    usuario: {
      nombre: "Valentina Ramírez",
      email: "valentina.ramirez@example.com",
      contraseña: "contraseña123",
      domicilio: "Av. Siempreviva 742",
      edad: 31,
      avatar: "/images/users/valentina.jpg"
    },
  
    productos: [
      {
        id: 1,
        nombre: "Golden Retriever",
        descripcion: "Perro familiar, amigable y muy inteligente. Ideal para hogares con niños.",
        imagen: "/images/products/golden.jpg",
        categoria: "medianos",
        comentarios: [
          {
            usuario: "Lucas Peralta",
            texto: "Adoptamos uno hace un mes, ¡es súper cariñoso!",
            imagenPerfil: "/images/users/lucas.jpg"
          },
          {
            usuario: "Micaela Ruiz",
            texto: "Perfecto para acompañar a los chicos. Muy obediente.",
            imagenPerfil: "/images/users/micaela.jpg"
          }
        ]
      },
      {
        id: 2,
        nombre: "Bulldog Francés",
        descripcion: "Pequeño, musculoso y muy juguetón. Excelente para departamentos.",
        imagen: "/images/products/bulldog-frances.jpg",
        precio: 150000,
        categoria: "pequeños",
        comentarios: [
          {
            usuario: "Julián Herrera",
            texto: "No ronca tanto como dicen, es un amor.",
            imagenPerfil: "/images/users/julian.jpg"
          }
        ]
      },
      {
        id: 3,
        nombre: "Labrador Retriever",
        descripcion: "Activo, leal y con gran capacidad de aprendizaje. Ideal para actividades al aire libre.",
        imagen: "/images/products/labrador.jpg",
        precio: 115000,
        categoria: "grandes",
        comentarios: [
          {
            usuario: "Camila Torres",
            texto: "Corre todo el día, pero es un osito de amor.",
            imagenPerfil: "/images/users/camila.jpg"
          }
        ]
      },
      {
        id: 4,
        nombre: "Shih Tzu",
        descripcion: "Pequeño, de carácter dulce y perfecto para interiores.",
        imagen: "/images/products/shihtzu.jpg",
        precio: 90000,
        categoria: "pequeños",
        comentarios: [
          {
            usuario: "Lucía Gómez",
            texto: "Es como tener un peluche con vida.",
            imagenPerfil: "/images/users/lucia.jpg"
          }
        ]
      },
      {
        id: 5,
        nombre: "Pastor Alemán",
        descripcion: "Inteligente, protector y leal. Requiere actividad física y entrenamiento.",
        imagen: "/images/products/pastor-aleman.jpg",
        precio: 130000,
        categoria: "grandes",
        comentarios: [
          {
            usuario: "Nicolás Díaz",
            texto: "Muy noble y atento. Excelente para vigilancia.",
            imagenPerfil: "/images/users/nicolas.jpg"
          }
        ]
      },
      {
        id: 6,
        nombre: "Beagle",
        descripcion: "Curioso, simpático y lleno de energía. Necesita espacio para moverse.",
        imagen: "/images/products/beagle.jpg",
        precio: 95000,
        categoria: "medianos",
        comentarios: [
          {
            usuario: "Florencia Medina",
            texto: "Súper divertido, pero siempre hay que tenerlo vigilado.",
            imagenPerfil: "/images/users/florencia.jpg"
          }
        ]
      },
      {
        id: 7,
        nombre: "Caniche Toy",
        descripcion: "Pequeño, hipoalergénico y muy inteligente. Perfecto para departamentos.",
        imagen: "/images/products/caniche-toy.jpg",
        precio: 85000,
        categoria: "pequeños",
        comentarios: [
          {
            usuario: "Bruno Castro",
            texto: "No suelta pelo, ideal para mi alergia.",
            imagenPerfil: "/images/users/bruno.jpg"
          }
        ]
      },
      {
        id: 8,
        nombre: "Border Collie",
        descripcion: "Extremadamente inteligente y ágil. Necesita ejercicio constante.",
        imagen: "/images/products/border-collie.jpg",
        precio: 140000,
        categoria: "medianos",
        comentarios: [
          {
            usuario: "María Elena",
            texto: "Hace todo lo que le enseñamos, ¡increíble!",
            imagenPerfil: "/images/users/maria.jpg"
          }
        ]
      },
      {
        id: 9,
        nombre: "Dálmata",
        descripcion: "Elegante, fuerte y con mucha energía. Ideal para casas con jardín.",
        imagen: "/images/products/dalmata.jpg",
        precio: 110000,
        categoria: "grandes",
        comentarios: [
          {
            usuario: "Ramiro Soto",
            texto: "Muy sociable y hermoso. Llama mucho la atención.",
            imagenPerfil: "/images/users/ramiro.jpg"
          }
        ]
      },
      {
        id: 10,
        nombre: "Husky Siberiano",
        descripcion: "Aventurero, sociable y resistente al frío. Necesita mucho ejercicio.",
        imagen: "/images/products/husky.jpg",
        precio: 135000,
        categoria: "grandes",
        comentarios: [
          {
            usuario: "Emilia Aguirre",
            texto: "¡Hermoso! Pero hay que tener paciencia, son testarudos.",
            imagenPerfil: "/images/users/emilia.jpg"
          }
        ]
      }
    ]
  };
  
  module.exports = data;


