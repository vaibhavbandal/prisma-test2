import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {


    constructor(private readonly prismaService:PrismaService){}

    public async test(){

        const a = await this.prismaService.product.create({
            data:{
                image:"image",title:"title"
            }
        })
  
            

        // console.info(a);
        const d = await this.prismaService.product.findMany({});
        console.info(d);
 


        return d;
    }

}
