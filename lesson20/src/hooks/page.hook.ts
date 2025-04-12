import { After, Before } from '@cucumber/cucumber';
import { AutomationCourseWorld } from '../world/automation-course.world.ts';


export function pageHook(): void {
    Before( async function(this: AutomationCourseWorld){
        this.page = await this.context.newPage();
    });

    After( async function(this: AutomationCourseWorld){
        this.page.close();
    });
}
