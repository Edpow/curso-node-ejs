const csvFilePath ='databases/SINAPI/SINAPI_Custo_Ref_Composicoes_Sintetico_MS_202304_NaoDesonerado.csv'
const csv=require('csvtojson')
const PrismaClient = require('@prisma/client') 
const prisma = new PrismaClient()


csv({
    delimiter:';'
})
.fromFile(csvFilePath)
.then((jsonObj)=>{
	console.log(jsonObj.forEach(()=>{
        
    }));
})