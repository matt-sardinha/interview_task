import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataFetch {
  constructor(private http: HttpClient) {}

  // Method which performs HTTP GET to specified endpoint
  getFileContents() {
    return this.http.get('http://127.0.0.1:5000/api/get-file-content', {
      responseType: 'text',
    });
  }
}
