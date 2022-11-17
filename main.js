let form = document.querySelector('#memeform');
let imgLink = document.querySelector('input[name="imglink"]');
let topText = document.querySelector('input[name="toptext"]');
let bottomText = document.querySelector('input[name="bottomtext"]');
let memeBoard = document.querySelector('.memeboard');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let newMeme = makeMeme(imgLink.value, topText.value, bottomText.value);

  memeBoard.appendChild(newMeme);

  memeBoard.classList.add('memeboard');

  newMeme.addEventListener('click', function (e) {
    e.currentTarget.remove();
  });

  imgLink.value = '';
  topText.value = '';
  bottomText.value = '';
});

function makeMeme(img, topTxt, bottomTxt, btn) {
  let meme = document.createElement('div');
  let image = document.createElement('img');
  let topT = document.createElement('p');
  let bottomT = document.createElement('p');
  let removeButton = document.createElement('button');
  btn = removeButton;

  image.src = img;
  topT.innerText = topTxt;
  bottomT.innerText = bottomTxt;
  removeButton.innerHTML = '<span>&#88;</span>';

  meme.classList.add('div-meme');
  image.classList.add('img');
  topT.classList.add('top-text');
  bottomT.classList.add('bottom-text');
  removeButton.classList.add('btn');

  meme.append(image, topT, bottomT, btn);

  return meme;
}
