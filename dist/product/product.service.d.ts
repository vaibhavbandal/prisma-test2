import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    test(): Promise<import(".prisma/client").Product[]>;
}
