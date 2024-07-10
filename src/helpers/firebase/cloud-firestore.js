// Documentación: https://firebase.google.com/docs/firestore?hl=es-419
import { db } from "./firebase"
import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'

export async function getDocuments (uid) { // Obtener todos los documentos
  const tmp = []
  const querySnapshot = await getDocs(collection(db, uid));
  querySnapshot.forEach((doc) => {
  tmp.push({
    idDoc: doc.id,
    ...doc.data()
  })    
  })
  return tmp
}

/** // Añadir documento
 *
 * @param {*} uid ruta en firestore donde quiero que se manden los datos.
 * @param {Object} data objeto en el que estan almacenados los datos del formulario: Ejemplo: {nombre: "",descripcion_breve: "",descripcion: "",fecha: Timestamp}
 * @return {Object} El Objeto insertado con varias propiedades interesantes entre ello el id
 */
export const addDocument = async (uid, data) => await addDoc(collection(db, uid), data) // Añadir documento. Como es asíncrona hay que llamarla con una función para que no haya fallos
// AddDoc genera el ID automático, setDoc no.

/** // Obtener solo 1 documento
     * @param {String} collectionName Nombre de la colección
     * @param {String} reference Referencia del documento a recuperar
     * @returns {Object} Objeto con las columnas del documento o null si no lo encuentra
     */
export const getDocument = async (collectionName, reference) => { // Obtener solo 1 documento
  const docRef = doc(db, collectionName, reference)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return {
      idDoc: docSnap.id,
      ...docSnap.data()
    }
  } else { return null }
}

/** // Borrar documento
 *
 * @param {string} collection nombre de la colección en la que se encuentra el archivo que se va a borrar
 * @param {string} uid código del documento que vamos a borrar
 */
export const deleteDocument = async (collection, uid) => { // Borrar documento
  await deleteDoc(doc(db, collection, uid))
}

/** // Actualizar documento
 * Función que actualiza la información de un documento parcial o completo de firestore db
 *
 * @param {string} uid optiene la uid del documento
 * @param {string} collection
 * @param {Object} data
 */
export const updateDocument = async (uid, collection, data = {}) => await updateDoc(doc(db, collection, uid), data) // Actualizar documento