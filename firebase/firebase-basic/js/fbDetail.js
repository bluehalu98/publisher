import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
let docid = new URLSearchParams(location.search).get('docid')
/* 세부일정 가져오기 */
const fnGetDoc = () => {
  /* 주소에 적힌 docid를 값을 가져오기 */
  const db = getFirestore();
  const docRef = doc(db, "일정컬렉션", docid);
  const docSnap = getDoc(docRef).then((docSnap)=>{
    if (docSnap.exists()) {
      $('.title').html(docSnap.data().title)
      $('.date').html(docSnap.data().date)
      $('.time').html(docSnap.data().time)
      $('.desc').html(docSnap.data().desc)
      /* console.log("Document data:", docSnap.data()); */
    } else {

    }
  })//getDoc then
}

fnGetDoc()

const fnDeleteDoc = (docid) => {
  return new Promise(res=>{
    const db = getFirestore();
    deleteDoc(doc(db, "일정컬렉션",docid)).then(()=>{
      console.log ('문서삭제완료')
      res()
    })//deleteDoc then
  })
}

$('.delete').click(async ()=>{
  await fnDeleteDoc(docid)
  alert('일정을 삭제했습니다')
  location.href='./index.php'
})