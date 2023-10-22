const vehiculosEnVenta = JSON.parse(localStorage.getItem('vehiculos')) || [];

        function guardarVehiculosEnLocalStorage() {
            localStorage.setItem('vehiculos', JSON.stringify(vehiculosEnVenta));
        }

        function agregarVehiculo() {
            const marca = document.getElementById('marca').value;
            const modelo = document.getElementById('modelo').value;
            const color = document.getElementById('color').value;
            const precio = parseFloat(document.getElementById('precio').value);
            const anio = parseInt(document.getElementById('anio').value);

            const vehiculo = { marca, modelo, color, precio, anio };
            vehiculosEnVenta.push(vehiculo);

            guardarVehiculosEnLocalStorage();
            actualizarListaVehiculosEnDOM();
            document.getElementById('vehiculo-form').reset();

            console.log("Vehículo agregado con éxito.");
        }

        function actualizarListaVehiculosEnDOM() {
            const vehiculosList = document.getElementById('vehiculos-list');
            vehiculosList.innerHTML = '';

            vehiculosEnVenta.forEach((vehiculo, i) => {
                const vehiculoItem = document.createElement('div');
                vehiculoItem.innerHTML = `<p>[${i + 1}] Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}, Color: ${vehiculo.color}, Precio: $${vehiculo.precio}, Año: ${vehiculo.anio}</p>`;
                vehiculosList.appendChild(vehiculoItem);
            });
        }

        actualizarListaVehiculosEnDOM();
