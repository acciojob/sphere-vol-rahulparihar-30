function volume_sphere() {
    let radius = parseFloat(document.getElementById("radius").value);
    let volume = document.getElementById("volume");

    // Validate radius
    if (isNaN(radius) || radius < 0) {
        volume.value = "";
        return false;
    }

    // Calculate volume
    let result = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume.value = result.toFixed(4);

    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
