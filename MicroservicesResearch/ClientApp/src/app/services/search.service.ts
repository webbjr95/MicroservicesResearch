import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  constructor(private httpClient: HttpClient) { }

  // TODO.JW: Update this method
  getResponsesByQuery(query: string): Observable<null> {
    const baseUrl = environment.apiSettings.searchUrl
    const href = `${baseUrl}/query=${encodeURI(query)}`

    return this.httpClient.get<null>(href);
  }

  getResponsesByQueryMock(): Observable<null> {
    const numOfItems = 1

    // TODO.JW: Update this to match the response
    var response = null
    response.total = numOfItems

    //....

    return of(response)
  }
}
