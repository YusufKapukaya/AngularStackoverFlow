import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent {
  constructor(private fb: FormBuilder, public userService: UserService) { }
  ngOnInit(): void {
  }

  creatUserForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  get f(): { [key: string]: AbstractControl } {
    return this.creatUserForm.controls;
  }

  createAccount() {
    this.userService.createAccount(this.creatUserForm.value).subscribe((res) => {
      console.log(res);
    })
  }
}
