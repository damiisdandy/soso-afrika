
import mailChimpClient from '@mailchimp/mailchimp_marketing';

mailChimpClient.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || '',
  server: 'us21',
});

const mailChimp = mailChimpClient;

type OtherUserDetails = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: {
    addr1: string;
    city: string;
    state: string;
    zip: string;
  };
};

type MailChimpError = {
  response?: {
    body?: {
      title: string;
    };
  };
};

type AddToMailingList = (
  email: string,
  otherDetails?: OtherUserDetails,
  audienceId?: string
) => Promise<{
  status: boolean;
  message: unknown;
}>;

/**
 * Add email to mailchimp mailing list
 * @param email email of recipient
 * @param audienceId what audience the recipient falls under
 */
export const addToMailingList: AddToMailingList = async (
  email,
  otherDetails,
  audienceId = process.env.MAILCHIMP_AUDIENCE_ID || ''
) => {
  try {
    await mailChimp.lists.addListMember(audienceId, {
      email_address: email,
      merge_fields: {
        FNAME: otherDetails?.firstName || '',
        LNAME: otherDetails?.lastName || '',
        PHONE: otherDetails?.phone || '',
        ADDRESS: otherDetails?.address
          ? {
            ...otherDetails.address,
          }
          : {
            addr1: '',
            city: '',
            state: '',
            zip: '',
          },
      },
      status: 'subscribed',
    });
    return {
      status: true,
      message: `${email} subscribed to email list`,
    };
  } catch (err) {
    const _err = err as MailChimpError;
    if (_err.response) {
      if (_err?.response.body?.title === 'Member Exists') {
        return {
          status: true,
          message: `${email} already subscribed to email list`,
        };
      }
    }
    return {
      status: false,
      message: err,
    };
  }
};