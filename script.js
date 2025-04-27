const itensCarrinho = document.getElementById('itens-carrinho');
    const totalCarrinho = document.getElementById('total');
    let total = 0;

    function adicionarAoCarrinho(nome, preco) {
      const item = document.createElement('div');
      item.className = 'item-carrinho';
      item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
      itensCarrinho.appendChild(item);

      total += preco;
      totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    }