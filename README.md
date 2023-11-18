# enabrzk-init

## Информация

#### HTML & CSS

.dd-list--show - Активация dropdown menu. Применяется при клике на p.dd-list

#### JS

```js
dropMenu(dropdownList, uniqID) // присвоение .dd-list--show элементу

closeDropMenuOutside(droppedList, idActivateDropdownMenu,idThatActivateDropdownList) // закрыть dropdown menu по клику на странице
```



Эти функции применяются внутри элемента слушателя событий который активирует dropdown меню.

## Как создать экземпляр dropdown

### Шаблон dropdown

```html
      <div class="dropdown">
        <p class="btn menu-btn" {CLICK ON THIS ELEMENT TO ACTIVATE dd-list--show} id="btn-menu-1">
          Menu
          <svg>Here</svg>
        </p>
        <div class="dd-list {HERE IT'S APPEARS}(dd-list--show)" id="dd-list-1">
          <p class="btn dd-item">Docs</p>
          <p class="btn dd-item">Price</p>
          <p class="btn dd-item">About</p>
          <p class="btn dd-item">Contact</p>
        </div>
      </div>
```

### Пример использования в JS

```js
import dropMenu, { closeDropMenuOutside } from './js/dropdown-menu';

const dropInfo = document.querySelector('#btn-menu-1');
const dropInfoItem = document.querySelector('#dd-list-1');

dropInfo.addEventListener('click', () => {
  dropMenu(dropInfoItem, 'dd-list--show');
  closeDropMenuOutside(
    dropInfoItem,
    dropInfo.id,
    dropInfoItem.getAttribute('class').split(' ')[1]
  );
});
```
