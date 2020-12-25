import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTPHOST as string,
  port: Number.parseInt(process.env.SMTPPORT as string),
  auth: {
    user: process.env.SMTPUSER,
    pass: process.env.SMTPPASSWORD
  }
})

export default transporter
