import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

/* 일정추가 함수 */
const fnAddDoc = (date, time, title, desc) => {
  return new Promise(res=>{
    let data = {
      date : date,
      time : time,
      title : title,
      desc : desc
    }
    const db = getFirestore();
    addDoc(collection(db,"일정컬렉션"),data).then((doc)=>{
      console.log(doc.id)
      res()
    })
  })
}

/* 일정추가하기 */
$('.add-list').click(async ()=>{
  let date = $('.ipt-date').val()
  let time = $('.ipt-time').val()
  let title = $('.ipt-title').val()
  let desc = $('.ipt-desc').val()
  await fnAddDoc(date, time, title, desc)
})

/* 일정출력하기 */
$('.get-list').click(async ()=>{
  const db = getFirestore();
  getDocs(collection(db, "일정컬렉션")).then((querySnapshot)=>{
    $('.output').empty()
    querySnapshot.docs.forEach((doc) => {
      $('.output').append(`
        <p>
          날짜 : ${doc.data().date}<br>
          제목 : ${doc.data().title}<br>
          <a href='./detail.php?docid=${doc.id}'>상세보기</a>
        </p>
      `)
    });
  })
})