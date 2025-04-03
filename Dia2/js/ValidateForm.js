document.getElementById("Enviado").addEventListener("click", function(event) {
    const nombre = document.getElementById("nombre");
    const Edad = document.getElementById("Edad");
    const LengPro = document.getElementById("LengPro");

    const Nombre_obt = nombre.value.trim();
    const Edad_obt = Edad.value.trim();
    const LengPro_obt = LengPro.value.trim();

//Validaciones
//Validación de Nombre
    if (Nombre_obt === "") {
        nombre.nextElementSibling.textContent = "Por favor, ingresa tu nombre.";
        nombre.focus();
        return;
    }

    const ValNombre = /^[A-Za-z\s]+$/;
    if (!ValNombre.test(Nombre_obt)) {
        nombre.nextElementSibling.textContent = "El nombre solo debe contener letras y espacios.";
        nombre.focus();
        return;
    }

//Validación de Edad
    if (Edad_obt === "" || isNaN(Edad_obt) || parseInt(Edad_obt) <= 0) {
        Edad.nextElementSibling.textContent = "Ingrese una edad válida.";
        Edad.focus();
        return;
    }

//Validación de Lenguaje de Programación
    if (LengPro_obt === "") {
        LengPro.nextElementSibling.textContent = "Por favor, ingresa un lenguaje de programación.";
        LengPro.focus();
        return;
    }
//EL mensaje esperado
    alert(`Hola ${Nombre_obt}, tienes ${Edad_obt} años y ya estas aprendiendo ${LengPro_obt}!`);

//Desafio, aca se hace que el mensaje de la pregunta 
//¿Te gusta estudiar "X"? siempre se muestre correctamente
    const Pregunta = document.getElementById("Pregunta");
    Pregunta.textContent = `¿Te gusta estudiar ${LengPro_obt}? Responde con el número 1 para SÍ o 2 para NO.`;

//Mensaje customizado aparece
    const AlertaCustom = document.getElementById("Alerta");
    AlertaCustom.style.display = "block";
    
    document.getElementById("option1").onclick = function() {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        AlertaCustom.style.display = "none";
    }

    document.getElementById("option2").onclick = function() {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
        AlertaCustom.style.display = "none";
    }
//Mensaje customizado desaparece si se hace click fuera de la alerta
    window.onclick = function(event) {
        if (event.target === AlertaCustom) {
            AlertaCustom.style.display = "none";
        }
    }

    event.preventDefault();
});