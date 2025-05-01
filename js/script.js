function convert() {
    let celcius = parseFloat(document.getElementById('konversi-input').value);
    if (isNaN(celcius)) {
        alert("Masukkan angka yang valid!");
        return;
    }
    let fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('result-input').value = fahrenheit.toFixed(2);

    // Menampilkan cara kalkulasi
    document.getElementById('calculate-detail').value = `(${celcius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}`;
}

function reverse() {
    let fahrenheit = parseFloat(document.getElementById('result-input').value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan angka Fahrenheit yang valid untuk reverse!");
        return;
    }
    let celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('konversi-input').value = celcius.toFixed(2);

    // Menampilkan cara kalkulasi reverse
    document.getElementById('calculate-detail').value = `(${fahrenheit} - 32) × 5/9 = ${celcius.toFixed(2)}`;
}
