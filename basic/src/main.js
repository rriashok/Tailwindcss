import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="bg-blue-500 text-white p-10 rounded-xl shadow-xl text-3xl">
    Hello Tailwind CSS
  </div>
<div class="grid grid-cols-5 items-start gap-10 justify-between">
    <div class="bg-amber-200 m-2 p-3 flex-5 inline-block">
      Welcome to AIE India
    </div>

    <div class="bg-amber-200 m-2 p-3 inline-block">
      Welcome to AIE Hyd
    </div>
    <div class="bg-amber-200 m-2 p-3 inline-block">
      Welcome to AIE India
    </div>

    <div class="bg-amber-200 m-2 p-3 inline-block">
      Welcome to AIE Hyd
    </div>
    <div class="bg-amber-200 m-2 p-3 inline-block">
      Welcome to AIE India
    </div>

    <div class="bg-amber-200 m-2 p-3 inline-block">
      Welcome to AIE Hyd
    </div>
    <div class="bg-amber-200 m-2 p-3 inline-block">
      Welcome to AIE India
    </div>

    <div class="bg-amber-200 m-2 p-3 inline-block">
      Welcome to AIE Hyd
    </div>
  </div>

`

setupCounter(document.querySelector('#counter'))
