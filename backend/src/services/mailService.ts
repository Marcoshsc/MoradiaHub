import { getMailFrom } from '../mail/global'
import { getTemplate } from '../mail/template'
import transporter from '../mail/transporter'

/**
 * Send a simple mail, with the given template, using the given replacements.
 * @param template the mail template
 * @param replacements the replacements on the template
 * @param to who will receive the mail
 * @param subject the mail subject
 */
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
