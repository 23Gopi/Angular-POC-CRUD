import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_POC';
  name: string = '';
  pendingList: string[] = [];
  completedList: string[] = [];
  editedIndex: number | null = null;

  onSave() {
    if (this.editedIndex) {
      this.pendingList = this.pendingList.map((val, i) => {
        if (this.editedIndex === i) {
          val = this.name;
        }
        return val;
      });
    } else {
      this.pendingList.push(this.name);
    }
    this.editedIndex = null;
    this.name = '';
  }

  edit(editedInex: number) {
    this.editedIndex = editedInex;
    const editedData = this.pendingList.find((val, i) => {
      return editedInex === i;
    });
    if (editedData) this.name = editedData;
  }

  delete(deletedIndex: number) {
    this.pendingList = this.pendingList.filter((val, i) => {
      return deletedIndex !== i;
    })
  }

  complete (completedIndex: number) {
    const completedItem = this.pendingList.find((val, i) => {
      return completedIndex === i;
    })
    this.pendingList = this.pendingList.filter((val, i) => {
      return completedIndex !== i;
    })
    if(completedItem) this.completedList.push(completedItem)
  }
}
