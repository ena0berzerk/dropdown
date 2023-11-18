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
  <p class="btn menu-btn" id="setUniqIdHere">Menu</p>
  <svg>here</svg>
  <!-- dd-list классу присвоить display: none; dd-list--show присвоить display: block -->
  <div class="dd-list" id="setUniqIdHere">
    <p class="btn dd-item">Docs</p>
    <p class="btn dd-item">Price</p>
    <p class="btn dd-item">About</p>
    <p class="btn dd-item">Contact</p>
  </div>
</div>
```
