import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Query params
    const error = this.route.snapshot.queryParamMap.get('error');
    console.log(error);

    // Params
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  login() {
    this.router.navigate(['signup']);
  }
}
