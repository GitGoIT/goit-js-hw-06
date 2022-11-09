const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// 1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
// 3.Добавит элементу класс item.
// 4.После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsEl = document.querySelector("#ingredients");
  
for (const element of ingredients) {
  const newTag = document.createElement("li");
  newTag.textContent = element;
  newTag.classList.add("item");
  ingredientsEl.append(newTag);
};