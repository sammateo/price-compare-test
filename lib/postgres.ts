import { Product, Price } from "@/data/Products";
import { Pool } from "pg";

const pool = new Pool({
	user: "postgres",
	password: "Vinbarjam_1",
	host: "localhost",
	port: 5432,
	database: "pricecomparetest",
});

export const getProducts = async () => {
	let productList: Product[] = [];
	let testList: Product[] = [];
	let priceList: Price[] = [];
	try {
		const client = await pool.connect();
		console.log("connected to db");
		// productList = (await client.query("SELECT * FROM grocery.products"))
		productList = (
			await client.query(
				`SELECT 
                pro.name,pro.category,pro.slug,pro.description, array_to_json(array_agg(row_to_json(t.*))) AS prices 
            FROM  grocery.products pro LEFT JOIN  
                (
                    SELECT supermarket, price, currency, product_id
                    FROM grocery.prices
                    WHERE product_id IN (SELECT id FROM grocery.products)
                ) t
                ON t.product_id = pro.id
                GROUP BY(pro.name,pro.category,pro.slug, pro.description)
                ORDER BY pro.name ASC
            ;`
				// 	`SELECT
				//     name, array_to_json(array_agg(row_to_json(t.*))) AS prices
				// FROM  grocery.products pro LEFT JOIN
				//     (
				//         SELECT supermarket, price, currency, product_id
				//         FROM grocery.prices
				//         WHERE product_id IN (SELECT id FROM grocery.products)
				//     ) t
				//     ON t.product_id = pro.id
				//     GROUP BY(name)
				// ;`
			)
		).rows;
		// priceList = (await client.query("SELECT * FROM grocery.prices")).rows;
		client.release();
	} catch (error) {
		console.error("Error executing query", error);
	}

	return productList;
};
export const getProductFromSlug = async (slug: string) => {
	let product: Product | null = null;

	try {
		const client = await pool.connect();
		console.log("connected to db slug");
		let result = await pool.query(
			`SELECT * FROM grocery.products WHERE slug = '${slug}' `
		);
		if (result.rowCount == 1) {
			product = result.rows[0];
		}
		client.release();
	} catch (error) {
		console.error("Error executing query", error);
	}

	return product;
};
