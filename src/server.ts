import 'dotenv/config';
import '@/index';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import MemberRoute from '@routes/member.route';
import YearRoute from '@routes/year.route';
import BibleClassMemberShipRoute from '@routes/bible-class-membership.route';
import BibleClassRoute from '@routes/bible-class.route';
import WeekRoute from '@routes/week.route';
import CellAttendanceRoute from '@routes/cell-attendance.route';
import ChurchRoute from '@routes/church.route';

import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new MemberRoute(),
  new BibleClassMemberShipRoute(),
  new BibleClassRoute(),
  new WeekRoute(),
  new YearRoute(),
  new CellAttendanceRoute(),
  new ChurchRoute()
]);

app.listen();
