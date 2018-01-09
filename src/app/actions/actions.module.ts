import { NgModule } from '@angular/core';
import { AllToggledAction } from 'app/actions/home/all-toggled.action';
import { ClearCompletedClickedAction } from 'app/actions/home/clear-completed-clicked.action';
import { InitAction } from 'app/actions/home/init-action';
import { ItemAddedAction } from 'app/actions/home/item-added.action';
import { ItemDestroyClickedAction } from 'app/actions/home/item-destroy-clicked.action';
import { ItemEditCanceledAction } from 'app/actions/home/item-edit-canceled.action';
import { ItemEditChangedAction } from 'app/actions/home/item-edit-changed.action';
import { ItemEditEndedAction } from 'app/actions/home/item-edit-ended.action';
import { ItemEditStartedAction } from 'app/actions/home/item-edit-started.action';
import { ItemToggledAction } from 'app/actions/home/item-toggled.action';

@NgModule({
  providers: [
    ItemAddedAction, 
    ItemToggledAction, 
    AllToggledAction, 
    ItemDestroyClickedAction,
    ItemEditStartedAction,
    ItemEditEndedAction,
    ItemEditChangedAction,
    ItemEditCanceledAction,
    InitAction,
    ClearCompletedClickedAction
  ]
})
export class ActionsModule {}
