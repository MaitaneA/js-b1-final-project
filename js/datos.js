// Productos
// Tipos de productos y código de emoji correspondiente
const tipos = [
  ["Frutas y vegetales", "127822"],
  ["Panes y pastas", "129366"],
  ["Leche y quesos", "129472"],
  ["Carne y pescado", "129385"],
  ["Cereales y pastas", "127806"]
];

// Datos para construir los objetos de clase Producto más abajo
const datosProductos = [
  // Frutas y vegetales (8)
  {nombre: "Manzanas", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/415/415682.png"},
  {nombre: "Plátanos", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/3143/3143645.png"},
  {nombre: "Tomates", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/1202/1202125.png"},
  {nombre: "Zanahorias", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/883/883760.png"},
  {nombre: "Lechuga", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/15625/15625414.png"},
  {nombre: "Brócoli", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/13988/13988686.png"},
  {nombre: "Fresas", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/590/590772.png"},
  {nombre: "Uvas", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/5376/5376074.png"},
  {nombre: "Naranjas", tipo: "Frutas y vegetales", enlace: "https://cdn-icons-png.flaticon.com/512/590/590767.png"},

  // Panes y pastas (6)
  {nombre: "Pan de molde", tipo: "Panes y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/7093/7093198.png"},
  {nombre: "Barra de pan", tipo: "Panes y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/3014/3014502.png"},
  {nombre: "Croissant", tipo: "Panes y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/7357/7357747.png"},
  {nombre: "Espaguetis", tipo: "Panes y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/17454/17454028.png"},
  {nombre: "Macarrones", tipo: "Panes y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/7419/7419140.png"},
  {nombre: "Pan de pizza", tipo: "Panes y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png"},

  // Leche y quesos (6)
  {nombre: "Leche", tipo: "Leche y quesos", enlace: "https://cdn-icons-png.flaticon.com/512/5125/5125466.png"},
  {nombre: "Queso", tipo: "Leche y quesos", enlace: "https://cdn-icons-png.flaticon.com/512/819/819827.png"},
  {nombre: "Yogur", tipo: "Leche y quesos", enlace: "https://cdn-icons-png.flaticon.com/512/5318/5318811.png"},
  {nombre: "Mantequilla", tipo: "Leche y quesos", enlace: "https://cdn-icons-png.flaticon.com/512/4670/4670983.png"},
  {nombre: "Nata", tipo: "Leche y quesos", enlace: "https://cdn-icons-png.flaticon.com/512/5900/5900684.png"},
  {nombre: "Leche sin lactosa", tipo: "Leche y quesos", enlace: "https://cdn-icons-png.flaticon.com/512/5125/5125321.png"},

  // Carne y pescado (6)
  {nombre: "Muslos de pollo", tipo: "Carne y pescado", enlace: "https://cdn-icons-png.flaticon.com/512/821/821023.png"},
  {nombre: "Filete de ternera", tipo: "Carne y pescado", enlace: "https://cdn-icons-png.flaticon.com/512/1046/1046769.png"},
  {nombre: "Costillas de cerdo", tipo: "Carne y pescado", enlace: "https://cdn-icons-png.flaticon.com/512/815/815949.png"},
  {nombre: "Salmón", tipo: "Carne y pescado", enlace: "https://cdn-icons-png.flaticon.com/512/17531/17531526.png"},
  {nombre: "Atún", tipo: "Carne y pescado", enlace: "https://cdn-icons-png.flaticon.com/512/5371/5371168.png"},
  {nombre: "Gambas", tipo: "Carne y pescado", enlace: "https://cdn-icons-png.flaticon.com/512/2970/2970030.png"},

  // Cereales y pastas (5)
  {nombre: "Arroz", tipo: "Cereales y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/8512/8512339.png"},
  {nombre: "Avena", tipo: "Cereales y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/5098/5098762.png"},
  {nombre: "Cereales desayuno", tipo: "Cereales y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/16779/16779298.png"},
  {nombre: "Quinoa", tipo: "Cereales y pastas", enlace: "https://cdn-icons-png.flaticon.com/512/11854/11854552.png"}
];

// Construimos el array con todos los productos
const productos = datosProductos.map((prod) => {
  return new Producto(prod.nombre, prod.tipo, prod.enlace);
});


// Poblaciones y códigos postales
// Por simplicidad, solo soporta poblaciones/códigos postales en Cantabria.
// Fuentes: https://www.uv.es/goerlich/Ivie/CodPost.html y https://códigospostales.es/listado-de-codigos-postales-de-espana/
const poblaciones = {
  "Alfoz de Lloredo": [39320, 39329, 39525, 39526, 39539, 39590],
  "Ampuero": [39840, 39849, 39850],
  "Anievas": [39451],
  "Arenas de Iguña": [39450, 39451],
  "Argoños": [39197],
  "Arnuero": [39193, 39195],
  "Arredondo": [39813],
  "Bárcena de Cicero": [39760, 39761, 39790, 39791, 39796],
  "Bárcena de Pie de Concha": [39420],
  "Bareyo": [39170, 39190, 39191],
  "Cabezón de la Sal": [39500, 39506, 39507, 39509, 39591, 39592],
  "Cabezón de Liébana": [39571, 39573, 39574],
  "Cabuérniga": [39510, 39511, 39518, 39558],
  "Camaleño": [39582, 39586, 39587, 39588, 39589],
  "Camargo": [39600, 39608, 39609],
  "Campoo de Enmedio": [39200, 39212, 39213, 39291, 39491],
  "Campoo de Yuso": [39290, 39291, 39292, 39293, 39294],
  "Cartes": [39311, 39460],
  "Castañeda": [39650, 39660],
  "Castro-Urdiales": [39700, 39706, 39707, 39708, 39709, 39780, 39798],
  "Cieza": [39407],
  "Cillorigo de Liébana": [39580, 39583, 39584, 39585],
  "Colindres": [39750],
  "Comillas": [39520, 39528],
  "Corvera de Toranzo": [39680, 39682, 39697, 39699],
  "El Astillero": [39610, 39611, 39613],
  "Entrambasaguas": [39715, 39716, 39719],
  "Escalante": [39193, 39795],
  "Guriezo": [39778, 39780, 39786, 39787, 39788, 39880],
  "Hazas de Cesto": [39730, 39738, 39739],
  "Hermandad de Campoo de Suso": [39210, 39211, 39212, 39213],
  "Herrerías": [39549, 39550, 39551, 39594],
  "Lamasón": [39550],
  "Laredo": [39770, 39777],
  "Las Rozas de Valdearroyo": [39416, 39417],
  "Liérganes": [39718, 39722, 39727],
  "Liendo": [39776],
  "Limpias": [39778, 39820],
  "Los Corrales de Buelna": [39400, 39408, 39460],
  "Los Tojos": [39517, 39518],
  "Luena": [39682, 39687, 39688],
  "Marina de Cudeyo": [39130, 39719, 39792],
  "Mazcuerras": [39509, 39592],
  "Medio Cudeyo": [39619, 39710, 39718, 39724, 39792],
  "Meruelo": [39192],
  "Miengo": [39310, 39312, 39318],
  "Miera": [39723, 39725, 39728],
  "Molledo": [39420, 39430, 39438, 39439],
  "Noja": [39180],
  "Peñarrubia": [39580],
  "Penagos": [39627],
  "Pesaguero": [39572, 39574],
  "Pesquera": [39491],
  "Piélagos": [39120, 39470, 39477, 39478, 39479, 39612],
  "Polaciones": [39556, 39557],
  "Polanco": [39312, 39313],
  "Potes": [39570],
  "Puente Viesgo": [39670, 39679],
  "Ramales de la Victoria": [39800, 39805, 39809, 39811, 39815],
  "Rasines": [39860],
  "Reinosa": [39200],
  "Reocín": [39530, 39538, 39539, 39590, 39591],
  "Ribamontán al Mar": [39140, 39146, 39150, 39160],
  "Ribamontán al Monte": [39793, 39794],
  "Rionansa": [39553, 39554, 39559],
  "Riotuerto": [39720, 39723],
  "Ruesga": [39728, 39812, 39815],
  "Ruente": [39510, 39513],
  "Ruiloba": [39527],
  "San Felices de Buelna": [39409],
  "San Miguel de Aguayo": [39491],
  "San Pedro del Romeral": [39683, 39686],
  "San Roque de Riomiera": [39726, 39728],
  "San Vicente de la Barquera": [39540, 39547, 39548, 39549],
  "Santander": [39001, 39002, 39003, 39004, 39005, 39006, 39007, 39008, 39009, 39010, 39011, 39012],
  "Santillana del Mar": [39314, 39330, 39360, 39390, 39530],
  "Santiurde de Reinosa": [39490, 39491],
  "Santiurde de Toranzo": [39689, 39691, 39698],
  "Santoña": [39197, 39740, 39749],
  "Saro": [39639],
  "Selaya": [39696],
  "Soba": [39728, 39805, 39806, 39807, 39808, 39813],
  "Solórzano": [39717, 39738, 39791],
  "Suances": [39340, 39350, 39360],
  "Torrelavega": [39300, 39315, 39316, 39317],
  "Tresviso": [39580],
  "Tudanca": [39555],
  "Udías": [39507],
  "Val de San Vicente": [39548, 39549, 39560, 39569, 39594],
  "Valdáliga": [39528, 39592, 39593],
  "Valdeolea": [39410, 39418],
  "Valdeprado del Río": [39248, 39417, 39419],
  "Valderredible": [39220, 39229, 39230, 39232, 39250, 39419],
  "Valle de Villaverde": [39880],
  "Vega de Liébana": [39575, 39577],
  "Vega de Pas": [39682, 39683, 39685],
  "Villacarriedo": [39639, 39640, 39649],
  "Villafufre": [39630, 39638],
  "Voto": [39761, 39762, 39764, 39766]
};