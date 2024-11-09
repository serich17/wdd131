import { totalFees, successTemplate } from "./templates.mjs"
let participants = 1

function participantTemplate() {
    participants += 1
    const htmlOrig = document.querySelector('section')
    console.log(htmlOrig)
    const button = document.getElementById('add')
    const copyHTML = htmlOrig.cloneNode(true)
    copyHTML.querySelector('p').innerText = `Participant ${participants}`
    
    const inputs = copyHTML.getElementsByTagName('input')
    for (let i=0; i< inputs.length; i++) {
        inputs[i].id += participants
        inputs[i].name += participants
        inputs[i].value = ''
    }
    const labels = copyHTML.getElementsByTagName("label")
    for (let i=0; i< labels.length; i++) {
        labels[i].setAttribute('for', inputs[i].id.value)
    }
    console.log(labels)

    console.log(inputs)
    document.querySelector('fieldset').insertBefore(copyHTML, button)
}

function submitForm(event) {
    event.preventDefault()
    let totalFee = totalFees()
    let adult = document.getElementById('adult_name').value
    const info = {name: adult, participants: participants, total: totalFee}

    let message = successTemplate(info)

    document.querySelector('form').classList.add('hide')
    
    const displayMessage = document.getElementById('summary')

    displayMessage.innerHTML = message
}


document.getElementById('add').addEventListener('click', participantTemplate)

document.querySelector('form').addEventListener('submit', submitForm)