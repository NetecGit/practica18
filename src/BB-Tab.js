
import { LitElement, html, css } from 'lit-element';

class BBTab extends LitElement {
    static get properties() {
        return {
            arreglo: { type: Array },
            index: { type: Number },
            // Añadir una propiedad para guardar los datos del formulario
            datosFormulario: { type: Object }
        };
    }

    constructor() {
        super();
        this.arreglo = ["Usuario", "Contraseña", "Correo", "Celular"];
        this.index = 0;
        this.datosFormulario = {}; // Inicializar los datos del formulario como un objeto vacío
    }

    // Método para manejar el envío del formulario
    handleSubmit(event) {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();
        const form = this.shadowRoot.querySelector('#formulario');
        const formData = new FormData(form);
        this.datosFormulario = {}; // Reiniciar los datos del formulario
        formData.forEach((value, key) => {
            this.datosFormulario[key] = value;
        });
        this.requestUpdate(); // Solicitar la actualización para reflejar los cambios en la página
    }

    render() {
        return html`
        <form id="formulario" @submit="${this.handleSubmit}">
             ${this.arreglo.map((ele, index) => 
            html`<input 
                     type="text" 
                     name="${ele.toLowerCase()}"  // Asegúrate de que cada input tenga un 'name'
                     placeholder="${ele}" 
                     tabindex="${index}"  // No es necesario incrementar this.index
             /><br/>`)}
             <input type="submit" value="Enviar" />
       </form>
       <!-- Agregar un div para mostrar los datos del formulario -->
       <div>
           ${Object.keys(this.datosFormulario).map(key => html`<p>${key}: ${this.datosFormulario[key]}</p>`)}
       </div>
        `;
    }

     static get styles() {
        return css`
        input[type=text], select {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
          input[type=submit] {
            width: 100%;
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `;
    }
}

customElements.define("bb-tab", BBTab);
