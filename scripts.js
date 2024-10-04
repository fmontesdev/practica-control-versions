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
    }
    
    mainContent.innerHTML = content;
}

function modificarContenido() {
    const contenido = document.getElementById('contenido');
    contenido.textContent = '¡Contingut modificat mitjançant JavaScript!';
}
