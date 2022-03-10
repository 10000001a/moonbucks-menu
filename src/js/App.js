import headerWrapper from './component/header/headerWrapper.js';
import menuWrapper from './component/menu/menuWrapper.js';

export default function App() {
  const espressoMenuList = [];

  // eslint-disable-next-line no-unused-vars
  const submitMenu = (_) => {
    const inputEl = document.querySelector('#espresso-menu-name');

    if (inputEl.value === '') return;

    espressoMenuList.push(inputEl.value);
    inputEl.value = '';
    render();
  };

  const render = () => {
    document.querySelector('#app').innerHTML = `
    <div class="d-flex justify-center mt-5 w-100">
      <div class="w-100">
        ${headerWrapper()}
        ${menuWrapper(espressoMenuList)}
      </div>
    </div>`;

    document
      .querySelector('#espresso-menu-submit-button')
      .addEventListener('click', submitMenu);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        submitMenu();
      }
    });
  };

  render();
}
