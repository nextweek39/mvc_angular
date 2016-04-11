import {Component, OnInit} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink, RouteDefinition} from "angular2/router";


import {StaticComponent} from "./components/static.component";
import {StaffComponent} from "./components/staff.component";


@RouteConfig([
    { path: "/", component: StaticComponent, name: "Home", useAsDefault: true },
    { path: "/staff", component: StaffComponent, name: "Staff" }
])

@Component({
    selector: "app",
    templateUrl: "app/app.html",
    directives: [ROUTER_DIRECTIVES, StaticComponent, StaffComponent, RouterLink]
})



export class AppComponent {




}
