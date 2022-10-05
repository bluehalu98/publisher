import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { fnSignOut } from "./fbRegister.js";
import { fnSignIn } from "./fbSignIn.js";

const fnWatchAuth = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      $('.user-email-output').html(user.email)
      $('.signout-menu').show()
      $('.signin-menu').hide()
      let url = location.href
      if(url.match('list.php')) return false
      location.href= './list.php'
    } else {
      fnAutoLogin()
      $('.signout-menu').hide()
      $('.signin-menu').show()
    }
  });
}

const fnAutoLogin =async () => {
  let userEmailStorage=   window.localStorage.getItem('userEmailStorage')
  let userPasswordStorage =  window.localStorage.getItem('userPasswordStorage')
  userEmailStorage = JSON.parse(userEmailStorage)
  userPasswordStorage = JSON.parse(userPasswordStorage)
  console.log(userEmailStorage,userPasswordStorage);
  if(userEmailStorage&&userPasswordStorage){
    await fnSignIn(userEmailStorage,userPasswordStorage )
    location.href='./list.php'
  }
}

fnWatchAuth()

$('.signout-btn').click(async ()=>{
  let yn = confirm('로그아웃 하시겠습니까?')
  if(!yn) return false
  window.localStorage.removeItem('userEmailStorage')
  window.localStorage.removeItem('userPasswordStorage')
  await fnSignOut()
  alert('로그아웃 되었습니다.');
  location.href='./index.php'
})


