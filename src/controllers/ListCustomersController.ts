import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";
import prismaClient from "../prisma";

class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerService = new ListCustomersService();

        const customers = await listCustomerService.execute();

        reply.send(customers);
    }
}

export {ListCustomersController}