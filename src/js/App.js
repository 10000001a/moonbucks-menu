import headerWrapper from './component/header/headerWrapper.js';
import menuWrapper from './component/menu/menuWrapper.js';

export default function App() {
  document.querySelector('#app').innerHTML = `
    <div class="d-flex justify-center mt-5 w-100">
      <div class="w-100">
        ${headerWrapper()}
        ${menuWrapper()}
      </div>
    </div>`;

  console.dir(document.querySelector('#app'));
}
