import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'loader',
  templateUrl: './loader.html',
})
export class LoaderDirective implements OnInit, OnDestroy, OnChanges {

  @Input()
  public dataCount: number = 0;

  @Input()
  public tagName: string = '';


  constructor(
    @Inject(DOCUMENT) public _document: any,
    private _el: ElementRef
  ) {
    // this._initOnClickBody = this._initOnClickBody.bind(this);
  }

  public ngOnInit() : void
  {
  }
  public ngOnDestroy() : void
  {
  }

  public ngOnChanges( changes: SimpleChanges ) : void
  {
    if(this._document.getElementsByClassName(this.tagName).length){

    }
  }
}
