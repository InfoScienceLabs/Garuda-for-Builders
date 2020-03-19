import { Component, OnInit ,ViewEncapsulation} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../auth/authentication.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth.service";
import { first } from "rxjs/operators";
import { Error } from "../../models/models";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  hide = true;
  returnUrl: string;
  userForm: FormGroup;
  submitted: Boolean = false;
  loading: Boolean = false;
  error: any;
  formErrors = {
    email: "",
    password: ""
  };
  validationMessages = {
    email: {
      required: "Email Required",
      email: "Email Format is Wrong"
    },
    password: {
      required: "Password Required",
      pattern: "Pattern Format is Wrong",
      minlength: "Min Lenght 4",
      maxlength: "Max Lenght 25"
    }
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = false;
    this.buildForm();
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  buildForm() {    
    this.userForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });

    // this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    // this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }

  signInWithGoogle() {
    this.auth.googleLogin().then(() => this.afterSignIn());
  }

  signInWithGithub() {
    this.auth.githubLogin().then(() => this.afterSignIn());
  }

  signInWithEmail() {
    if (this.userForm.invalid) {
      return;
    }
    console.log("first");
    this.error = "";
    this.loading = true;
    this.authService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data + " data");
          this.loading = false;
          this.router.navigate(["/" + data.roleId]);
          // this.router.navigate([this.returnUrl]);
        },
        (error: HttpErrorResponse) => {
          console.log(error + " data");
          // console.log(err);
          this.error = error.error["message"];
          this.loading = false;
          this.submitted = false;
        }
      );
    // this.auth
    //   .emailLogin(this.userForm.value['email'], this.userForm.value['password'])
    // .catch(error => console.log('Error:', error));
  }

  signInAnonymously() {
    this.auth.anonymousLogin().then(() => this.afterSignIn());
  }

  login() {
    this.submitted = true;
    this.signInWithEmail();
  }

  private afterSignIn() {
    this.router.navigate(["/"]);
  }
  get f() {
    return this.userForm.controls;
  }
}
