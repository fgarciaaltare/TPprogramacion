CREATE SCHEMA datos;
USE datos;
CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100) NOT NULL UNIQUE,
contrasena VARCHAR(100) NOT NULL,
fecha DATE NOT NULL,
dni BIGINT NOT NULL UNIQUE,
foto_perfil TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);
CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
nombre_imagen TEXT NOT NULL,
nombre_producto VARCHAR(100) NOT NULL,
descripcion TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE
);
CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_post INT NOT NULL,
id_usuario INT NOT NULL,
comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE
);
INSERT INTO usuarios(email, contrasena, fecha, dni, foto_perfil)
VALUES('laura.torres@gmail.com', '123456', '1995-06-14', '40255742', '/images/users/user3.png'),
('sofia.vega@gmail.com', 'sofi123', '2005-03-21', '46129314', '/images/users/user4.png'),
('elena.diaz@gmail.com', '5678', '2000-02-22', '41937284', '/images/users/user5.png'),
('valentinpaz@gmail.com', 'paz456', '2001-04-18', '42724694', '/images/users/user6.png'),
('marcosgutierrez@gmail.com', 'marcosg123', '2004-09-28', '45365932', '/images/users/user7.png');

INSERT INTO productos(id_usuario, nombre_imagen, nombre_producto, descripcion)
VALUES(1, 'hueso_goma.jpg', 'Hueso de goma', 'Juguete resistente para perros que adoran morder.'),
(1, 'camita_perro.jpg', 'Cama para perro', 'Cama acolchada tamaño mediano, lavable.'),
(2, 'pelota_ruidosa.jpg', 'Pelota ruidosa', 'Pelota de plástico que hace ruido al apretar.'),
(2, 'collar_luminoso.jpg', 'Collar luminoso', 'Collar LED para paseos nocturnos.'),
(3, 'snacks_carne.jpg', 'Snacks sabor carne', 'Premios crocantes sabor carne para entrenamiento.'),
(3, 'abrigo_invierno.jpg', 'Abrigo de invierno', 'Camperita de abrigo impermeable, talle S.'),
(4, 'shampoo_neutro.jpg', 'Shampoo neutro', 'Shampoo suave para baño frecuente.'),
(4, 'correa_extensible.jpg', 'Correa extensible', 'Correa de 5 metros con freno incorporado.'),
(5, 'dispensador_comida.jpg', 'Dispensador de comida', 'Dispensador automático programable.'),
(5, 'arnes_antitirones.jpg', 'Arnés antitirones', 'Arnés que evita tirones en los paseos.');

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

(3, 6, 'Es súper calentito.'),
(5, 6, 'Ideal para los días fríos.'),
(1, 6, 'Buena calidad'),

(2, 7, 'Le dejó el pelo suave.'),
(4, 7, 'Muy buen producto'),
(5, 7, 'Lo recomiendo'),

(1, 8, 'Me encanta'),
(3, 8, 'Muy resistente'),
(2, 8, 'Funciona perfecto.'),

(4, 9, '¡Increible!'),
(1, 9, 'Muy práctico.'),
(3, 9, 'Ahora come siempre a horario.'),

(5, 10, 'Perfecto para salir a pasear'),
(2, 10, 'Muy cómodo y fácil de poner.'),
(4, 10, 'Muy recomendado');






