import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {User} from '../../../model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'mac-profile-picture',
  templateUrl: './profile-picture.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent implements OnChanges {

  @Input() user: User;
  private pictureSafeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user) {
      this.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.user.pictureUrl);
    }
  }

}
