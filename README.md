<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Proyecto backend para web de televentas.

## Clonar el proyecto

```bash
https://github.com/manu9/televentas-backend.git
```

## Instalación

```bash
$ npm install
```

## Ejecutar la Aplicación

```bash
$ nest start
```

## DataBase Mysql

```bash
CREATE TABLE product (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     Categoria CHAR(45) NOT NULL,
     Nombre CHAR(45) NOT NULL,
     Precio INT NOT NULL,
     Stock INT NOT NULL,
     URL_Image CHAR(100) NOT NULL,
     PRIMARY KEY (id)
);

INSERT INTO `televenta_db`.`product` (`id`, `categoria`, `nombre`, `precio`, `stock`, `URL_Image`) 
VALUES ('uyriouwyoiuyweoiuyoei', 'Ofertas', 'Arroz Tucapel', '1200', '30', 'kjdfkjdhfgdgidgjkdfjglkdjgdlgkd');
INSERT INTO `televenta_db`.`product` (`id`, `categoria`, `nombre`, `precio`, `stock`, `URL_Image`) 
VALUES ('2','Ofertas', 'Aceite Miraflores', '1200', '30', 'kjdfkjdhfgdgidgjkdfjglkdjgdlgkd');
INSERT INTO `televenta_db`.`product` (`id`, `categoria`, `nombre`, `precio`, `stock`, `URL_Image`) 
VALUES ('3','Ofertas', 'Harina Molino', '2300', '10', 'kjdfkjdhfgdgidgjkdfjglkdjgdlgkd');
```
## Stay in touch

- Author - Manuel Aranda
- Website - [http://localhost:3000/products](http://localhost:3000/products)

## License

Nest is [MIT licensed](LICENSE).
