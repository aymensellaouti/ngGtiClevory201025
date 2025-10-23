import { Component, inject } from "@angular/core";
import { FormBuilder, AbstractControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap, tap } from "rxjs";
import { CvService } from "../services/cv.service";
import { ListComponent } from "../list/list.component";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
    imports: [FormsModule, ReactiveFormsModule, ListComponent, AsyncPipe]
})
export class AutocompleteComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  form = this.formBuilder.group({ search: [''] });
  get search(): AbstractControl {
    return this.form.get('search')!;
  }
  cvs$ = this.search.valueChanges.pipe(
    debounceTime(500),
    //aym aym ayme aym
    //tap((value) => console.log(value)),
    distinctUntilChanged(),
    //aym ayme aym
    //tap((value) => console.log(value))
    switchMap((search) => this.cvService.selectByName(search))
  );

}
