import mongoose from 'mongoose'

const schemaScript= new mongoose.Schema({
    script:{
        google_input:String,
        meta_input:String,
        microsoft_input:String
    }
})

const htmlScripts= mongoose.model('schema_script', schemaScript);

export default htmlScripts