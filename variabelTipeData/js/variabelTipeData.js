// Data Tahun Footer
const tahun = new Date().getFullYear();
// Text Footer
document.getElementById("hakCipta").innerHTML = `&copy; ${tahun}`;
const form = document.getElementById('regForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const nameInput = document.getElementById('name').value.trim();
      const age = parseInt(document.getElementById('age').value, 10);
      const simChecked = document.getElementById('sim').checked;

      const nameIsNumber = !isNaN(nameInput) && nameInput !== "";

      let message = "";
      if (nameIsNumber) {
        message = 'Nama wajib berupa huruf (string), tidak boleh angka.';
      } else if (nameInput === "") {
        message = 'Nama tidak boleh kosong.';
      } else if (isNaN(age) || age < 0) {
        message = 'Umur tidak valid.';
      } else if (age >= 18) {
        message = `Halo ${nameInput}, kamu sudah berumur ${age} tahun—bisa punya SIM.`;
        message += `<br>Sudah punya SIM: <strong>${simChecked ? 'Ya (true)' : 'Tidak (false)'}</strong>`;
      } else {
        message = `Hai ${nameInput}, umurmu ${age} tahun—maaf, harus minimal 18 tahun.`;
      }

      resultDiv.innerHTML = `<p>${message}</p>`;
    });