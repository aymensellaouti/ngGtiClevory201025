import { Component, inject, OnDestroy } from "@angular/core";
import { AbstractControl, FormBuilder, NgForm, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { APP_ROUTES } from "src/config/routes.config";
import { Cv } from "../model/cv";
import { CONSTANTES } from "src/config/const.config";
import { uniqueCinValidator } from "src/app/validators/unique-cin.validator";
import { cinAgeValidator } from "src/app/validators/cin-age.validator";


@Component({
    selector: 'app-add-cv',
    templateUrl: './add-cv.component.html',
    styleUrls: ['./add-cv.component.css'],
    imports: [FormsModule, ReactiveFormsModule]
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);

  form = this.formBuilder.nonNullable.group(
    {
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [uniqueCinValidator(this.cvService)],
          // A ajouter si on n'a pas de validateur synchrone en // qui protége du spa du serveur
          //updateOn: 'blur',
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    },
    {
      validators: [cinAgeValidator],
      asyncValidators: [],
      updateOn: 'blur',
    }
  );

  constructor() {
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age >= 18) this.path?.enable();
        else this.path?.disable();
      },
    });
    const savedForm = localStorage.getItem(CONSTANTES.addCvForm);
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
  }
  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(
        CONSTANTES.addCvForm,
        JSON.stringify(this.form.getRawValue())
      );
    }
  }
  addCv() {
    this.cvService.addCv(this.form.getRawValue()).subscribe({
      next: () => {
        this.toastr.success(`Le cv a été ajouté avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
        localStorage.removeItem(CONSTANTES.addCvForm);
        this.form.reset();
      },
      error: (erreur) => {
        console.log(erreur);
        this.toastr.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      },
    });
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
