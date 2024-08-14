import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataFetch } from './dataFetch';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'task_frontend';
  fileContent: string = '';

  constructor(private dataFetch: DataFetch) {}

  ngOnInit() {}

  loadFile() {
    this.dataFetch.getFileContents().subscribe((data: any) => {
      const parsedData = JSON.parse(data);
      this.fileContent = parsedData.fileContents;
    });
  }
}
