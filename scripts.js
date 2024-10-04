function show(section) {
    const mainContent = document.getElementById('mainContent');
    
    let content = '';
    
    switch(section) {
        case 'home':
            content = `
                <section id="home">
                    <h2>Bienvenidos al curso</h2>
                    <p>Aprenderás a interactuar con elementos HTML mediante JavaScript.</p>
                </section>`;
            break;
        
        case 'modificarContenido':
            content = `
                <section id="modificarContenido">
                    <h2>Funció per a modificar el contingut HTML mitjançant JavaScript</h2>
                    <pre><code>
function modificarContenido() {
    const contenido = document.getElementById('contenido');
    contenido.textContent = '¡Contingut modificat mitjançant JavaScript!';
}
                    </code></pre>
                    <p>
                        Exemple:
                        <button onclick="modificarContenido()">Modificar Contingut</button>
                    </p>
                    <p id="contenido">Este es un exemple de contingut HTML.</p>
                </section>`;
            break;
        
        case 'modificarAtributos':
            content = `
                <section id="modificarAtributos">
                    <h2>Funció per a modificar els atributs HTML mitjançant JavaScript</h2>
                    <pre><code>
function modificarAtributo() {
    const imagen = document.getElementById('imagenEjemplo');
    imagen.src = 'nueva-imagen.png';
    imagen.alt = 'Nova imatge d'exemple';
}
                    </code></pre>
                    <p>
                        Exemple:
                        <button onclick="modificarAtributo()">Modificar Atribut</button>
                    </p>
                    <img id="imatgeExemple" src="imagen.png" alt="Imatge d'exemple">
                </section>`;
            break;
    }
    
    mainContent.innerHTML = content;
}

function modificarContenido() {
    const contenido = document.getElementById('contenido');
    contenido.textContent = '¡Contingut modificat mitjançant JavaScript!';
}

function modificarAtributo() {
    const imagen = document.getElementById('imagenEjemplo');
    imagen.src = 'nueva-imagen.png';
    imagen.alt = "Nova imatge d'exemple";
}

function modificarAtributo() {
    const imagen = document.getElementById('imatgeExemple');
    imagen.src = 'nueva-imagen.png';
    imagen.alt = "Nova imatge d'exemple";
}
