const data = {
  usuario: {
    nombre: "Laura Torres",
    email: "laura.torres@gmail.com",
    password: "123456", 
    fechaNacimiento: "1995-06-14",
    domicilio: "Calle Ficticia 123, Buenos Aires",
    imagenPerfil: "/images/users/user3.png"
  },

  productos: [
    {
      id: 1,
      nombre: "Juguete mordedor con forma de hueso",
      descripcion: "Ideal para perros pequeños. Material resistente y seguro.",
      imagen: "/images/products/producto4.webp",
      categoria: "Juguetes",
      precio: 1200,
      comentarios: [
        {
          usuario: "Marcos Gutiérrez",
          texto: "¡Mi perro lo ama! No lo suelta nunca.",
          imagenPerfil: "/images/users/user4.png"
        },
        {
          usuario: "Sofía Vega",
          texto: "Muy bueno, aunque algo chico para razas grandes.",
          imagenPerfil: "/images/users/user2.png"
        }
      ]
    },
    {
      id: 2,
      nombre: "Correa extensible 5m",
      descripcion: "Para paseos seguros y con libertad.",
      imagen: "/images/product/producto3.png",
      categoria: "Accesorios",
      precio: 3400,
      comentarios: [
        {
          usuario: "Elena Díaz",
          texto: "Fácil de usar y se traba bien. Recomendado.",
          imagenPerfil: "/images/users/user3.png"
        }
      ]
    },
    {
      id: 3,
      nombre: "Cama acolchada tamaño M",
      descripcion: "Súper cómoda, lavable y duradera.",
      imagen: "/images/products/producto2.png",
      categoria: "Hogar",
      precio: 8500,
      comentarios: []
    },
    {
      id: 4,
      nombre: "Shampoo neutro para perros",
      descripcion: "Hipoalergénico y con aroma suave.",
      imagen: "/imagenes/products/producto7.jpg",
      categoria: "Higiene",
      precio: 2200,
      comentarios: [
        {
          usuario: "Valentin Paz",
          texto: "Le dejó el pelo brillante. ¡Genial!",
          imagenPerfil: "/images/users/user5.jpg"
        }
      ]
    },
    {
      id: 5,
      nombre: "Pelota con sonido",
      descripcion: "Estimula el juego. Hecha de goma natural.",
      imagen: "/images/products/producto5.jpg",
      categoria: "Juguetes",
      precio: 950,
      comentarios: []
    },
    {
      id: 6,
      nombre: "Alimento balanceado Premium 3kg",
      descripcion: "Nutrición completa para perros adultos.",
      imagen: "/images/products/producto1.jpg",
      categoria: "Alimento",
      precio: 7200,
      comentarios: []
    },
    {
      id: 7,
      nombre: "Set de platos antideslizantes",
      descripcion: "Incluye plato de comida y agua.",
      imagen: "/images/products/producto6jpg",
      categoria: "Hogar",
      precio: 2700,
      comentarios: []
    },
    {
      id: 8,
      nombre: "Ropa impermeable talla S",
      descripcion: "Perfecto para días de lluvia.",
      imagen: "/images/products/product9.jpg",
      categoria: "Ropa",
      precio: 3200,
      comentarios: []
    },
    {
      id: 9,
      nombre: "Transportadora rígida chica",
      descripcion: "Ideal para viajes y visitas al veterinario.",
      imagen: "/images/products/producto10.jpg",
      categoria: "Accesorios",
      precio: 11000,
      comentarios: []
    },
    {
      id: 10,
      nombre: "Snack dental x10",
      descripcion: "Ayuda a mantener los dientes limpios.",
      imagen: "/images/products/producto8jpg",
      categoria: "Alimento",
      precio: 1300,
      comentarios: []
    }
  ]
};

module.exports = data;



