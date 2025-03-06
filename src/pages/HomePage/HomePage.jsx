import "./HomePage.css";

function HomePage() {
  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Hello world!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {cards.map((card) => (
          <div key={card} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt={`Album ${card}`}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
