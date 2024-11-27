// DISEÑO
// ######

import { useState } from "react";

// Historial de compras

// manuel@gmail.com | S/. 200 | 24/11/2024

// RESPONSE
// ######
// [
// 	{
// 		"customerEmail": "manuel@gmail.com",
// 		"total": 200.00,
// 		"date": "24/11/2024"
// 	}
// ]
// ######


const HEADERS = ["Correo", "Precio", "Fecha de compra"];


function PurchaseHistory() {
    const [purchases, setPurchases] = useState([
        {
            customerEmail: "ausubel@gmail.com",
            total: 21,
            date: "24/11/2024"
        },
        {
            customerEmail: "manuel@gmail.com",
            total: 23,
            date: "25/11/2024"
        },
        {
            customerEmail: "angelina@gmail.com",
            total: 19,
            date: "24/05/2024"
        },
    ]);
    return (
        <section>
            <h1>Historial de compras</h1>
            <table>
                <thead>
                    <tr>
                        {HEADERS.map((header, index) => (
                            <th Key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(({ customerEmail, total, date }, index) => (
                        <tr key={index}>
                            <td>{customerEmail}</td>
                            <td>S/.{total}</td>
                            <td>{date}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </section>

    )
}
export default PurchaseHistory