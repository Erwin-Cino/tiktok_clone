import express from 'express'
import { getAllUsers } from './users.controller'
const router = express.Router()

router.get('/getAll', getAllUsers)

module.exports = router