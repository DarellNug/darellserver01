// Data Tahun Footer
const tahun = new Date().getFullYear();
// Text Footer
document.getElementById("hakCipta").innerHTML = `&copy; ${tahun}`;
// Operator Pembanding
// Fungsi untuk menghitung operator pembanding
function calcComparisonOperators() {
      const x = +document.getElementById('compX').value;
      const y = +document.getElementById('compY').value;

      document.getElementById('resEq').textContent = x == y;
      document.getElementById('resNeq').textContent = x != y;
      document.getElementById('resLt').textContent = x < y;
      document.getElementById('resGt').textContent = x > y;
      document.getElementById('resLe').textContent = x <= y;
      document.getElementById('resGe').textContent = x >= y;
    }

    document.querySelectorAll('#operator input').forEach(input => {
      input.addEventListener('input', calcComparisonOperators);
    });

    window.addEventListener('DOMContentLoaded', calcComparisonOperators);