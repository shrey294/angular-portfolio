import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderService } from '../../serivces/header.service';
import { header } from '../../models/header.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  initials: string = 'AC';

  constructor(private apiservice:HeaderService){}
  ngOnInit(): void {
    this.apiservice.getheaderdata().subscribe({
      next:(data:header[])=>{
        if(data?.[0]?.initials){
          this.initials = data[0].initials;
        }
      },
       error: (err) => console.error('Error loading navbar data', err)
    })
  }
}
