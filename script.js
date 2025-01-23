document.body.style.marginLeft="250px"
document.body.style.marginTop="150px"

let now= new Date()
console.log(now)

let d=document.createElement("div")
d.style.width="850px"
d.style.height="300px"
d.style.backgroundColor="orange"
d.style.display="flex"
d.style.alignItems="center"
d.style.justifyContent="space-evenly"
document.body.appendChild(d)
let h =document.createElement("div")
h.textContent=now.getHours()
setInterval(() => {
    now=new Date()
    h.textContent=now.getHours()
    h.appendChild(ho)
}, 3600000);
h.style.color="white"
h.style.fontSize="90px"
h.style.alignContent="center"
h.style.textAlign="center"
h.style.backgroundColor="black"
h.style.width="221px"
h.style.height="235px"
let ho = document.createElement("p")
ho.style.fontSize="30px"
ho.textContent="Hours"
h.appendChild(ho)
d.appendChild(h) 

let m =document.createElement("div")
m.textContent=now.getMinutes()
setInterval(() => {
    now=new Date()
    m.textContent=now.getMinutes()
    m.appendChild(min)

}, 60000);
m.style.color="white"
m.style.fontSize="90px"
m.style.alignContent="center"
m.style.textAlign="center"
m.style.backgroundColor="black"
m.style.width="221px"
m.style.height="235px"
let min = document.createElement("p")
min.style.fontSize="30px"
min.textContent="Minutes"
m.appendChild(min)
d.appendChild(m)

let t =document.createElement("div")
t.textContent=now.getSeconds()
let set =setInterval(() => {
    now=new Date()
    t.textContent=now.getSeconds()
    t.appendChild(sec)
}, 1000);
setTimeout(()=>{
    clearInterval(set)
},60000)
t.style.color="white"
t.style.fontSize="90px"
t.style.alignContent="center"
t.style.textAlign="center"
t.style.backgroundColor="black"
t.style.width="221px"
t.style.height="235px"
let sec = document.createElement("p")
sec.style.fontSize="30px"
sec.textContent="Seconds"
t.appendChild(sec)
d.appendChild(t)

