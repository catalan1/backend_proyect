const HttpError = require('../models/http-error');
const {v4:uuidv4} = require('uuid');
const {validationResult}=require('express-validator');

const DUMMY_USERS = [
    {

        id:'u1',
        name:'ithali',
        email:'ithali.catalan@galileo.edu',
        password:'12345'
    }
];


const getUsers=(req,res,next) =>{
    res.status(200).json({user:DUMMY_USERS});

};
//creamos usuario nuevo,se necesita un json (name,email,password)
//crear un id nuevo -random en js o paquete llamado iiid_v4

const singup = (req,res,next) => {
    const error = validationResult(req);
    if(!(error.isEmpty())){
        throw new HttpError('argumentos invalidos',422);
    }

   const{name, email, password} = req.body;
   const createdUser ={
       id: uuidv4(),
       name:name,
       email:email,
       password:password
   }

   DUMMY_USERS.push(createdUser);
   res.status(201).json({message:'usuario creado exitoso'});
};



    const login = (req,res, next) => {
        const {email,password} = req.body;
        const identifiedUser=DUMMY_USERS.find(u =>(u.email === email));
        if((!identifiedUser) || (identifiedUser.password !== password)){
            throw new HttpError('no se identifico al usuario');
        }
        res.json({message: "TRUE" });
    };


exports.getUsers = getUsers;
exports.singup = singup;
exports.login = login;