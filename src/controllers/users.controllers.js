const pool = require('../database.js');
const usersController={}

usersController.getUsers=async (req,res)=>{
    try{
        const[users]= await pool.query('SELECT * FROM usuarios')
    res.send(users)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
usersController.getUser= async (req,res)=>{
    try{
    const[users]= await pool.query('SELECT * FROM usuarios WHERE id = ?',[req.params.id])
    if(users.length<=0) return res.status(404).json({message:'user not found'})
    res.send(users)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    
}
usersController.createUsers=async (req,res)=>{
    const {Nombre,Apellido,Email,Contraseña,Rol}=req.body
    try{
    const[rows]=await pool.query('INSERT INTO usuarios (Nombre,Apellido,Email,Contraseña,Rol) VALUES (?,?,?,?,?)',[Nombre,Apellido,Email,Contraseña,Rol])
    res.send({
        id:rows.insertId,
        Nombre,
        Rol
    })
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
usersController.deleteUsers=async (req,res)=>{
    try{
    const[result]=await pool.query('DELETE FROM usuarios WHERE id = ?',[req.params.id])
    if(result.affectedRows<=0) return res.status(404).json({message:'user not found'})
    res.sendStatus(204)
    }catch(error){
        return res.status(500).json({message:error.message})
    }    
}
usersController.updateUsers= async(req,res)=>{
    const {Nombre,Apellido,Email,Contraseña,Rol}=req.body
    const {id}=req.params
    try{const[result]=await pool.query('UPDATE usuarios SET Nombre=IFNULL(?,nombre),Apellido=IFNULL(?,Apellido),Email=IFNULL(?,Email),Contraseña=IFNULL(?,Contraseña),Rol=IFNULL(?,Rol) WHERE id=?',[Nombre,Apellido,Email,Contraseña,Rol,id])
    if(result.affectedRows<=0) return res.status(404).json({message:'user not found'})
    const[users]= await pool.query('SELECT * FROM usuarios WHERE id = ?',[req.params.id])
    res.send(users[0])
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    
    
}
module.exports=usersController