import headerTitle from './headerTitle.js';
import categoryList from './categoryList.js';

export default function headerWrapper() {
  return `<header class="my-4">
    ${headerTitle()}
    ${categoryList()}
  </header>`;
}
