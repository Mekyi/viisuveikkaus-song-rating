import { NgModule } from '@angular/core';

/** Material imports */
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule,
    MatTabsModule
  ]
})

export class MaterialModule { }