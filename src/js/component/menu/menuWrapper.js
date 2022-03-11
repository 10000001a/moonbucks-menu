import menuForm from './menuForm.js';
import menuTitle from './menuTitle.js';

export default function menuWrapper(menuList) {
  return `<main class="mt-10 d-flex justify-center">
    <div class="wrapper bg-white p-10">
      ${menuTitle(menuList.length)}
      ${menuForm()}
      <ul id="espresso-menu-list" class="mt-3 pl-0">
      ${menuList
        .map(
          (
            menu,
            i
          ) => `<li class="menu-list-item d-flex items-center py-2" data-index="${i}">
            <span class="w-100 pl-2 menu-name">${menu}</span>
            <button
              type="button"
              class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
            >
              수정
            </button>
            <button
              type="button"
              class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
            >
              삭제
            </button>
          </li>`
        )
        .join('\n')}
      </ul>
    </div>
  </main>
  `;
}
