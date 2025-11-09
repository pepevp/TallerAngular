Para integrar Bootstrap en este proyecto de Angular, se optó por el método que permite una personalización total del framework. Existen dos opciones principales:






Opción 1: CSS Precompilado (Vía angular.json con bootstrap.min.css)

Este método es rápido, pero solo permite sobrescribir los estilos de Bootstrap usando CSS tradicional, sin poder modificar sus variables internas de color, espaciado o tipografía.
Es el que cambia las lineas de comandos de style en el angular.json











Opción 2: Archivos Fuente SCSS (Método Elegido)

Se importa el archivo fuente de Bootstrap (@import "bootstrap/scss/bootstrap";) directamente en src/styles.scss. Este enfoque permite sobrescribir las variables SCSS de Bootstrap (ej. $primary, $spacer) antes de la importación. Esto recompila el framework con nuestros ajustes, logrando un diseño personalizado a la vez que se aprovechan las clases de utilidad de Bootstrap. Se recomienda evitar añadir referencias CSS o JS en angular.json para mantener la coherencia y la capacidad de personalización.

Al hacerlo así, añade lineas especificas en package.json y package-lock.json que hacen posible lam modificacion personalizada.
Al volver a otro equipo, tengo que usar este comando:   npm install     para que revise las dependencias del proyecto y las actualice.


Global (src/styles.scss): Este archivo se utiliza para configurar la apariencia base de toda la aplicación y es el único lugar donde se deben sobrescribir las variables SCSS de Bootstrap (como \$primary o \$spacer) justo antes de importar el framework. Esto permite que Bootstrap se compile con nuestros colores y tamaños personalizados a nivel general.

Local (componente.component.scss): Cada componente utiliza su propio archivo SCSS para estilos específicos o para sobrescribir clases de Bootstrap que solo necesiten cambiar en ese componente. Se recomienda declarar variables SCSS locales dentro de estos archivos para gestionar de manera limpia colores y dimensiones propios del componente, sin afectar la configuración global.




ADICIONAL:
para que funcionen por ejemplo, menus desplegables de boostrap, hace falta instalar una parte especifica de boostrap:

npm install @ng-bootstrap/ng-bootstrap@15.1.1

en especifico esa version del proyecto porque la mas nueva no vale. Despues tambien hay que añadir en el app.module.ts unas lineas para que 
acepte el boostrap, estan comentadas por si hace falta saber cuales son.



Otra cosa:
para añadir emoticonos  es tecla windows + .