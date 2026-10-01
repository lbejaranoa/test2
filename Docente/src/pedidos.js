//carlos
function calularTotal(pedido){
    return pedido.items.reduce((t,i)=>t+i.precio,0)+pedido.envio;
}
