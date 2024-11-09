
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
    
    displayMessage = document.getElementById('summary')

    displayMessage.innerHTML = message
}


function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let total = 0
    feeElements.forEach(element =>
        total += parseFloat(element.value)
    )
    console.log(total)

    // once you have your total make sure to return it!
    return total
    }


function successTemplate(info) {
    return `<p>Thank you ${info.name} for registering.
    You have registered ${info.participants} participants and owe $${info.total} in Fees.</p>`
}

document.getElementById('add').addEventListener('click', participantTemplate)

document.querySelector('form').addEventListener('submit', submitForm)