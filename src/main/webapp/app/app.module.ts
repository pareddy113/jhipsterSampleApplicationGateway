import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleApplicationGatewaySharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplicationGatewayHomeModule } from './home/home.module';
import { JhipsterSampleApplicationGatewayAdminModule } from './admin/admin.module';
import { JhipsterSampleApplicationGatewayAccountModule } from './account/account.module';
import { JhipsterSampleApplicationGatewayEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplicationGatewaySharedModule,
        JhipsterSampleApplicationGatewayHomeModule,
        JhipsterSampleApplicationGatewayAdminModule,
        JhipsterSampleApplicationGatewayAccountModule,
        JhipsterSampleApplicationGatewayEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplicationGatewayAppModule {}
