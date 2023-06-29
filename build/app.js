"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _bd = require("./config/bd.mjs");
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _index = require("./routes/index.mjs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var corsOptions = {
  origin: 'http://localhost:5173',
  // Orígenes permitidos, puede ser un solo valor o un arreglo de valores
  methods: ['GET', 'POST'],
  // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
};

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _cors["default"])(corsOptions));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use('/catalogo/autos/', _index.autosRoute);
app.use('/catalogo/marcas', _index.makesRoutes);
//app.use('/chat',chatRoute)
app.use(_index.usersRoutes);
app.set('view engine', 'ejs'); // indicamos que lanzara una vista con ejs
app.set("views", "./src/views"); // indicamos la ruta de las vistas

(0, _bd.execute)();
app.listen(3000, function () {
  console.log("El servidor esta corriendo en el 3000 🚀");
});
var _default = app;
exports["default"] = _default;