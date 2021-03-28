import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemComponent } from './components/item/item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CategorizedInputsComponent } from './components/categorized-inputs/categorized-inputs.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { CalculationComponent } from './components/calculation/calculation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        MatSidenavModule,
        MatCardModule,
        MatExpansionModule,
        MatBadgeModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
    ],
    declarations: [
        CategorizedInputsComponent,
        InventoryComponent,
        WeaponsComponent,
        CalculationComponent,

        ItemComponent,
    ],
    exports: [
        CategorizedInputsComponent,
        InventoryComponent,
        WeaponsComponent,
        CalculationComponent,

        ItemComponent,

        MatSidenavModule,
        MatCardModule,
        MatExpansionModule,
        MatBadgeModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
    ],
})
export class SharedModule {

}
