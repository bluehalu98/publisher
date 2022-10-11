import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

const fnGetDoc = (uid, docid) => {
  /* console.log(docid); */
  const db = getFirestore();
  const docRef = doc(db, uid, docid);
  const docSnap = getDoc(docRef).then((docSnap)=>{
    //console.log("Document data:", docSnap.data());
    $('.detail-date').val(docSnap.data().date)
    $('.detail-time').val(docSnap.data().time)
    $('.detail-title').val(docSnap.data().title)
    $('.detail-desc').val(docSnap.data().desc)
  })//getDoc then
}

const fnDocUpdate = (uid, docid, date, time, title, desc) => {
  return new Promise(res=>{
    const db = getFirestore();
    const docRef = doc(db, uid, docid);
    updateDoc(docRef, {
      date, time, title, desc
    }).then((doc)=>{
      res()
    })//updateDoc then
  })
}

const fnDocDelete = (uid, docid) => {
  return new Promise(res=>{
    const db = getFirestore();
    deleteDoc(doc(db, uid, docid)).then(()=>{
      res()
      alert('일정이 삭제되었습니다.\n일정목록으로 이동합니다.')
    })//deleteDoc then
  })
}

let uid
let docid
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid
    docid = new URLSearchParams(location.search).get('docid')
    fnGetDoc(uid, docid)
  } else {
    alert('로그인 후 사용할 수 있는 서비스입니다.')
    location.href='./index.php'
  }
}); 

$('.update-list-btn').click(async ()=>{
  let date= $('.detail-date').val()
  let time= $('.detail-time').val()
  let title= $('.detail-title').val()
  let desc= $('.detail-desc').val()
  if(!date||!time||!title||!desc){
    alert('모든 항목을 작성하여 주십시오')
    return false
  }
  await fnDocUpdate(uid, docid, date, time, title, desc)
  alert('일정이 수정되었습니다.\n일정목록으로 이동합니다.')
  location.href='./list.php'
})

$('.delete-list-btn').click(async()=>{
  await fnDocDelete(uid, docid)
  location.href='./list.php'
})