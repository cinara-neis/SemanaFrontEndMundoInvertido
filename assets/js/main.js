
import { getHellfireClubSubscriptions, subscribeHellfireClub } from "./firebase/hellfire-club.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionsList = document.getElementById('subscriptions')

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }
  const subscriptionId = await subscribeHellfireClub(subscription)

  txtName.value = ''
  txtEmail.value = ''
  txtLevel.value = ''
  txtCharacter.value = ''

  alert(`inscrito com sucesso: ${subscriptionId}`)
})

async function loalData() {
  const subscriptions = await getHellfireClubSubscriptions()
  subscriptionsList.innerHTML = subscriptions.map(sub => `
    <li class="subscrioptionsList">
      <strong>Name:</strong>
      ${sub.name} 🥷🏻🥷🏻
      <strong>Char:</strong>
       ${sub.character}
    </li>
    `).join('')
  console.log(subscriptions)
}
loalData()