import { IGlobal } from '../component/common/IGlobal';
const previewImage = '/asset/preview.jpg';

const title = 'Resume-표승훈';
const description = '';

export const _global: IGlobal.Payload = {
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
