import { BeforeAll} from '@cucumber/cucumber';
import { AutomationCourseWorld } from '../world/automation-course.world.ts';

export function globalContextHook(): void {
    BeforeAll(async function () {
        AutomationCourseWorld.globalContext = new Map();
    });
}
