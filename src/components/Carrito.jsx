export const Carrito = ({ cart, removeFromCart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="mx-auto mt-6 w-11/12 max-w-4xl rounded-md border border-s-gray-800 bg-white p-4 shadow-gray-700">
      <h2 className="mb-3 text-center text-xl font-bold text-slate-800">Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-center text-slate-500">Vacío</p>
      ) : (
        <div className="flex flex-col items-center">
          {cart.map((item) => (
            <div
              key={item.id}
              className="mb-2 flex w-full max-w-md items-center justify-between border border-s-gray-800 p-2"
            >
              <div>
                <h3 className="font-semibold text-slate-800">{item.name}</h3>
                <span className="text-sm text-slate-600">Cantidad: {item.quantity}</span>
              </div>
              <span className="rounded-full bg-cyan-700 px-2 py-1 text-xs font-semibold text-white">
                {item.quantity}
              </span>
               <button
                 onClick={() => removeFromCart(item)}
                className="rounded bg-red-700 px-3 py-1 text-sm font-semibold text-white hover:bg-red-800"
  >
                Quitar una unidad
                </button>
            </div>
          ))}
        </div>
      )}
      

      <p className="mt-3 text-center font-semibold text-slate-800">Total: {totalItems}</p>
    </div>
  );
};


