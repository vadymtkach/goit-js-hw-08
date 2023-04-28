import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// Create and render gallery items
const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-original-img=${original}>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;

galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

// Create an instance of SimpleLightbox for the gallery
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Close instance on Esc key press
const onEscPress = (event) => {
  const ESC_KEYCODE = "Escape";
  if (event.code === ESC_KEYCODE) {
    lightbox.close();
    document.removeEventListener("keydown", onEscPress);
  }
};

// Handle keydown events
document.addEventListener("keydown", (event) => {
  onEscPress(event);
});

// Prevent default click behaviour
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
});