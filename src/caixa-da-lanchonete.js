class CaixaDaLanchonete 
{
    constructor()
    {
        this.cardapio = {cafe: 3.00, chantily: 1.50, suco: 6.20, sanduiche: 6.50, queijo: 2.00, salgado: 7.25, combo1: 9.50, combo2: 7.50};
        this.extra = {chantily: 1.50, queijo: 2.00};
    };


    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;

        if (itens.length === 0) return "Não há itens no carrinho de compra!";
        if (!['debito', 'credito', 'dinheiro'].includes(metodoDePagamento)) return "Forma de pagamento inválida!";
        
        for (let item of itens) 
        {
            const [codigo, quant] = item.split(',');
            if (!this.menu[codigo]) return "Item inválido!";
            if (Number(quant) <= 0) return "Quantidade inválida!";

            if (this.extras[codigo] && !itens.some(i => i.startsWith(this.extras[codigo]))) 
            {
                return "Item extra não pode ser pedido sem o principal";
            }

            total = total + this.menu[codigo] * Number(quant);
        }

        if (metodoDePagamento === 'dinheiro') 
        {
            total = total * 0.95;
        } else if (metodoDePagamento === 'credito') 
        {
            total = total * 1.03;
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };
