import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserAdminComponent } from '../PostReg/admin/administer-Users/user-admin.component';
import { ProjectLearningComponent } from '../PostReg/admin/ProjectLearning/ProjectLearning.component';
import { ProjectProfilesComponent } from '../PostReg/admin/projectProfiles/projectProfiles.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UserAdminComponent> {
    canDeactivate(component: UserAdminComponent) {
        if (component.registrationForm.dirty) {
            return confirm('Are you sure?  Any unsaved changes will be lost!');
        }
        return;
    }
}

export class PreventUnsavedProfiles implements CanDeactivate<ProjectProfilesComponent> {
    canDeactivate(component: ProjectProfilesComponent) {
        if (component.profilesForm.dirty) {
            return confirm('Are you sure?  Any unsaved changes will be lost!');
        }
        return;
    }
}

export class PreventUnsaveLearning implements CanDeactivate<ProjectLearningComponent> {
    canDeactivate(component: ProjectLearningComponent) {
        if (component.learningForm.dirty) {
            return confirm('Are you sure?  Any unsaved changes will be lost!');
        }
        return;
    }

}
