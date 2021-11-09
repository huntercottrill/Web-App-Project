import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: "crunchy-auth",
    templateUrl: "auth.component.html",
    styleUrls: ['auth.component.css']
})
export class AuthComponent {
    public buttonClicked!: string;
    private authObservable!: Observable<AuthResponse>;
    auth: AuthResponse | undefined;
    authorize: boolean | undefined;

    constructor(private authService:AuthService) {
    }

    public onSubmit(data: NgForm) {
        console.log("Button clicked");
        console.log(data.value);
        if (this.buttonClicked == 'SignUp') {
            this.authObservable = this.authService.signup(data.value.email, data.value.password);
        }
        if (this.buttonClicked == 'Login') {
            this.authObservable = this.authService.login(data.value.email, data.value.password);
        }

        this.authObservable.subscribe(
            (data:AuthResponse) => {
                alert("Successfully logged in as " + data.email);
            },
            error => {
                console.log(error.error);
                alert("Login failed. Incorrect email or password")
            }
        );

        data.resetForm();
    }
}