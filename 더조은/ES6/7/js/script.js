const f1= () => {
  //미국회사컴퓨터서버에서 회원정보를 받아온다 (몇초가 걸릴지 모름)
  return new Promise((resolve,err)=>{//내뒤에 기다리는애가 기다리는동안 할일 resolve:성공, err:실패
    setTimeout(()=>{
      resolve('회원정보')//return과 마찬가지로 resolve뒤에는 코드를 적지않는다
    },2000)
  })
}
const f2=(a)=>{
  //회원정보를 출력한다
  console.log(a);
}
document.querySelector('.btn1').addEventListener('click',()=>{
  f1().then(result=>{
    f2(result)
  })
})
/* ---------------------------------------------------------- */
/* 
  일어나기 (몇초가 걸릴지 모름)
  밥먹기 (몇초가 걸릴지 모름)
  일하기 (몇초가 걸릴지 모름)
  잠자기
*/
const fn1 = ()=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve='일어났음'
    },3000)
  })
}
const fn2 = ()=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve='밥 다 먹었음'
    },3000)
  })
}
const fn3 = ()=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve='일끝났음'
    },3000)
  })
}
const fn4 = ()=>{
    console.log('잠자기');
}
document.querySelector('.btn2').addEventListener('click',()=>{
  /*   
    f1().then(()=>{
      f2().then(()=>{
        fn3().then(()=>{
          fn4()
        })
      })
    }) 
  */
    fn
    
  fn1()
    .then(()=>fn2())
    .then(()=>fn3())
    .then(()=>{fn4()})
})
/* ---------------------------------------------- */
/* 
  물건을 물류창고로 발송
  물류창고에서 우체부에게 전달
  우체부가 고객에게 배달
  구매확정  
*/
let send = obj=>{
  console.log(`물류창고로 ${obj} 배송시작`);
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(obj)  
    },Math.random()*2000+1000)
  })
}
let receive = obj=>{
  console.log(`우체부가 ${obj} 전달받음`);
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(obj)
    },Math.random()*2000+1000)
  })
}
let resend = obj=>{
  console.log(`고객에게 ${obj} 배달시작`);
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(obj)
    },Math.random()*2000+1000)
  })
}
let end = obj=>{
  console.log(`${obj}구매 확정`);
}

/* send('핸드폰')
.then(obj=>receive(obj))
.then(obj=>resend(obj))
.then(obj=>{end(obj)}) */
const buy = async () => {
  obj = await send('핸드폰')
  obj = await receive(obj)
  obj = await resend(obj)
  end(obj)
}
/* buy() */
/* -------------------------------------- */
const add = result=>{
  console.log(result);
  result++
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(result)
    },Math.random()*2000+1000)
  })
}
const multiply = result=>{
  console.log(result);
  result=result*2
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(result)
    },Math.random()*2000+1000)
  })
}
const minus = result=>{
  console.log(result);
  result--
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(result)
    },Math.random()*2000+1000)
  })
}
const result = result=>{
  console.log(result)
}
const afterN = async (n) => {
  n = await add(n)
  n = await multiply(n)
  n = await minus(n)
  result(n)
}
document.querySelector('.btn4').addEventListener('click',()=>{
  let num = Number(document.querySelector('.input4').value)
  afterN(num)
})