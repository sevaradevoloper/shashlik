function toggleMenu(id, el){
  const menu = document.getElementById(id);
  menu.style.display = (menu.style.display==='flex')?'none':'flex';
  el.classList.toggle("active");
}