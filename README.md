## Creando una librería de componentes angular con storybook

Crearmos una carpeta con el nombre de la librería por ejemplo "custom-library"

```console
 mis-proyectos/custom-library
```

Abrimos la carpeta con vs code y abrimos la terminal donde instalaremos las dependencias de angular con sin la aplicacion que crea por defecto.para eso ejecutamos el siguiente comnando

```console
 ng new . --create-application=false
```

Generar un proyecto de librería dentro del proyecto con el siguiente comando (Esto generará la librería dentro del mismo workspace sin estructuras adicionales.)

```console
 ng generate library custom-library --no-interactive
```
