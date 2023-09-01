const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// Exemplo: Filtrando entradas inválidas para JSON
// O exemplo a seguir usa filter() para criar um JSON filtrado com todos seus elementos diferentes de zero, e id numérico.

// JS
// Copy to Clipboard

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

var invalidEntries = 0;

function filterByID(obj) {
  if ("id" in obj && typeof obj.id === "number" && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

var arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 4