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
  // data from HTTP get will be placed here
  title = 'task_frontend';
  fileContent: string = '';

  // Initialize a DataFetch object which will handle HTTP GET request
  constructor(private dataFetch: DataFetch) {}

  // Placeholder function, don't want loadFile triggering on every webpage load
  ngOnInit() {}

  loadFile() {
    // Uses dataFetch component to perform HTTP request and place it into fileContent variable
    this.dataFetch.getFileContents().subscribe((data: any) => {
      const parsedData = JSON.parse(data);
      this.fileContent = parsedData.fileContents;
    });
  }
}
