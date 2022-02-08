import itemsDefault from "./gallery-items.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"),
};
const galleryMarkup = createGalleryMarkup(itemsDefault);
refs.galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<li class = 'gallery__item'>
<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a></li>`;
    })
    .join("");
}

refs.galleryList.addEventListener("click", onElementClick);

function onElementClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  var lightbox = new SimpleLightbox(".gallery a", {
    nav: true,
    captionsData: "alt",
    captionPosition: "bottom",
  });
}

const onEscKeyPress = (evt) => {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseEsc();
  }
};

function onArrowLeftPress(evt) {
  const ARR_LEFT_KEY_CODE = "ArrowLeft";
  const isArrLeftKey = evt.code === ARR_LEFT_KEY_CODE;
  if (isArrLeftKey) {
    const sources = itemsDefault.map(({ original }) => original);
    let indexOfCurrentImg = sources.indexOf(refs.modalImage.src);
    if (indexOfCurrentImg === 0) {
      indexOfCurrentImg = sources.length;
    }
    refs.modalImage.src = sources[indexOfCurrentImg - 1];
    console.log(indexOfCurrentImg);
  }
}

function onArrowRightPress(evt) {
  const ARR_RIGHT_KEY_CODE = "ArrowRight";
  const isArrRightKey = evt.code === ARR_RIGHT_KEY_CODE;
  if (isArrRightKey) {
    const sources = itemsDefault.map(({ original }) => original);
    let indexOfCurrentImg = sources.indexOf(refs.modalImage.src);
    if (indexOfCurrentImg + 1 > sources.length - 1) {
      indexOfCurrentImg = -1;
    }
    refs.modalImage.src = sources[indexOfCurrentImg + 1];
    console.log(indexOfCurrentImg + 1);
  }
}
