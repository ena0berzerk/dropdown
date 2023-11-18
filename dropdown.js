export default function dropMenu(dropdownList, uniqID) {
 dropdownList.classList.toggle(uniqID);
}

export function closeDropMenuOutside(
 droppedList,
 idActivateDropdownMenu,
 idThatActivateDropdownList
) {
 window.addEventListener('click', (e) => {
   if (e.target.id !== idActivateDropdownMenu) {
     if (droppedList.classList.contains(idThatActivateDropdownList)) {
       droppedList.classList.remove(idThatActivateDropdownList);
     }
   }
 });
}
