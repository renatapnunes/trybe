// Imagem de loading enquanto os produtos são carregados
const imageLoading = document.createElement('img');
imageLoading.className = 'image_loading';
imageLoading.src = './images/loading.png';
imageLoading.alt = 'Carregando produtos'

// Gera URL do produto procurado
const search = document.querySelector('.search');
const url_API = 'https://api.mercadolibre.com/sites/MLB/search?q=';
let url = '';
const generateURL = () => {
  const product = search.value;
  return product === '' ? url = `${url_API}computador` : url = `${url_API}${product}`;
}

// Cria o elemento de imagem do produto
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// Cria os elementos de id, nome, preço e botao adicionar dos produtos
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// Cria os podutos na página
function createProductItemElement({ sku, name, image, salePrice }) {
  const section = document.createElement('section');
  section.className = 'item';

  // Melhora a qualidade da imagem
  /* Linha de código indicada pelo colega Caio Morato (Nuwanda) da Turma 12
  Link da postagem onde ele faz a indicação:
  https://trybecourse.slack.com/archives/C01T2C18DSM/p1623614170092700 */
  const img = image.replace(/-I.jpg/g, '-O.jpg');

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(img));
  section.appendChild(createCustomElement('span', 'item__price', `R$${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho'));

  return section;
}

// Busca na API as informações dos produtos
const sectionItems = document.querySelector('.items');
const getProductsAPI = async () => {
  generateURL();
  sectionItems.appendChild(imageLoading);
  try {
    const resultsApi = await fetch(url);
    const objResults = await resultsApi.json();
    sectionItems.removeChild(imageLoading);
    objResults.results.forEach(async (item) => {      
      const itemInfos = {
        sku: item.id,
        name: item.title,
        image: item.thumbnail,
        salePrice: item.price.toFixed(2),
      };
      sectionItems.appendChild(createProductItemElement(itemInfos));
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Apaga produtos da página
const deleteProducts = () => {
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    sectionItems.removeChild(item);
  });
};

// Captura pelo botão o produto procurado
const buttonSearch = document.querySelector('.button_search');
buttonSearch.addEventListener('click', () => {
  deleteProducts();
  getProductsAPI();
});

// Captura pelo enter o produto procurado
search.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    deleteProducts();
    getProductsAPI();
  }
});

// Salva a lista de itens do carrinho no localStorage
const saveCart = () => {
  localStorage.setItem('savedCartItems', cartItems.innerHTML);
};

// Remove item do carrinho ao ser clicado
function cartItemClickListener(event, salePrice) {
  priceTotal -= salePrice;
  totalPrice.innerText = `Preço total: R$${(priceTotal).toFixed(2)}`;

  numberItemsCart -= 1;
  numberItems.innerText = numberItemsCart;

  if (event.className === 'cart__item') {
    event.remove();
  } else {
    const element = event.parentElement;
    element.className === 'cart__item' ? element.remove() : element.parentElement.remove();
  }

  saveCart();
}

// Cria os elementos de id, nome, preço dos produtos do carrinho
const createCustomElementLi = (className, innerText) => {
  const liSpan = document.createElement('span');
  liSpan.className = className;
  liSpan.innerText = innerText;

  return liSpan;
}

// Cria a lista de produtos no carrinho
function createCartItemElement({ sku, name, salePrice, image }) {
  const cartImage = document.createElement('img');
  cartImage.className = 'cart__item__image';
  cartImage.src = image;

  const span = document.createElement('span');
  span.className = 'cart__item__infos';
  span.appendChild(createCustomElementLi('cart__sku', sku));
  span.appendChild(createCustomElementLi('cart__name', name));
  span.appendChild(createCustomElementLi('cart__price', `R$${salePrice.toFixed(2)}`));
  
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.appendChild(cartImage);
  li.appendChild(span);

  li.addEventListener('click', (event) =>
    cartItemClickListener(event.target, salePrice));

  return li;
}

// Retorna id do produto a ser adicionado no carrinho
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Cria o numero de produtos do carrinho
let numberItemsCart = 0;
const numberItems = document.querySelector('.number_items');
numberItems.innerText = numberItemsCart;

// Cria o preço total do carrinho
let priceTotal = 0;
const totalPrice = document.createElement('p');
totalPrice.innerText = `Preço total: R$${(priceTotal).toFixed(2)}`;
document.querySelector('.total__price').appendChild(totalPrice);

// Adiciona itens no carrinho
const cartItems = document.querySelector('.cart__items');
const createItemForCart = async (skuProduct) => {
  try {
    const infosItemApi = await fetch(`https://api.mercadolibre.com/items/${skuProduct}`);
    const objInfosItem = await infosItemApi.json();
    const itemInfos = {
      sku: objInfosItem.id,
      name: objInfosItem.title,
      salePrice: objInfosItem.price,
      image: objInfosItem.thumbnail,
    };

    priceTotal += itemInfos.salePrice;
    totalPrice.innerText = `Preço total: R$${(priceTotal).toFixed(2)}`;

    numberItemsCart += 1;
    numberItems.innerText = numberItemsCart;

    cartItems.appendChild(createCartItemElement(itemInfos));

    saveCart();
  } catch (error) {
    console.log(error.message);
  }
};

// Captura pelo botao add, o produto a ser add no carrinho
const addItemToCart = () => {
  sectionItems.addEventListener('click', (event) => {
    if (event.target.className === 'item__add') {
      const addProduct = event.target.parentElement;
      const skuProduct = getSkuFromProductItem(addProduct);
      createItemForCart(skuProduct);
    }
  });
};

// Limpa todos os itens do carrinho
const clearCart = () => {
  const items = document.querySelectorAll('.cart__item');
  items.forEach((item) => cartItems.removeChild(item));

  priceTotal = 0;
  totalPrice.innerText = `Preço total: R$${(priceTotal).toFixed(2)}`;

  numberItemsCart = 0;
  numberItems.innerText = numberItemsCart;

  saveCart();
};

const clearButton = document.querySelector('.empty-cart');
clearButton.addEventListener('click', clearCart);


// Remove dados do carrinho e mostra mensagem de compra finalizada
const checkout = document.querySelector('.checkout');
checkout.addEventListener('click', () => {
  const cart = document.querySelector('.cart');
  clearCart();
  Array.from(cart.children).forEach((element) => cart.removeChild(element));
  
  const checkoutImage = document.createElement('img');
  checkoutImage.className = 'image_checkout';
  checkoutImage.src = './images/check.png';
  checkoutImage.alt = 'Compra finalizada!'
  cart.innerText = 'Compra finalizada com sucesso!';
  cart.appendChild(checkoutImage);
});

// Carrega itens do carrinho salvos no localStorage
const loadCart = () => {
  const savedCartItems = localStorage.getItem('savedCartItems');
  cartItems.innerHTML = savedCartItems;
  Array.from(cartItems.children).forEach((li) => {
    const spanInfos = li.lastElementChild;
    const priceText = spanInfos.lastElementChild.innerText;
    const salePrice = Number(priceText.split('$')[1]);

    priceTotal += salePrice;
    numberItemsCart += 1;

    li.addEventListener('click', (event) => 
    cartItemClickListener(event.target, salePrice));
  });
  totalPrice.innerText = `Preço total: R$${(priceTotal).toFixed(2)}`;
  numberItems.innerText = numberItemsCart;
};

window.onload = async function onload() {
  await getProductsAPI();
  await loadCart();
  addItemToCart();
};
