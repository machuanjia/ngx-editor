import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEditorModule } from '../../../src/index';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { COMPONENTS, ENTRY_COMPONENTS } from './components';
import { appRoutes } from './app.routes';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ...COMPONENTS
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS
    ],
    imports: [
        BrowserModule,
        NgxEditorModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        TranslateModule,
        FormsModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private translate: TranslateService) {
        translate.use('zh-cn');
        translate.setTranslation('zh-cn', {
            common: {
                OK: '确定',
                CANCEL: '取消'
            }
        });
    }
}
