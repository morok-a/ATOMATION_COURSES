import { After, Before } from '@cucumber/cucumber';
import { AutomationCourseWorld } from '../world/automation-course.world.ts';


export function browserContextHook(): void {
    Before( async function(this: AutomationCourseWorld){
        this.context = await AutomationCourseWorld.browser.newContext();
    });

    After( async function(this: AutomationCourseWorld){
        this.context.close();
    });
}
