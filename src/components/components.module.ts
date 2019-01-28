import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { AssistantComponent } from './assistant/assistant';
@NgModule({
	declarations: [PopoverComponent,
    AssistantComponent],
	imports: [],
	exports: [PopoverComponent,
    AssistantComponent]
})
export class ComponentsModule {}
