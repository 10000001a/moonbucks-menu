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

  const updateMenu = ({ target }) => {
    espressoMenuList[target.parentNode.dataset.index] =
      window.prompt('메뉴 수정');

    render();
  };

  const deleteMenu = ({ target }) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      espressoMenuList.splice(target.parentNode.dataset.index, 1);
    }

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

    document.querySelector('.wrapper').addEventListener('click', (e) => {
      if (e.target) {
        if (e.target.id === 'espresso-menu-submit-button') {
          submitMenu();
        }

        if (e.target.classList.contains('menu-edit-button')) {
          updateMenu(e);
        }

        if (e.target.classList.contains('menu-remove-button')) {
          deleteMenu(e);
        }
      }
    });

    document.addEventListener('keydown', ({ key }) => {
      if (key === 'Enter') {
        submitMenu();
      }
    });
  };

  render();
}
