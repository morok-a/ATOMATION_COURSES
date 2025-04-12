import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { AutomationCourseWorld } from './world/automation-course.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(AutomationCourseWorld);
