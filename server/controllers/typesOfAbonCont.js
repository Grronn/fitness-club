const pool = require('../db');

class TypesOfAbonCont{
    async createTypeAb(req,res, next){
        res.json('typesab3232ggg')

    }
    async getTypesAb (req,res, next){
        try {
            const result = await pool.query('SELECT * FROM typesofcards')
            // res.send(result.rows);
            // console.log(result);
            res.json(result.rows);
        } catch (error) {
            next(error);
        }

    }
    async getTypeAb (req,res, next){


        try {
            const { id } = req.params;
            const result = await pool.query('SELECT * FROM typesofcards WHERE id = $1', [id])
            if (result.rowCount === 0)
                return res.status(404).json({ message: "typesofcard not found234" });
            res.json(result.rows);

        } catch (error) {
            next(error);
        }

    }

    async postTypesAb(req, res, next) {
        try {
            const {name,cost} = req.body;
            const result = await pool.query("INSERT INTO typesofcards (name, cost) VALUES ($1, $2) RETURNING *", 
                [name,cost]);
            // res.send(result.rows);
            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    }

    async putTypeAb(req, res, next) {
        try {
            const {id, name,cost} = req.body;

            const result = await pool.query("UPDATE typesofcards SET name=$2, cost= $3 WHERE id = $1 RETURNING *", 
                [id, name,cost]);
            

            if (result.rows.length === 0)
                return res.status(404).json({ message: "Type of card not found" });
            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    }

    async deleteTypeAb(req, res, next) {
        try {
            const { id } = req.params;
            const result = await pool.query('DELETE FROM typesofcards WHERE id = $1', [id])
            if (result.rowCount === 0)
                return res.status(404).json({ message: "Type of card not found" });
            return res.sendStatus(204);

        } catch (error) {
            next(error);
        }


    }
    
}

module.exports = new TypesOfAbonCont()