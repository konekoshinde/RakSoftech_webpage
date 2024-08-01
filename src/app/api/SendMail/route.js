import nodemailer from  'nodemailer';

export async function POST(req) {
    const request=await req.json();
    // let testacc= await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: `${process.env.PORT}`,
        auth: {
            user: `${process.env.USER}`,
            pass: `${process.env.PASSWORD}`
        }
    });
      const mailOptions = {
        from: `${request.from} <${process.env.USER}>`,
        to: `${process.env.TO}`,
        subject: "contact us",
        html: request.message
      };
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error)
                return Response.json("not send");
            }
            return Response.json('send successfully');
        });

        return Response.json('ok');
}