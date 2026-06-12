# Instalación de Node.js, Angular CLI y creación de una aplicación en Linux

## 1. Verificar si Node.js está instalado

```bash
node -v
npm -v
```

Si no está instalado o la versión es muy antigua, continuar con los siguientes pasos.

---

## 2. Instalar NVM (Node Version Manager)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

Recargar la configuración de la terminal:

```bash
source ~/.bashrc
```

Verificar la instalación:

```bash
nvm --version
```

---

## 3. Instalar una versión actual de Node.js

Instalar la versión 22:

```bash
nvm install 22
```

Utilizar esa versión:

```bash
nvm use 22
```

Configurarla como versión predeterminada:

```bash
nvm alias default 22
```

Verificar:

```bash
node -v
npm -v
```

---

## 4. Instalar Angular CLI

```bash
npm install -g @angular/cli
```

Verificar la instalación:

```bash
ng version
```

---

## 5. Crear una nueva aplicación Angular

Ubicarse en el directorio donde se desea crear el proyecto:

```bash
cd Documentos
```

Crear la aplicación:

```bash
ng new mi-aplicacion
```

Durante la creación, responder las preguntas del asistente según las necesidades del proyecto.

---

## 6. Ingresar al proyecto

```bash
cd mi-aplicacion
```

---

## 7. Ejecutar la aplicación

```bash
ng serve
```

o

```bash
ng serve --open
```
o

```bash
ng serve -o
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

## 8. Comandos útiles

Ver versión de Node:

```bash
node -v
```

Ver versión de npm:

```bash
npm -v
```

Ver versión de Angular CLI:

```bash
ng version
```

Crear un componente:

```bash
ng generate component nombre-componente
```

Crear un servicio:

```bash
ng generate service nombre-servicio
```

Detener el servidor de desarrollo:

```
Ctrl + C
```
