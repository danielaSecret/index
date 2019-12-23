
const LISTA_PREGUNTAS = [
    {
        pregunta: 'algo que todos amen pero que cesar no tanto?', opciones: ['perros', 'comer', 'musica', 'helado'], respuesta: 'musica'
    },
    {
        pregunta: 'genero favorito de daniela', opciones: ['anime', 'terror', 'muerte', 'misterio'], respuesta: 'terror'
    },
    {
        pregunta: 'como le dicen a daniela', opciones: ['mamiela', 'dani', 'cesar', 'pepe'], respuesta: 'mamiela'
    }
]



const Encuesta = (function () {

    let num_pregunta = 0

    class Pregunta {
        constructor(pregunta, opciones) {

            this.pregunta = pregunta
            this.opciones = opciones
        }




        createElement(tagName, attributes) {
            const element = document.createElement(tagName)

            for (let i = 0; i < attributes.length; i++) {
                element.setAttribute(attributes[i].name, attributes[i].value)
            }

            return element
        }

        build() {
            const divOut = this.createElement('div', [])
            const div_pregunta = this.createElement('div', [])
            const div_opciones = this.createElement('div', [])

            let pregunta_p = this.createElement('p', [])
            let opciones_ul = this.createElement('ul', [])

            for (let i = 0; i < this.opciones.length; i++) {
                let opciones_li = this.createElement('li', [])
                opciones_li.innerHTML = this.opciones[i]
                opciones_ul.appendChild(opciones_li)

            }

            div_opciones.appendChild(opciones_ul)

            pregunta_p.innerHTML = this.pregunta
            div_pregunta.appendChild(pregunta_p)
            // hide image
            // div.children[0].classList.add('imageHide')
            divOut.appendChild(div_pregunta)
            divOut.appendChild(div_opciones)
            return divOut
        }
    }



    function changeQuestion() {
        console.log('num pregunta', LISTA_PREGUNTAS.length - 1)
        if (num_pregunta === (LISTA_PREGUNTAS.length - 1)) {

            num_pregunta = (LISTA_PREGUNTAS.length - 1)
        }else{

            num_pregunta++

        }


    }

    function changeQuestionMoin() {
        console.log('num pregunta moin', num_pregunta)

        if (num_pregunta === 0) {

            num_pregunta = 0
        }else{

            num_pregunta--


        }

    }

    function createElement(tagName, attributes) {
        const element = document.createElement(tagName)

        for (let i = 0; i < attributes.length; i++) {
            element.setAttribute(attributes[i].name, attributes[i].value)
        }

        return element
    }

    return {
        init: function () {

            let current = num_pregunta
            let x = new Pregunta(LISTA_PREGUNTAS[current].pregunta, LISTA_PREGUNTAS[current].opciones)

            const body = document.body.children[2]
            const div_next = createElement('div', [])
            const button_siguiente = createElement('button', [])
            const button_atras = createElement('button', [])
            button_siguiente.innerHTML = 'siguiente'
            button_atras.innerHTML = 'atras'

            button_siguiente.addEventListener('ontouchend', () => {
                console.log(body.children[0].firstChild)
                body.removeChild(body.children[0])
                changeQuestion()
                x = new Pregunta(LISTA_PREGUNTAS[num_pregunta].pregunta, LISTA_PREGUNTAS[num_pregunta].opciones)
                body.appendChild(x.build())
                body.appendChild(div_next)

            })

            button_atras.addEventListener('ontouchend', () => {
                body.removeChild(body.children[0])

                changeQuestionMoin()
                x = new Pregunta(LISTA_PREGUNTAS[num_pregunta].pregunta, LISTA_PREGUNTAS[num_pregunta].opciones)
                body.appendChild(x.build())
                body.appendChild(div_next)

            })

            console.log(num_pregunta)

            div_next.appendChild(button_atras)
            div_next.appendChild(button_siguiente)

            body.appendChild(x.build())
            body.appendChild(div_next)

        }

    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    // instance d'object Module memoire
    Encuesta.init()
}, false)
