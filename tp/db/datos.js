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
      imagen: "/images/products/producto4.png",
      categoria: "Juguetes",
      precio: 1200,
      comentarios:  [
        {
          usuario: "Marcos Gutiérrez",
          texto: "¡Mi perro lo ama! No lo suelta nunca.",
          imagenPerfil: "/images/users/user4.png"
        },
        {
          usuario: "Sofía Vega",
          texto: "Muy bueno, aunque algo chico para razas grandes.",
          imagenPerfil: "/images/users/user2.png"
        },
        {
          usuario: "Lucía Fernández",
          texto: "Es su juguete favorito desde que llegó.",
          imagenPerfil: "/images/users/user1.jpg"
        }
      ]
    },

    
    {
      id: 2,
      nombre: "Correa extensible 5m",
      descripcion: "Para paseos seguros y con libertad.",
      imagen: "/images/products/producto3.png",
      categoria: "Accesorios",
      precio: 3400,
      comentarios: [
        {
          usuario: "Elena Díaz",
          texto: "Fácil de usar y se traba bien. Recomendado.",
          imagenPerfil: "/images/users/user3.png"
        },
        {
          usuario: "Carlos Méndez",
          texto: "Mi perro disfruta mucho más los paseos ahora.",
          imagenPerfil: "/images/users/user6.png"
        },
        {
          usuario: "Romina López",
          texto: "Buena calidad, me sorprendió gratamente.",
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
      comentarios: [
        {
          usuario: "Valentin Paz",
          texto: "Le dejó el pelo brillante. ¡Genial!",
          imagenPerfil: "/images/users/user5.png"
        },
        {
          usuario: "Ana Ríos",
          texto: "El aroma es suave y dura varios días.",
          imagenPerfil: "/images/users/user4.png"
        },
        {
          usuario: "Gabriel Soto",
          texto: "Perfecto para pieles sensibles.",
          imagenPerfil: "/images/users/user2.png"
        }
      ]
    },
    {
      id: 4,
      nombre: "Shampoo neutro para perros",
      descripcion: "Hipoalergénico y con aroma suave.",
      imagen: "/images/products/producto7.png",
      categoria: "Higiene",
      precio: 2200,
      comentarios: [
        {
          usuario: "Valentin Paz",
          texto: "Le dejó el pelo brillante. ¡Genial!",
          imagenPerfil: "/images/users/user5.png"
        },
        {
          usuario: "Ana Ríos",
          texto: "El aroma es suave y dura varios días.",
          imagenPerfil: "/images/users/user1.jpg"
        },
        {
          usuario: "Gabriel Soto",
          texto: "Perfecto para pieles sensibles.",
          imagenPerfil: "/images/users/user2.png"
        }
      ]
    },
    {
      id: 5,
      nombre: "Pelota con sonido",
      descripcion: "Estimula el juego. Hecha de goma natural.",
      imagen: "/images/products/producto5.png",
      categoria: "Juguetes",
      precio: 950,
      comentarios: [
        {
          usuario: "Martina Núñez",
          texto: "Hace un ruido divertido y no se rompe fácil.",
          imagenPerfil: "/images/users/user4.png"
        },
        {
          usuario: "Tomás Herrera",
          texto: "Mi cachorro juega todo el día con ella.",
          imagenPerfil: "/images/users/user3.png"
        },
        {
          usuario: "Luz Morales",
          texto: "Buena para interiores, no daña muebles.",
          imagenPerfil: "/images/users/user1.jpg"
        }
      ]
    },
    {
      id: 6,
      nombre: "Alimento balanceado Premium 3kg",
      descripcion: "Nutrición completa para perros adultos.",
      imagen: "/images/products/producto1.png",
      categoria: "Alimento",
      precio: 7200,
      comentarios: [
        {
          usuario: "Federico Linares",
          texto: "Mi perro mejoró su pelaje desde que lo consume.",
          imagenPerfil: "/images/users/user2.png"
        },
        {
          usuario: "Alicia Robles",
          texto: "Buen precio por la calidad. Le encanta.",
          imagenPerfil: "/images/users/user5.png"
        },
        {
          usuario: "Ricardo Cabrera",
          texto: "Se lo recomendó el veterinario, y fue un acierto.",
          imagenPerfil: "/images/users/user3.png"
        }
      ]
    },
    {
      id: 7,
      nombre: "Set de platos antideslizantes",
      descripcion: "Incluye plato de comida y agua.",
      imagen: "/images/products/producto6.png",
      categoria: "Hogar",
      precio: 2700,
      comentarios:[
        {
          usuario: "Natalia Paredes",
          texto: "No se mueve nada, ideal para perros inquietos.",
          imagenPerfil: "/images/users/user1.jpg"
        },
        {
          usuario: "Santiago Ruiz",
          texto: "Prácticos y fáciles de lavar.",
          imagenPerfil: "/images/users/user3.png"
        },
        {
          usuario: "Lorena Campos",
          texto: "Buen tamaño, se ve resistentes.",
          imagenPerfil: "/images/users/user4.png"
        }
      ]
    },
    {
      id: 8,
      nombre: "Ropa impermeable talla S",
      descripcion: "Perfecto para días de lluvia.",
      imagen: "/images/products/producto9.png",
      categoria: "Ropa",
      precio: 3200,
      comentarios: [
        {
          usuario: "Carla Ayala",
          texto: "Mi perrita va feliz bajo la lluvia ahora.",
          imagenPerfil: "/images/users/user3.png"
        },
        {
          usuario: "Julián Cabrera",
          texto: "Muy buena costura y se adapta bien al cuerpo.",
          imagenPerfil: "/images/users/user4.png"
        },
        {
          usuario: "Delfina Ortiz",
          texto: "Además de funcional, ¡es muy linda!",
          imagenPerfil: "/images/users/user2.png"
        }
      ]
    },
    {
      id: 9,
      nombre: "Transportadora rígida chica",
      descripcion: "Ideal para viajes y visitas al veterinario.",
      imagen: "/images/products/producto10.png",
      categoria: "Accesorios",
      precio: 11000,
      comentarios: [
        {
          usuario: "Ezequiel Blanco",
          texto: "Mi gato va cómodo y seguro en los viajes.",
          imagenPerfil: "/images/users/user5.png"
        },
        {
          usuario: "Florencia Gómez",
          texto: "Muy práctica y fácil de limpiar.",
          imagenPerfil: "/images/users/user1.jpg"
        },
        {
          usuario: "Nicolás Torres",
          texto: "Buena ventilación y espacio interior.",
          imagenPerfil: "/images/users/user4.png"
        }
      ]
    },
    {
      id: 10,
      nombre: "Snack dental x10",
      descripcion: "Ayuda a mantener los dientes limpios.",
      imagen: "/images/products/producto8.png",
      categoria: "Alimento",
      precio: 1300,
      comentarios: [
        {
          usuario: "Verónica Sáez",
          texto: "Le encantan, y su aliento mejoró.",
          imagenPerfil: "/images/users/user1.jpg"
        },
        {
          usuario: "Iván Medina",
          texto: "Perfecto para después de cada comida.",
          imagenPerfil: "/images/users/user4.png"
        },
        {
          usuario: "Julieta Arce",
          texto: "Le dan algo que hacer mientras cuido su salud.",
          imagenPerfil: "/images/users/user2.png"
        }
      ]
    }
  ]
    }


module.exports = data;



