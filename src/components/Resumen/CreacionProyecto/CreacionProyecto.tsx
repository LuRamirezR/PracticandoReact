const CreacionProyecto = () => {
  return (
    <div>
      <h2>Creacion de un proyecto de React</h2>
      <p>
        Para instalar bun por primera vez en el PC, ingresa{" "}
        <a href="https://github.com/oven-sh/bun/releases" target="_blank">
          al repositorio
        </a>
      </p>
      <p>
        Descarga el archivo correspondiente a Windows (por ejemplo,{" "}
        <strong>bun-windows-x64.zip</strong>).
      </p>
      <p>
        Extrae el contenido del archivo descargado en una carpeta de tu
        preferencia (por ejemplo, <strong>C:\Bun</strong>).
      </p>
      <p>
        Dentro de la carpeta extraída, verás el ejecutable{" "}
        <strong>bun.exe</strong>.
      </p>
      <p>
        Agrega Bun al PATH: Abre la configuración de Variables de entorno:
        Presiona Win + S, escribe "Variables de entorno" y selecciona la opción
        "Editar las variables de entorno del sistema". En la sección Variables
        del sistema, busca la variable Path y haz clic en "Editar". Agrega la
        ruta donde extrajiste <strong>bun.exe</strong> (por ejemplo,{" "}
        <strong>C:\Bun</strong>).
      </p>
      <p>
        Verifica la instalación Abre una nueva terminal (Command Prompt o
        PowerShell) y ejecuta:
        <pre>
          <code>bun --version</code>
        </pre>
      </p>
      <p>
        Creación de proyecto con bun
        <pre>
          <code>bun create vite@latest projectreact</code>
        </pre>
      </p>
    </div>
  );
};

export default CreacionProyecto;
