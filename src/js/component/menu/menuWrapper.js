import menuForm from './menuForm.js';
import menuTitle from './menuTitle.js';

export default function menuWrapper() {
  return `<main class="mt-10 d-flex justify-center">
    <div class="wrapper bg-white p-10">
      ${menuTitle()}
      ${menuForm()}
      <ul id="espresso-menu-list" class="mt-3 pl-0">
      </ul>
    </div>
  </main>
  `;
}
