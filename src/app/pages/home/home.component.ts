import { Component } from '@angular/core';
import { NavigationComponent } from "../../reusables/navigation/navigation.component";
import { FooterComponent } from '../../reusables/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavigationComponent, FooterComponent]
})
export class HomeComponent {

}
