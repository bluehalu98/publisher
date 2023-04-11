import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

const fnGetList = (uid) => {
  const db = getFirestore();
  const q = query(collection(db, uid), orderBy("date","desc")); //내림차순
  getDocs(q).then((querySnapshot)=>{
    if(querySnapshot.docs.length===0){
      $('.oops').show()
      return false
    }
    querySnapshot.docs.forEach((doc) => {
      $('.list-container').append(`
      <li>
        <p class='date-container'>
          <span>
            <img src='./img/list/icon-calendar.png' alt='' />
            ${doc.data().date}
          </span>
          <span>
            <img src='./img/list/icon-clock.png' alt='' />
            ${doc.data().time}
          </span>
        </p>
        <p class='title-container'>
          <span>${doc.data().title}</span>
          <a href='./detail.php?docid=${doc.id}'><img src='./img/list/more.png' alt='' /></a>
        </p>
        <img class='line' src='./img/login/line-dashed.png' alt='' />
      </li>
    `)
    });
  })//then
}


let uid
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid
    fnGetList(uid)
  } else {
    alert('로그인 후 사용할 수 있는 서비스입니다.')
    location.href='./index.php'
  }
}); 