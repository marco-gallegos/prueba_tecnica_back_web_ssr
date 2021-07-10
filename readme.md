# Entrevista Tecnica

## Filosofia

No existe una unica solucion a un problema, simple es mejor que complejo, terminar es una percepcion relativa de quien lo evalua, el trabajo de un programador no es memorizar codigo.

## Cuestionario

- cual es la experiencia con node?
- Cual es la experiencia con frontend?
- sabes sobre deno?
- cual es tu tecnologia favorita y por que?
- cual fue el ultimo lenguaje/framework que aprendiste y cuando?
- sabes que es un ORM?
- sabes de nosql?
- Que sabes sobre patrones de diseño?
  - DDD
  - Repository
  - Facade
  - SOLID
  - CQRS
  - Inyeccion de Dependencias
  - Flux
- sabes de microservicios?
- sabes python
  - que tanto?
  - ai?
  - odoo
- sabes algo de docker

## Reto Tecnico

Resolver en vivo con un limite de tiempo de 30 min.

### Tips (mejorar tiempo)

Inicia por el backend, considera usar nodemon, si usaras un scaffold de create react app o el vue cli desde cero corre el comando en otra terminal mientras terminas el backend.

### Descripcion

Crear un api rest con node y el framework express con un solo endpoint tipo post que reciba en el cuerpo un nombre y regrese el texto: 'hello' + nombre, por defecto si no recibe dicho parametro este tendra por defecto el valor developer, es decir si no envio el nombre el endpoint regresara: 'hello developer'

Crear un frontend con vue o react que consuma el endpoint de nuestro backend y muestre el resultado en la vista dentro de algun componente, se debera usar alguna libreria de global state como redux, vuex o context api para alamacenar el resultado y este es el que se mostrara.
