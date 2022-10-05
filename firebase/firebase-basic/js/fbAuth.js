import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

/* 이메일 회원등록 함수 */
const fnRegi = (email, password) => {
  return new Promise(res=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      let user = result.user
      res(user)
    }).catch((error) => {
      alert(error.message)
    });
  })
}

/* 이메일 인증 함수 */
const fnVerify = (user) => {
  return new Promise(res=>{
    sendEmailVerification(user).then(() => {
     res()
    });
  })
}

/* 로그아웃 함수 */
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

/* 로그인 함수 */
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

/* 회원탈퇴 함수 */
const fnDeregister = () =>{
  return new Promise(res=>{
    const auth = getAuth();
    deleteUser(auth.currentUser).then(() => {
      res()
    }).catch((error) => {
      alert(error.message)
    });
  })
}
/* 이메일 회원가입하기 */
$('.email-regi-btn').click(async () => {
  let email = $('.user-email').val()
  let password = $('.user-password').val()
  let user = await fnRegi(email, password)
  alert('회원가입성공')
  await fnVerify(user)  
  await fnSignOut()
  alert('인증 메일을 확인 후 다시 로그인 해주세요') 
})

/* 로그인하기 */
$('.login-btn').click(async ()=>{
  let email = $('.login-email').val()
  let password = $('.login-password').val()
  let user = await fnSignIn(email, password)
  if(!user.emailVerified){
    fnSignOut()
    alert('이메일 인증을 해주세요')
  }
})

/* 로그아웃하기 */
$('.logout-btn').click(async ()=>{
  await fnSignOut()
  alert('로그아웃되었습니다')
})

/* 실시간 로그인 확인하기 */
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    //로그인된상태
    $('.login-before').hide()
    $('.login-after').show()
    $('.uid').append(`${user.uid}`)
    $('.email').append(`${user.email}`)
  } else {
    //로그아웃된상태
    $('.login-before').show()
    $('.login-after').hide()
  }
});

$('.deregister').click(async ()=>{
  await fnDeregister()
  alert('회원탈퇴 되었습니다.')
})

$('.google-login').click(()=>{
  return new Promise(res=>{
    //팝업로그인시 팝업창이 해제되어야 있어야 함
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    
    signInWithPopup(auth,provider).then((result) => {
      let credential = result.credential;
      let user = result.user;
      res()
    }).catch((error) => {
      alert(error.message)
    });
  })
  
})