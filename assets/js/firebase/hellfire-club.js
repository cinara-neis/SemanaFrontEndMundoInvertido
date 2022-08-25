import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from "./app.js"

export async function subscribeHellfireClub(subscription) {
  const db = getFirestore(app)
  const hellFireclubColletion = collection(db, 'hellfire-clube')
  const docRef = await addDoc(hellFireclubColletion, subscription)
  return docRef.id
}

export async function getHellfireClubSubscriptions() {
  const db = getFirestore(app)
  const hellFireclubColletion = collection(db, 'hellfire-clube')
  const hellFireclubColletionSnapshot = await getDocs(hellFireclubColletion)
  const subscriptions = hellFireclubColletionSnapshot.docs.map(doc => doc.data());
  return subscriptions;
}