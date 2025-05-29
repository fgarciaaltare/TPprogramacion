CREATE SCHEMA datos;
USE datos;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100) NOT NULL UNIQUE,
pass VARCHAR(100) NOT NULL,
fecha DATE NOT NULL,
foto_perfil TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  DATETIME NULL DEFAULT NULL
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
nombre_imagen TEXT NOT NULL,
nombre_producto VARCHAR(100) NOT NULL,
descripcion TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  DATETIME NULL DEFAULT NULL,

FOREIGN KEY(id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_post INT NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  DATETIME NULL DEFAULT NULL,

FOREIGN KEY(id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO usuarios(email, pass, fecha, foto_perfil)
VALUES('laura.torres@gmail.com', '123456', '1995-06-14', '/images/users/user3.png'),
('sofia.vega@gmail.com', 'sofi123', '2005-03-21',  '/images/users/user4.png'),
('elena.diaz@gmail.com', '5678', '2000-02-22', '/images/users/user5.png'),
('valentinpaz@gmail.com', 'paz456', '2001-04-18', '/images/users/user6.png'),
('marcosgutierrez@gmail.com', 'marcosg123', '2004-09-28', '/images/users/user7.png');

INSERT INTO productos(id_usuario, nombre_imagen, nombre_producto, descripcion)
VALUES(1, 'https://acdn-us.mitiendanube.com/stores/880/994/products/hueso-rascals-ultra-resitente-nylon1-ff686997e5b9cbba3117055973061204-480-0.jpg', 'Juguete resistente para perros que adoran morder.', 'Ideal para perros pequeños. Material resistente y seguro.'),
(1, 'https://m.media-amazon.com/images/I/51PgZiUQacL._AC_UF894,1000_QL80_.jpg', 'Correa de 5 metros con freno incorporado.', 'Para paseos seguros y con libertad.'),
(2, 'https://http2.mlstatic.com/D_NQ_NP_672891-MLA79536901354_102024-O.webp', 'Cama acolchada tamaño mediano, lavable.', 'Súper cómoda, lavable y duradera.'),
(2, 'https://acdn-us.mitiendanube.com/stores/197/359/products/osspret-cachorro1-a1abfdd38ccbfd1bf216934871943655-1024-1024.jpg', 'Shampoo suave para baño frecuente.', 'Hipoalergénico y con aroma suave.'),
(3, 'https://herspet.com/wp-content/uploads/2022/08/foto.jpg', 'Pelota de plástico que hace ruido al apretar.', 'Estimula el juego. Hecha de goma natural.'),
(3, 'https://http2.mlstatic.com/D_NQ_NP_835947-MLA54584711620_032023-O.webp', 'Alimento balanceado Premium 3kg', 'Nutrición completa para perros adultos.'),
(4, 'https://http2.mlstatic.com/D_818240-MLA80193025968_112024-O.jpg', 'Set de platos antideslizantes', 'Incluye plato de comida y agua.'),
(4, 'https://acdn.mitiendanube.com/stores/880/994/products/piloto-scott-4-2e9d91f5c69abeead617213998796122-1024-1024.jpg', 'Camperita de abrigo impermeable, talle S.', 'Perfecto para días de lluvia.'),
(5, 'https://http2.mlstatic.com/D_NQ_NP_2X_943071-MLA52453199316_112022-F.webp', 'Transportadora rígida chica', 'Ideal para viajes y visitas al veterinario.'),
(5, 'https://http2.mlstatic.com/D_NQ_NP_669133-MLA80171367727_102024-O.webp', 'Snack dental x10', 'Ayuda a mantener los dientes limpios.');

INSERT INTO comentarios(id_post, id_usuario, comentario)
VALUES(2, 1, '¡Se ve riquísimo!'),
(3, 1, '¿Tenés la receta?'),
(4, 1, 'Lo voy a probar.'),

(1, 2, '¡Amo esta tarta!'),
(3, 2, 'La hice y salió genial.'),
(5, 2, 'Me encanta.'),

(2, 1, 'Que rico'),
(3, 1, '¡Necesito la receta!'),
(4, 1, 'Me encanta'),

(1, 3, 'A mi perro le encanta esta pelota.'),
(4, 3, 'Ideal para el patio.'),
(5, 3, 'Duró bastante más que otras pelotas que compré.'),

(1, 5, '¡Estos snacks son los favoritos de mi perrita!'),
(4, 5, 'Funcionan genial.'),
(2, 5, 'Los mastica re fácil.'),

(3, 2, 'Es súper calentito.'),
(5, 2, 'Ideal para los días fríos.'),
(1, 2, 'Buena calidad'),

(2, 3, 'Le dejó el pelo suave.'),
(4, 3, 'Muy buen producto'),
(5, 3, 'Lo recomiendo'),

(1, 1, 'Me encanta'),
(3, 1, 'Muy resistente'),
(2, 1, 'Funciona perfecto.'),

(4, 5, '¡Increible!'),
(1, 5, 'Muy práctico.'),
(3, 5, 'Ahora come siempre a horario.'),

(5, 4, 'Perfecto para salir a pasear'),
(2, 4, 'Muy cómodo y fácil de poner.'),
(4, 4, 'Muy recomendado');






