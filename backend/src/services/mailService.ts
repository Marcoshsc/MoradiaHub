import { getMailFrom } from '../mail/global'
import { getTemplate } from '../mail/template'
import transporter from '../mail/transporter'

export const sendSimpleMail = async (
  template: string,
  replacements: unknown,
  to: string,
  subject: string
): Promise<void> => {
  await transporter.sendMail({
    from: getMailFrom(),
    to: to,
    subject: subject,
    html: getTemplate(template, replacements)
  })
}
