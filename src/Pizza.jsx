import style from'./Pizza.module.css'
import { useEffect, useState } from "react";

export default function App() {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getPizzas() {
        try {
            const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
            const data = await response.json();
            setPizzas(data.recipes || []); 
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        } finally {
            setLoading(false); 
        }
    }

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="row g-3">
                    {pizzas.map(pizza => (
                        <div className="col-lg">
                            <div className="card">
                                <h2 className={`${style.fontsize}`}>{pizza.title.split(' ').slice(0,3)}</h2>
                                <img src={pizza.image_url} alt={pizza.title}  />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}