const {z} = require('zod');

const signupSchema = z.object({
    name: z
    .string({required_error:"name is required"}).
    trim()
    .min(3,{message:"Name must be atleast of 3chars."})
    .max(255,{message:"Name must not be morethan 255chars"}),
    email: z
    .string({required_error:"email is required"}).
    trim()
    .min(3,{message:"email must be atleast of 3chars."})
    .max(255,{message:"email  must not be lessthan 255chars"}),
    phone: z
    .string({required_error:"phoneNumber is required"}).
    trim()
    .min(10,{message:"phone Number must be atleast of 10chars."})
    .max(20,{message:"phoneNumber must not be morethan 20chars"}),
    password: z
    .string({required_error:"password is required"}).
    trim()
    .min(3,{message:"password must be atleast of 7chars."})
    .max(1024,{message:"password must not be morethan 1024chars"}),
})

const loginSchema = z.object({
    email : z
    .string({required_error:"email is required"}).
    trim()
    .min(3,{message:"email must be atleast 3chars."})
    .max(255,{message:"email must be lessthan 255chars."}),
    password: z
    .string({required_error:"password is required"}).
    trim()
    .min(7,{message:"password must be atleast of 7chars."})
    .max(1024,{message:"password must not be morethan 1024chars"}),
})

const contactSchema  =  z.object({
    username:z
    .string({required_error:"username is required"}).trim()
    .min(3,{message:"username mustbe atleast 3chars"})
    .max({message:"username must be lessthan 45chars"}),
    email : z
    .string({required_error:"email is required"}).
    trim()
    .min(3,{message:"email must be atleast 3chars."})
    .max(255,{message:"email must be lessthan 255chars."}),
    message:z
    .string({required_error:"message is required"}).trim()
    .min(10,{message:"message mustbe atleast 10chars"})
    .max(1024,{message:"message mustbe lessthan 1024chars"}),

})

module.exports ={ signupSchema,loginSchema,contactSchema};