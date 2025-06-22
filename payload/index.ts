import { IGlobal } from '../component/common/IGlobal';
import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';
import { IPresentation } from '../component/presentation/IPresentation';
import { IArticle } from '../component/article/IArticle';
import { IEducation } from '../component/education/IEducation';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IActivity } from '../component/activity/IActivity';

import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import project from './project';
import presentation from './presentation';
import article from './article';
import education from './education';
import etc from './etc';
import footer from './footer';
import openSource from './openSource';
import activity from './activity';
import { _global } from './_global';

const Payload: PayloadType = {
  profile,
  introduce,
  skill,
  experience,
  project,
  presentation,
  article,
  education,
  etc,
  footer,
  openSource,
  activity,
  _global,
};

type PayloadType = {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  presentation: IPresentation.Payload;
  article: IArticle.Payload;
  education: IEducation.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;
  openSource: IOpenSource.Payload;
  activity: IActivity.Payload;
  _global: IGlobal.Payload;
};

export default Payload;
