// Data Tahun Footer
const tahun = new Date().getFullYear();
// Text Footer
document.getElementById("hakCipta").innerHTML = `&copy; ${tahun}`;
// Operator Logika
// Fungsi untuk menghitung operator logika
function calcLogicOperators() {
      const a = document.getElementById('logicA').checked;
      const b = document.getElementById('logicB').checked;

      document.getElementById('resAnd').textContent = a && b;
      document.getElementById('resOr').textContent = a || b;
      document.getElementById('resNotA').textContent = !a;
      document.getElementById('resNotB').textContent = !b;
    }

    document.querySelectorAll('#operator input').forEach(input => {
      input.addEventListener('change', calcLogicOperators);
    });

    window.addEventListener('DOMContentLoaded', calcLogicOperators);