
const LISTA_PREGUNTAS = [
    {
        pregunta: 'algo que todos amen pero que cesar no tanto?', opciones: ['perros', 'comer', 'musica', 'helado'], respuesta: 'musica'
    },
    {
        pregunta: 'dia de niversario entre cesar y daniela?', opciones: ['cada 7', 'cada 10', 'cada primero', 'cada 20'], respuesta: 'cada 20'
    },
    {
        pregunta: 'como le dice cesar a daniela la mayoria de veces?', opciones: ['mamiela', 'daniela', 'jessica', 'amor'], respuesta: 'mamiela'
    },
    {
        pregunta: 'como se llama el cactus de daniela?', opciones: ['manuel', 'mordelon', 'puntas', 'verde'], respuesta: 'mordelon'
    },
    {
        pregunta: 'algo que solo daniela hace cuando se ducha?', opciones: ['se pone champoo', 'se pone jabon', 'toma una cerveza', 'nada'], respuesta: 'toma una cerveza'
    }
]

let RESPUESTAS = []
let num_pregunta = 0

const Encuesta = (function () {


    let preguntasFormato = []

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
            let opciones_ul = this.createElement('ul', [{ name: 'id', value: 'lista' }])

            for (let i = 0; i < this.opciones.length; i++) {
                let li = this.createElement('li', [])
                let label = this.createElement('label', [])
                let opciones_li = this.createElement('input', [{ name: 'type', value: 'radio' }, { name: 'value', value: this.opciones[i] }, { name: 'name', value: LISTA_PREGUNTAS[num_pregunta].pregunta }])
                label.innerHTML = this.opciones[i]
                li.appendChild(label)
                li.appendChild(opciones_li)
                opciones_ul.appendChild(li)

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
        } else {

            num_pregunta++

        }

        console.log(num_pregunta)
        return num_pregunta
    }

    function changeQuestionMoin() {
        console.log('num pregunta moin', num_pregunta)

        if (num_pregunta === 0) {

            num_pregunta = 0
        } else {

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

    function buttons() {
        const div_next = createElement('div', [{ name: 'id', value: 'botones' }])
        const button_siguiente = createElement('button', [])
        const button_atras = createElement('button', [])
        button_siguiente.innerHTML = 'siguiente'
        button_atras.innerHTML = 'atras'

        div_next.appendChild(button_atras)
        div_next.appendChild(button_siguiente)

        button_siguiente.addEventListener('click', () => {
            console.log('hola')
            changeQuestion()

        })

        return div_next
    }

    function plusResponses() {

        

    }

    return {
        init: function () {

            /*
                        for (let i = 0; i < LISTA_PREGUNTAS.length; i++) {
                            let x = new Pregunta(LISTA_PREGUNTAS[i].pregunta, LISTA_PREGUNTAS[i].opciones)
                            preguntasFormato.push(x.build())
            
                        }
                        const body = document.body.children[2]
                        
                        const div_next = createElement('div', [{ name: 'id', value: 'botones' }])
                        const button_siguiente = createElement('button', [])
                        const button_atras = createElement('button', [])
                        button_siguiente.innerHTML = 'siguiente'
                        button_atras.innerHTML = 'atras'
                
                        div_next.appendChild(button_atras)
                        div_next.appendChild(button_siguiente)
                
                        button_siguiente.addEventListener('click', () => {
                            console.log('hola')
                            changeQuestion()
                
                        })
                        body.appendChild(preguntasFormato[0])
                        body.appendChild(buttons())
            
            
            */

            let current = num_pregunta
            let x = new Pregunta(LISTA_PREGUNTAS[current].pregunta, LISTA_PREGUNTAS[current].opciones)


            const body = document.body.children[2]
            const div_next = createElement('div', [{ name: 'id', value: 'botones' }])
            const button_siguiente = createElement('button', [])
            const button_atras = createElement('button', [])
            button_siguiente.innerHTML = 'siguiente'
            button_atras.innerHTML = 'atras'


            button_siguiente.addEventListener('click', () => {
                console.log(body.children[0].firstChild)
                body.removeChild(body.children[0])
                changeQuestion()
                x = new Pregunta(LISTA_PREGUNTAS[num_pregunta].pregunta, LISTA_PREGUNTAS[num_pregunta].opciones)
                body.appendChild(x.build())
                body.appendChild(div_next)

                let lista = document.getElementById("lista")
                console.log('chiste', lista)

                lista.addEventListener('click', function (event) {

                    console.log(event.target.value)

                })

            })

            button_atras.addEventListener('click', () => {
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

            let lista = document.getElementById("lista")
            console.log('chiste', lista)

            lista.addEventListener('click', function (event) {

                console.log(event.target.value)

            })

        }

    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    // instance d'object Module memoire
    Encuesta.init()
}, false)
