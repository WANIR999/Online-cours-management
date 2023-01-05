const nodemailer = require("nodemailer");

const sendMail= (target,subject,msg1,msg2,url)=> async()=>{
 
  let transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL, 
      pass:process.env.NODEMAILER_PASSWORD, 
    },
  });
  let info = {
    from: '"mohammed" <'+process.env.NODEMAILER_EMAIL+'>', 
    to:target,
    subject:subject,  
    html: `<b>${msg1}<a href="${url}">${msg2}</a></b>`,
  };
  transporter.sendMail(info)
}


module.exports= {sendMail}