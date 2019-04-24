import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utills";

export default {
    Mutation: async(_, args)=> {
        const {email, secret} = args;
        const user = await prisma.user( {email} );
        if(user.loginSecret === secret){
            const token = generateToken(user.id);
            return token;
        }else{
            throw Error("Wrong email/secret conbination")
        }
    }
}