import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";
const initializeApplication =()=>{
initializeApp(firebaseConfig)
}
export default initializeApplication