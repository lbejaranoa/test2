//Ana
function calularTotalPedido(pedido){
    return pedido.items.reduce((t,i)=>t+i.precio,0);
}