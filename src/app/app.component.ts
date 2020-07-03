import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component
import { CookieService } from 'ngx-cookie-service';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flair-portal';
  constructor(private bnIdle: BnNgIdleService,private router: Router,private route: ActivatedRoute,) {
    // this.bnIdle.startWatching(2*60*60).subscribe((res) => {
    //   if(res) {
    //       console.log("session expired");
    //       this.cookieService.delete('esp-user',"/")
    //       this.router.navigateByUrl('');
    //   }
    // })
  }
}
