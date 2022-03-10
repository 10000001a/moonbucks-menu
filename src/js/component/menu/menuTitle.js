export default function menuTitle(menuCount) {
  return `<div class="heading d-flex justify-between">
    <h2 class="mt-1">☕ 에스프레소 메뉴 관리</h2>
    <span class="mr-2 mt-4 menu-count">총 ${menuCount}개</span>
  </div>`;
}
