import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalculationService } from 'src/app/core/calculation/calculation.service';
import { Item } from 'src/app/core/items/item.interface';
import { ItemsService } from 'src/app/core/items/items.service';

@Component({
    selector: 'app-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: [ './calculation.component.scss' ],
})
export class CalculationComponent implements OnInit, OnDestroy {
    public calculationResult: { [ materialId: string ]: number } = {};
    public categorizedItems: { title: string, items: Item[] }[] = [
        {
            title: 'Wumpa Fruits',
            items: this.itemsService.getAllItems().filter(item => item.id === 'wumpa-fruit'),
        },
        {
            title: 'Nitro Items',
            items: this.itemsService.getNitroItems().filter(item => item.type === 'ingredient'),
        },
        {
            title: 'Frosty Items',
            items: this.itemsService.getFrostyItems().filter(item => item.type === 'ingredient'),
        },
        {
            title: 'Inferno Items',
            items: this.itemsService.getInfernoItems().filter(item => item.type === 'ingredient'),
        },
        {
            title: 'Oxide Items',
            items: this.itemsService.getOxideItems().filter(item => item.type === 'ingredient'),
        },
    ];

    private subscriptions = new Subscription();

    constructor(
        public calculationService: CalculationService,
        public itemsService: ItemsService,
    ) { }

    ngOnInit(): void {
        this.subscriptions.add(this.calculationService.calculationResult.subscribe(result => {
            this.calculationResult = result;
        }));

        this.calculationService.triggerCalculation();
    }
    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
