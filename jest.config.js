module.exports = {
    transform: {
      '^.+\\.mjs$': 'babel-jest'
    },
    testEnvironment: "node", // Ambiente de pruebas para Node.js
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.mjs?$", // Patrón para encontrar archivos de prueba
    moduleFileExtensions: ["js", "mjs", "json"], // Extensiones de archivo a incluir en las pruebas
  };
  
  