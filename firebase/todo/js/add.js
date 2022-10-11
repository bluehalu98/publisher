import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

let uid
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid
  } else {
    alert('로그인 후 사용할 수 있는 서비스입니다.')
    location.href='./index.php'
  }
}); 

const fnAddDoc = (uid, date, time, title, desc) => {
  return new Promise(res=>{
    var data = {date, time, title, desc,}
    const db = getFirestore();
    addDoc(collection(db,uid),data).then((doc)=>{
      res()
    })
  })
}

$('.add-list-btn').click(async ()=>{
  let date= $('.add-date').val()
  let time= $('.add-time').val()
  let title= $('.add-title').val()
  let desc= $('.add-desc').val()
  if(!date||!time||!title||!desc){
    alert('모든 항목을 작성하여 주십시오')
    return false
  }
  await fnAddDoc(uid, date, time, title, desc);
  alert('일정이 등록되었습니다.')
  location.href='./list.php'
})