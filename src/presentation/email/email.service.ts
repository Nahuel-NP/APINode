import { Resend } from 'resend';
import { envs } from '../../config/envs';

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
}

const resend = new Resend(envs.RESEND_KEY);
export class EmailService {
  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    const { html, subject, to } = options;

    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to,
        subject,
        html,
      });
      console.log({ data });
      if (error) {
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
