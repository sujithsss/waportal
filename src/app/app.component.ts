import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//export class AppComponent implements OnInit {
export class AppComponent {
  constructor(private router: Router) { }

 // ngOnInit() {
 //   this.router.navigate(['/login']);
 // }
  title = 'W_A_Portal';

}
