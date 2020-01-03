import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-navigation',
  templateUrl: './navigation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

}
