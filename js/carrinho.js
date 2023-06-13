function removerItem(event) {
    var botao = event.target;
    var item = botao.closest('.widget-cart-item');
    item.remove();
    atualizarDropdownCarrinho();
  }
  
  function adicionarItem() {
    var item = document.createElement("div");
    item.classList.add("widget-cart-item", "pb-2", "border-bottom");
  
    var closeButton = document.createElement("button");
    closeButton.classList.add("btn-close", "text-danger");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("aria-label", "Remove");
    closeButton.addEventListener("click", function() {
      removerItem(event);
    });
  
    var closeButtonIcon = document.createElement("span");
    closeButtonIcon.setAttribute("aria-hidden", "true");
    closeButtonIcon.innerHTML = "&times;";
  
    closeButton.appendChild(closeButtonIcon);
    item.appendChild(closeButton);
  
    var itemContent = document.createElement("div");
    itemContent.classList.add("d-flex", "align-items-center");
  
    var productImage = document.createElement("a");
    productImage.classList.add("flex-shrink-0");
    productImage.setAttribute("href", "shop-single-v2.html");
  
    var image = document.createElement("img");
    image.setAttribute("src", "img/shop/cart/widget/em breve.png");
    image.setAttribute("width", "64");
    image.setAttribute("alt", "Product");
  
    productImage.appendChild(image);
    itemContent.appendChild(productImage);
  
    var productDetails = document.createElement("div");
    productDetails.classList.add("ps-2");
  
    var productTitle = document.createElement("h6");
    productTitle.classList.add("widget-product-title");
  
    var productLink = document.createElement("a");
    productLink.setAttribute("href", "shop-single-v1.html");
    productLink.textContent = "Em Breve";
  
    productTitle.appendChild(productLink);
    productDetails.appendChild(productTitle);
  
    var productMeta = document.createElement("div");
    productMeta.classList.add("widget-product-meta");
  
    var productPrice = document.createElement("span");
    productPrice.classList.add("text-accent", "me-2");
    productPrice.textContent = "$10.00";
  
    var productQuantity = document.createElement("span");
    productQuantity.classList.add("text-muted");
    productQuantity.textContent = "x 1";
  
    productMeta.appendChild(productPrice);
    productMeta.appendChild(productQuantity);
    productDetails.appendChild(productMeta);
  
    itemContent.appendChild(productDetails);
    item.appendChild(itemContent);
  
    var itensCarrinho = document.getElementById("itens-carrinho");
    itensCarrinho.appendChild(item);
  
    atualizarDropdownCarrinho();
    atualizarNumeroItensCarrinho();
  }
  
  
  function atualizarNumeroItensCarrinho() {
    var numeroItens = document.querySelectorAll('.widget-cart-item').length;
    var numeroItensElement = document.querySelector('.navbar-tool-label');
    numeroItensElement.textContent = numeroItens.toString();
  }
  
  function atualizarDropdownCarrinho() {
    var itensCarrinho = document.getElementById('itens-carrinho');
    var subtotal = calcularSubtotal(itensCarrinho);
    var subtotalFormatted = '$' + subtotal.toFixed(2);
  
    // Atualizar o valor do subtotal na parte visual do carrinho
    var subtotalVisualElement = document.querySelector('#parte-visual-carrinho .text-accent');
    if (subtotalVisualElement) {
      subtotalVisualElement.textContent = subtotalFormatted;
    }
  
    // Atualizar o valor do subtotal no cabeçalho da dropdown
    var subtotalDropdownElement = document.querySelector('.navbar-tool-text #subtotalValue');
    if (subtotalDropdownElement) {
      subtotalDropdownElement.textContent = subtotalFormatted;
    }
  }
  
  
  // Chamar a função para atualizar o valor inicial do subtotal
  atualizarDropdownCarrinho();
  
  
  
  function calcularSubtotal(itensCarrinho) {
    var subtotal = 0;
    var itens = itensCarrinho.getElementsByClassName('widget-cart-item');
  
    for (var i = 0; i < itens.length; i++) {
      var item = itens[i];
      var precoElement = item.querySelector('.widget-product-meta .text-accent');
      var quantidadeElement = item.querySelector('.widget-product-meta .text-muted');
  
      if (precoElement && quantidadeElement) {
        var preco = parseFloat(precoElement.textContent.replace('$', ''));
        var quantidade = parseInt(quantidadeElement.textContent.replace('x', '').trim());
        subtotal += preco * quantidade;
      }
    }
  
    return subtotal;
  }
  
  function atualizarSubtotal() {
    var subtotalValueElement = document.getElementById('subtotalValue');
    var subtotalElement = document.querySelector('.fs-sm .text-accent');
    var subtotal = subtotalElement.textContent;
    subtotalValueElement.textContent = subtotal;
  }
  
  atualizarSubtotal();
  