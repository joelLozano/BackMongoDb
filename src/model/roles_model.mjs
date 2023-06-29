import mongoose, { Schema } from "mongoose";


const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
})

const RoleModel = mongoose.model('Role', roleSchema)

export default {RoleModel}