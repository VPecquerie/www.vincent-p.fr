import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentjsPipe } from './momentjs.pipe';

@NgModule({
  declarations: [
      MomentjsPipe
  ],
  imports: [
    CommonModule
  ],
    exports: [
        MomentjsPipe
    ]
})
export class PipesModule { }
