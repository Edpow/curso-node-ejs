const csvFilePath ='databases/SINAPI/SINAPI_Custo_Ref_Composicoes_Sintetico_MS_202304_NaoDesonerado.csv'
import csv from 'csvtojson'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query'] })




async function main(){

    const jsonComposition=await csv({delimiter:';'}).fromFile(csvFilePath).subscribe((jsonObj,index) => {
        return new Promise((resolve,reject)=>{
            jsonObj.unitPrice=parseFloat(jsonObj.unitPrice);
            jsonObj.code=parseFloat(jsonObj.code);
            resolve();
        })
    })
    console.log(jsonComposition)
    
        await Promise.all(
            
            jsonComposition.map(async (composition) => {
                
            await prisma.sinapi.create({
              data: composition,
            })
            })

        )
          


}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })