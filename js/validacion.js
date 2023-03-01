const form = document.querySelector('form');
        const telefonoInput = document.querySelector('#tel');
    
        form.addEventListener('submit', (event) => {
           
            event.preventDefault();
    
            
            const telefono = telefonoInput.value.trim();
            if (!telefono.match(/^\d{10}$/)) {
                alert('Por favor, ingrese un número de teléfono válido (10 dígitos)');
                telefonoInput.focus();
                return false;
            }
    
        
            form.submit();
        });
