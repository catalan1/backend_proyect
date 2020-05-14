const HttpError = require('../models/http-error');
const{uuid}=require('uuidv4');
const DUMMY_USERS = [
    {

        id:'u1',
        name:'ithali',
        email:'ithali.catalan@galileo.edu',
        password:'12345'
    }
];


const getUsers=(req,res,next) =>{
    const userId= req.params.id;
    const user = DUMMY_USERS.filter(id => {
        return(id === userId)
    });

    if(!DUMMY_USERS){
        throw new HttpError('no se puede encontrar ningun usuario',404)
    }
    res.json({user: DUMMY_USERS})

};
const singup=(req,res,next) =>{
//creamos usuario nuevo,se necesita un json (name,email,password)
//crear un id nuevo -random en js o paquete llamado iiid_v4
const{id,name,email,password} =req.body;
const createdUser = {

    id: uuid(),
    name,
    email,
    password
}
DUMMY_USERS.push(createdUser);
res.json({user:createdUser});
res.status(201).json({message:"se agrego"});
};
exports.getUsers=getUsers;
exports.singup=singup;


    const login = (req,res, next) => {
        const {email,password} = req.body;
        console.log(req.body);
        const user = DUMMY_USERS.filter( p=> {
            return(p.email === email && p.password === password);
        });
        if(!user){
            throw new HttpError('FALSE', 404);
        }
        res.json({user:user})
    
    };


exports.getUsers = getUsers;
exports.singup = singup;
exports.login = login;