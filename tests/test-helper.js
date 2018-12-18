import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import './helpers/flash-message';

setApplication(Application.create(config.APP));
