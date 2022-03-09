export default function categoryList() {
  const CATEGORY_LIST_DATA = [
    { name: 'espresso', showingName: '☕ 에스프레소' },
    { name: 'frappuccino', showingName: '🥤 프라푸치노' },
    { name: 'blended', showingName: '🍹 블렌디드' },
    { name: 'teavana', showingName: '🫖 티바나' },
    { name: 'dessert', showingName: '🍰 디저트' },
  ];

  return `<nav class="d-flex justify-center flex-wrap">
    ${CATEGORY_LIST_DATA.map((categoryData) => {
      return `<button
        data-category-name="${categoryData.name}"
        class="cafe-category-name btn bg-white shadow mx-1"
      >
        ${categoryData.showingName}
      </button>`;
    }).join('')}
  </nav>`;
}
