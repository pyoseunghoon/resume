import { homepage, lastestUpdatedAt, version } from '../package.json';
import { IFooter } from '../component/footer/IFooter';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  latestUpdated: lastestUpdatedAt,
};

export default footer;
