import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent {
  @Input() selectedTabLink: string;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();
  /**
   * 第一个执行，构造函数是建立这个类的实例
   * 之所以我们没有显性的使用 new ScrollableTabComponent()
   * 是因为系统框架帮我们做了这个，这是依赖注入的概念
   */
  constructor() {
    console.log('构造函数');
  }

  handleSelection(index: number) {
    this.tabSelected.emit(this.menus[index]);
  }
}
