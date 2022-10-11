import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

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

export const fnSignIn = (email, password) => {
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

const fnGoogleSignin = () => {
  return new Promise(res=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth,provider).then((result) => {
      let credential = result.credential;
      let user = result.user;
      res(user)
    }).catch((error) => {
      alert(error.message)
    });
  })
}

const fnRedirection = () =>{
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      location.href='./list.php'
    }
  });
}
fnRedirection()//로그인되어있으면 리스트로 이동

$('input.remember').change(()=>{
  let checked = $('.remember').prop('checked')
  if(checked){
    alert('로컬스트리지를 이용하기 때문에\n개인 pc에서만 사용하세요')
  }
})


$('.section-signin .login-btn').click(async ()=>{
  let email = $('#user-email').val()
  let password = $('#user-password').val()
  if(!email||!password){
    alert('아이디와 비밀번호를 입력하세요')
    return false
  }
  let user = await fnSignIn(email, password)
  if(!user.emailVerified){
    await fnSignOut()
    alert('이메일 인증 후 다시 로그인 해주세요')
    return false
  }
  let checked = $('remember').prop('checked')
  if(checked){
    window.localStorage.setItem('userEmailStorage',email)
    window.localStorage.setItem('userPasswordStorage',password)
  }
  alert('로그인 되었습니다.\n일정목록으로 이동합니다.')
  location.href='./list.php'
})

$('.google-btn').click(async ()=>{
  await fnGoogleSignin()
  alert('구글 계정으로 로그인 되었습니다.\n일정목록으로 이동하겠습니다.')
  location.href='./list.php'
})
