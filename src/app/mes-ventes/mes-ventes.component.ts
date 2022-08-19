import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mes-ventes',
  templateUrl: './mes-ventes.component.html',
  styleUrls: ['./mes-ventes.component.css']
})
export class MesVentesComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | undefined;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
 

  ngOnInit(): void {
  }

}
