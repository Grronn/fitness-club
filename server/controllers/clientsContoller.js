const pool = require('../db');

class ClientsController{
    async registration(req,res){

    }
    async login (req,res){

    }
    async checkAuth(req,res){
        const query = req.query;
        res.json(query);

    }
    async getClients (req,res, next){
        try {
            const result = await pool.query('SELECT * FROM clients')
            // res.send(result.rows);
            // console.log(result);
            res.json(result.rows);
        } catch (error) {
            next(error);
        }

    }


    async postClient(req, res, next) {
        try {
            const {name,email,password,role} = req.body;
            const result = await pool.query("INSERT INTO clients (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *", 
                [name,email,password,role]);
            // res.send(result.rows);
            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    }

    async putClient(req, res, next) {
        try {
            const {id, name,email,password,role} = req.body;

            const result = await pool.query("UPDATE clients SET name=$2, email= $3, password=$4, role=$5 WHERE id = $1 RETURNING *", 
                [id, name,email,password,role]);
            

            if (result.rows.length === 0)
                return res.status(404).json({ message: "Client not found" });
            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    }

    async deleteClient(req, res, next) {
        try {
            const { id } = req.body;
            const result = await pool.query('DELETE FROM clients WHERE id = $1', [id])
            if (result.rowCount === 0)
                return res.status(404).json({ message: "Client not found" });
            return res.sendStatus(204);

        } catch (error) {
            next(error);
        }


    }
}

module.exports = new ClientsController()