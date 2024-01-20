document.addEventListener("DOMContentLoaded", function() {
    const sideInputLuas = document.getElementById('squareSide');
    const displayAreaLuas = document.getElementById('displayLuas');
    const btnHitungLuas = document.getElementById('btnhitungLuas');
    const btnResetLuas = document.getElementById('btnResetLuas');

    btnHitungLuas.addEventListener("click", function() {
        hitungLuas(this.innerText);
    });

    btnResetLuas.addEventListener("click", function() {
        hitungLuas(this.innerText);
    });

    function hitungLuas(e) {
        const sisi = parseFloat(sideInputLuas.value);

        if (isNaN(sisi)) {
            alert("Silakan masukkan angka yang valid.");
            return;
        }

        if (e == "Reset") {
            sideInputLuas.value = "";
            displayAreaLuas.innerHTML = "";
        } else {
            const luas = sisi * sisi;
            var hasilText = "L = S X S <br> L = " + sisi + " X " + sisi + "<br> L = " + luas;
            displayAreaLuas.innerHTML = hasilText;
            console.log("L = S x S");
            console.log("L = " + sisi + " x " + sisi);
            console.log("L = " + luas);
        }
    }

    const sideInputKeliling = document.getElementById('squareSide-keliling');
    const displayAreaKeliling = document.getElementById('displayKeliling');
    const btnHitungKeliling = document.getElementById('btnhitungKeliling');
    const btnResetKeliling = document.getElementById('btnresetKeliling');

    btnHitungKeliling.addEventListener("click", function() {
        hitungKeliling(this.innerText);
    });

    btnResetKeliling.addEventListener("click", function() {
        hitungKeliling(this.innerText);
    });

    function hitungKeliling(e) {
        const sisiKeliling = parseFloat(sideInputKeliling.value)
        if (isNaN(sisiKeliling)) {
            alert("Silakan masukkan angka yang valid.");
            return;
        }

        if (e == "Reset") {
            sideInputKeliling.value = "";
            displayAreaKeliling.innerHTML = "";
        } else {
            const keliling = 4 * sisiKeliling;
            var hasilText = "K = 4 X S <br> K = 4 X " + sisiKeliling + "<br> K = " + keliling;
            displayAreaKeliling.innerHTML = hasilText;
            console.log("K = 4 x " + sisiKeliling);
            console.log("K = " + keliling);
        }
    }
});
