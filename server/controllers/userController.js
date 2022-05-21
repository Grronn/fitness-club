const db = require('../db');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const generateToken = (id, login, role) =>{
    return jwt.sign(
        {id, login, role},
        process.env.SECRET,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration (req, res, next){
        try{
            const { login, password} = req.body;
            const userExist = await db.query("SELECT * FROM clients WHERE login = $1", [login]);
                if(userExist.rows.length !== 0){
                return res.status(400).json('Пользователь с таким Логином уже существует');
                }
            
            const hashPassword = await bcrypt.hash(password, 5);
            const result = await db.query("INSERT INTO clients ( login, password, role) VALUES ($1, $2, $3) RETURNING *",
                [ login, hashPassword, 'user']);
            const userExist2 = await db.query("SELECT * FROM clients WHERE login = $1", [login]);
            const user = userExist2.rows[0];
            const token = generateToken(user.id, user.login, user.role);
            return res.json({
                token/*,
                user: {
                    id: user.id,
                    login: user.login,
                    password: user.password,
                    role: user.role
                }*/     
            });
        }
        catch (e) {
            console.log(e);
            res.status(400).json('Registration error');
            // next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { login, password } = req.body;
            const userExist = await db.query("SELECT * FROM clients WHERE login = $1", [login]);
            if(userExist.rows.length === 0){
                return res.status(400).json({message: `Пользователь с логином ${login} не найден`} );
            }
            const user = userExist.rows[0];
            const validPassword = bcrypt.compareSync(password, user.password);
            if(!validPassword){
                return res.status(400).json({message: `Введен неверный пароль`} );
            }
            const token = generateToken(user.id, user.login, user.role);
            return res.json({
                token/*,
                user: {
                    id: user.id,
                    login: user.login,
                    password: user.password,
                    role: user.role
                }*/     
            });

        } catch (e) {
            // console.log(e);
            res.status(400).json('Login error');
            // next(e);
        }
    }
    async check(req, res, next) {
        const { id } = req.user;
        const userExist = await db.query("SELECT * FROM clients WHERE id = $1", [id]);
        const user = userExist.rows[0];
        const token = generateToken(user.id, user.login, user.role);
        return res.json({token})
    }
}

module.exports = new UserController()