# Prueba Práctica de Front. 

Realizado por Daniel Serrano Serrano.
Framework utilizado: React.
Implantación de estilos con Css y Bootstrap.

## Explicación de la aplicación.
El trabajo se compone de una pantalla principal con titulo, botón de Login y Registro, así como una pequeña tarjeta con con el estado de tu Login, en el que si no estás logueado, te informa, y si estás logueado de dice con que cuenta lo estás.

En la sección de Registro, muestra un formulario  básico en el que se pide Nombre, Apellido Email y Password, tanto si existe algún error como si la operación de registro es satisfactoria, sale un mensaje de información, bajo el cuadro del formulario. Tras el registro, serás redireccionado a la página principal, para realizar el logueo.
Tanto en los botones de confirmar registro, Login, o modificación de los datos, estarán deshabilitados hasta que no completes los formularios.
 
Una vez logueado, se muestra tu cuenta en la tarjeta de información, y ya podrás acceder a la tabla con todos los usuarios registrados.
 Los botones de funciones van variando, activando unos y desactivando otros, según vas avanzando por las pantallas. Esto lo he realizado con hook useState y jugando con estilos de display de dichos  botones.

En la lista de usuarios, muestro un encabezado con las informaciones Email, Nombre y Apellido. No se muestra el password ya que es una propiedad que no devuelve la Api utilizada. Tampoco muestro los Id, ya que me pareció una información irrelevante.
Contamos con un botón Ver, el cual te abrirá un componente con una card mostrando la información del usuario, Nombre, Apellido, Email, y aquí si muestro el Id.
Debajo, tendrás la opción de borrar o editar la información de dicho usuario, así como de volver a la pantalla principal.

## Decisiones acerca del trabajo.
En este trabajo he decidido no insertar ni Navbar, ni Footer, ya que pensé que era irrelevante, y la prueba no se trataba de ello. Así mismo, he decidido darle un aspecto minimalista, con  bordes redondeados y colores básicos. Insertando una fuente diferente a las contenidas en el sistema, jugando un poco con shadows para intentar crear algo de relieve, y algún efecto mínimo en los botones.
También he tratado de seguir una linea de etiquetas siguiendo las reglas de maquetación semántica (en la medida que nos permite este proyecto tan básico), para no cargarlo de divs innecesariamente, además de intentar facilitar la legibilidad del código.
He ido cargando los componentes en el componente Home, en lugar de cargar páginas completas, con el fin de minimizar el renderizado constante del proyecto.

## Dificultades y soluciones.
He encontrado dificultad al renderizar en el componente usuario, ya que al cargarse con una Id personalizada, no he encontrado el método, por lo que decidí que fuese el único enrutado existente,
El LogOut, lo he realizado sin pantalla a mostrar ya que no vi necesario mostrarlo una vez pulsado el botoń. Lo que si cuenta es con confirmación por parte del usuario, y re-direccionamiento a la página principal.
También me surge un pequeño fallo no resuelto que es la doble confirmación unicamente en el borrado, y que no he encontrado el motivo.
Me surgió al comienzo del proyecto la dificultad de encontrar como realizar la llamada a la Api integrándole el Token, pero tras varias pruebas con Postman, y  consultando en alguna página por medio Google, conseguí solución fácilmente. Una vez esto no encontré mayor dificultad, ya que las llamadas a Api’s, las utilizo con frecuencia.

Mi dificultad la encontré en los estilos y en como realizar el proyecto para que no fuese excesivamente cargado o molesto, y pudiese mostrar claramente su finalidad. También en el modo de implantar los cambios en la pantalla de modo que solo cargase algunos componentes sueltos en lugar de realizar constantes enrutados completos ya que entiendo que la finalidad de un framework como este es el uso de componentes en una página, y no la apertura de constantes páginas.


### Para realizar el arranque, descargar la carpeta y en terminal dentro de la ubicación, ejecutar npm i.