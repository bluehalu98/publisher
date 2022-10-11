import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

const fnSignIn = (email, password) => {
  return new Promise(res=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user; // auth.currentUser와 동일
      res(user)
    }).catch((error) => {
      alert(error.message)
    });
  })
}

const fnSignOut = () => {
  return new Promise(res=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      res()
    }).catch((error) => {
      alert(error.message)
    });
  })
}

const fnWatchAuth = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid
      $('.user-email-output').html(user.email)
      $('.signin-menu').hide()
      $('.signout-menu').css({'display':'flex'})
    } else {
      fnAutoLogin()
      $('.signin-menu').css({'display':'flex'})
      $('.signout-menu').hide()
    }
  });
}

const fnAutoLogin =async () => {
  let userEmailStorage=   window.localStorage.getItem('userEmailStorage')
  let userPasswordStorage =  window.localStorage.getItem('userPasswordStorage')
  userEmailStorage = JSON.parse(userEmailStorage)
  userPasswordStorage = JSON.parse(userPasswordStorage)
  if(userEmailStorage&&userPasswordStorage){
    await fnSignIn(userEmailStorage,userPasswordStorage )
    location.href='./list.php'
  }
}
fnWatchAuth()

const fnDelCollection = (uid) => {
  return new Promise(res=>{
    const db = getFirestore();
    const batch = writeBatch(db);
    const querySnapshot =  getDocs(collection(db, uid)).then((querySnapshot)=>{
      querySnapshot.forEach((v) => {
        const docRef = doc(db, uid, v.id);
        batch.delete(docRef);
      })//forEach
      batch.commit().then(()=>{
        res()
      })//batch then
    })//getDoc then
  })
}

const fnDelUser = () => {
  return new Promise(res=>{
    const auth = getAuth();
    deleteUser(auth.currentUser).then(() => {
      // User deleted.
      res()
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  })
}

let uid
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid
  }
}); 

$('.signout-btn').click(async ()=>{
  let yn = confirm('로그아웃 하시겠습니까?')
  if(!yn) return false
  window.localStorage.removeItem('userEmailStorage')
  window.localStorage.removeItem('userPasswordStorage')
  await fnSignOut()
  alert('로그아웃 되었습니다.');
  location.href='./index.php'
})

$('.dereg-btn').click(()=>{
  $('.modal').fadeIn()
})

$('.btn-yes').click(async ()=>{
  await fnDelCollection(uid)
  await fnDelUser()
  window.localStorage.removeItem('userEmailStorage')
  window.localStorage.removeItem('userPasswordStorage')
  alert('성공적으로 탈퇴되었습니다.')
  location.href='./index.php'
})

$('.btn-no').click(()=>{
  $('.modal').fadeOut()
})