// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const href = {
  listGall: document.querySelector(".gallery"),
};

let gallArray = [];
const gallArr = [];
for (const { preview, original, description } of galleryItems) {
  gallArr.push(`
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`);
}
gallArray = gallArr.join("");
console.log(gallArr);

href.listGall.insertAdjacentHTML("beforeend", gallArray);
href.listGall.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
});

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionAttribute: 'title',
  captionDelay: 250,
});