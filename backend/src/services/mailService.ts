import { getTemplate } from '../mail/template'
import transporter from '../mail/transporter'

export const sendSimpleMail = async (
  template: string,
  replacements: unknown,
  from: string,
  to: string,
  subject: string
): Promise<void> => {
  await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: getTemplate(template, replacements)
  })
}
