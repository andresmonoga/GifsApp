import Swal from 'sweetalert2'
import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
// eslint-disable-next-line @angular-eslint/component-class-suffix

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control p-2"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput

      >

    <button type="button"
     class="btn btn-outline-success center p-2"
     (click)="searchTag()"
     >
      Buscar
    </button>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  public error?: string;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag, 0)
    this.tagInput.nativeElement.value = '';

    setTimeout(() => {
      this.error = this.gifsService.error;
      if (this.error) {
        this.alert(this.error)
      }
    }, 200);
  }

  alert(error: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast: { onmouseenter: any; onmouseleave: any; }) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: error
    });
  }
}
