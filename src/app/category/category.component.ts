import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  display = 'none';
  deploy = 'none';
  constructor(private route: Router) {}

  ngOnInit(): void {}
  onCloseHandled() {
    this.display = 'none';
  }
  onDetails() {
    this.display = 'block';
  }
  onSubmit() {
    this.display = 'none';
    this.deploy = 'block';
  }
  onClose() {
    this.deploy = 'none';
  }
  viewms() {
    this.route.navigate(['viewmsg']);
  }
}
