use easyaccess;

//! ****************  LOGIN *****************

//? ------- CREANDO TABLA USUARIOS DEL PANEL PARA LOGIN -----------

create table panel_users (id_user BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
rol varchar(250) not null,
nombre varchar(250),
pass varchar(250),
created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

//? ------- CREANDO TRABLA ROLES DE USUARIO PARA LOGIN ----------


create table roles (rol varchar(250) PRIMARY KEY,
created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);


//? ------ AGREGAR LA FOREING KEY ---------

alter table panel_users add FOREIGN KEY (rol) REFERENCES roles(rol);

//? ----- CREANDO INNER JOIN ROLES -----------------
DELIMITER $$
DROP PROCEDURE IF EXISTS setRoles $$
CREATE PROCEDURE setRoles ( IN _rol varchar(250))
BEGIN
INSERT INTO roles (rol) VALUES (_rol);
END $$
DELIMITER ;

LLAMAR FUNCION PARA AGREGAR DATOS
CALL setRoles("superusuario");

//? ----- CREANDO INNER JOIN PANEL USERS -----------------

DELIMITER $$
DROP PROCEDURE IF EXISTS setPanelusers $$
CREATE PROCEDURE setPanelusers ( IN _rol varchar(250), IN _nombre varchar(250), IN _pass varchar(250))
BEGIN
INSERT INTO panel_users (rol, nombre, pass) VALUES (_rol, _nombre,
_pass);
END $$
DELIMITER ;

LLAMAR FUNCION PARA AGREGAR DATOS
CALL setPanelusers("admin", "administrador", "admin123");

//? -------- INNER JOIN ----------
SELECT * FROM roles INNER JOIN panel_users ON panel_users.rol = roles.rol WHERE roles.rol = 'usuario';


//! ***************************** /// NOTAS ************************

//? ------- CREANDO TABLA NOTAS DEL PANEL PARA LOGIN -----------
create table notas (id_nota BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre varchar(250) not null,
id_reporte bigint not null,
nota TEXT,
created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

//? ------ AGREGAR LA FOREING KEY ---------
alter table notas add FOREIGN KEY (id_reporte) REFERENCES reportes(id_reporte);

//? ----- CREANDO INNER JOIN NOTAS-----------------
DELIMITER $$
DROP PROCEDURE IF EXISTS setnotas $$
CREATE PROCEDURE setnotas ( IN _nombre varchar(250), IN _id_reporte bigint, IN _nota TEXT)
BEGIN
INSERT INTO notas (nombre, id_reporte, nota) VALUES (_nombre, _id_reporte,
_nota);
END $$
DELIMITER ;

CALL setnotas("usuario", "6", "HOLA ESTO ES UNA PRUEBA")

// ****** SABER LAS NOTAS DE UN SOLO REPORTE POR ID
SELECT * FROM notas INNER JOIN reportes  ON reportes.id_reporte = notas.id_reporte WHERE reportes.cuenta = '8';
// ***** VER TODAS LAS NOTAS DE UNA CUENTA QUE HAYA HECHO REPORTE
SELECT * FROM notas INNER JOIN reportes  ON reportes.id_reporte = notas.id_reporte WHERE reportes.cuenta = '12345';







// TODO----------- ALTERAR TABLA PARA QUE UN CAMPO SEA UNICO -----------
ALTER TABLE panel_users ADD UNIQUE(nombre);
//TODO ----------- ALTERAR TABLA PARA CAMBIAR NOMBRE A UNA COLUMNA -----------
ALTER TABLE notas RENAME COLUMN created TO fecha_nota;