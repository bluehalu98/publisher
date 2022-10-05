import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

const fnRegister = (email, password) => {
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

const fnSendEmail = (user) => {
  return new Promise(res=>{
    sendEmailVerification(user).then(() => {
     res()
    });
  })
}

export const fnSignOut = () => {
  return new Promise(res=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      res()
    }).catch((error) => {
      alert(error.message)
    });
  })
}

$('.reg-btn').click(async ()=>{
  let email = $('#reg-email').val()
  let password = $('#reg-password').val()
  let user = await fnRegister(email, password)
  await fnSendEmail(user)
  await fnSignOut()
  alert('인증메일이 발송되었습니다.\n이메일 인증 후 다시 로그인해주세요')
  location.href='./index.php'
})