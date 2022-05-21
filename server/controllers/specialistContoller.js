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
            const result = await pool.query('SELECT * FROM specialists')
            // res.send(result.rows);
            // console.log(result);
            res.json(result.rows);
        } catch (error) {
            next(error);
        }

    }

    async getClient (req,res, next){
        try {
            const { id } = req.params;
            const result = await pool.query('SELECT * FROM specialists WHERE id = $1', [id])
            if (result.rowCount === 0)
                return res.status(404).json({ message: "specialist not found234" });
            res.json(result.rows);

        } catch (error) {
            next(error);
        }

    }


    async postClient(req, res, next) {
        try {
            const {name, surname, patronymic, date, specialization, phone_number} = req.body;
            const result = await pool.query("INSERT INTO specialists (name, surname, patronymic, date, specialization, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
                [name, surname, patronymic, date, specialization, phone_number]);
            // res.send(result.rows);
            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    }

    async putClient(req, res, next) {
        try {
            const {id, name, surname, patronymic, date, specialization, phone_number} = req.body;

            const result = await pool.query("UPDATE specialists SET name=$2, surname= $3, patronymic=$4, date=$5, specialization=$6, phone_number=$7 WHERE id = $1 RETURNING *", 
                [id, name, surname, patronymic, date, specialization, phone_number]);
            

            if (result.rows.length === 0)
                return res.status(404).json({ message: "specialist not found" });
            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    }

    async deleteClient(req, res, next) {
        try {
            const { id } = req.params;
            const result = await pool.query('DELETE FROM specialists WHERE id = $1', [id])
            if (result.rowCount === 0)
                return res.status(404).json({ message: "specialist not found02" });
            return res.sendStatus(204);

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ClientsController()