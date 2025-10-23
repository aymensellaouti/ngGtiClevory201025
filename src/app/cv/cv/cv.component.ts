import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, of, retry } from "rxjs";
import { TodoService } from "src/app/todo/service/todo.service";
import { ListComponent } from "../list/list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { EmbaucheComponent } from "../embauche/embauche.component";
import { AsyncPipe, UpperCasePipe, DatePipe } from "@angular/common";
@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    imports: [ListComponent, CvCardComponent, EmbaucheComponent, AsyncPipe, UpperCasePipe, DatePipe]
})
export class CvComponent {
  private logger = inject(LoggerService);
  private toastr = inject(ToastrService);
  private cvService = inject(CvService);
  private todoService = inject(TodoService);

  //cvs: Cv[] = [];
  cvs$ = this.cvService.getCvs().pipe(
    retry({
      delay: 2000,
      count: 2,
    }),
    catchError((e) => {
      this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      return of(this.cvService.getFakeCvs());
    })
  );
  selectedCv$ = this.cvService.selectedCv$;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor() {
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: () => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`
    //       Attention!! Les données sont fictives, problème avec le serveur.
    //       Veuillez contacter l'admin.`);
    //   },
    // });
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
  }

}
