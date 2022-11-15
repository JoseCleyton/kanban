import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LoaderService } from '../../service/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  public showSpinner = false;
  public subscription = new Subscription();

  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  init() {
    this.subscription.add(
      this.loaderService.getSpinnerObserver().subscribe((status) => {
        this.showSpinner = status === 'start';
        this.cdRef.detectChanges();
      })
    );
  }
}
