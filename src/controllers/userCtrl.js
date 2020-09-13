const userServices = require('../services/userService')
const response = require('../utility/response')



class UserCtrl{
    async login(req, res){
      const data = await userServices.login(req,req.body)
      res.status(200).json(response(true,'successfully registered',data))
    }
    async register(req, res){
      const data = await userServices.register(req,req.body)
      res.status(201).json(response(true,'logged in',data))
    }
    async updateProfile(req, res){
      const data = await userServices.updateProfile(req,req.body)
      res.status(201).json(response(true,'profile has successfully been updated',data))
    }

}



module.exports = new UserCtrl()