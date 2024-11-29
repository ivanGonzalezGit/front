var contenedorFooter = document.getElementById("cargadorFooter");
var foot = document.createElement("div");

foot.innerHTML= ` 
        <footer>
            <address>
                Talento Tech 2024<br><br>
                Front End<br><br>
                Iván González
            </address>

            <div class="mapa">
                <h3>Dónde encontrarnos:</h3><br><br>
                <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.624014657142!2d-58.565653224892706!3d-34.46169095001026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca55058230acb%3A0xb41f8f30d7204d40!2sFVD%2C%20Patricias%20Argentinas%202672%2C%20B1644%20Victoria%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1729185739750!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                Medios de pago <br><br>
                redes 1<br><br>
                redes 2
            </div>
        </footer>`;

contenedorFooter.appendChild(foot);