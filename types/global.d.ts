// Declaración de tipos para importaciones de archivos CSS
declare module "*.css" {
  const estilos: { [clave: string]: string };
  export default estilos;
}
