import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TokenService } from 'src/app/security/servicies/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.css']
})
export class HeaderPrivateComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private tokenService: TokenService,private router:Router) { }
  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  onCloseSession() {
    this.tokenService.logOut();
    this.router.navigate(['/']);
  }

}
