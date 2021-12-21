import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { WebConfig } from "../models/web-config/web-config";
import { shareReplay, tap } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class ConfigurationService {
  private configuration$: Observable<WebConfig>

  loadConfiguration(handler: HttpBackend): Observable<WebConfig> {
    const requestUrl = `${this.getBaseUrl()}/api/v1.0/Configuration/GetConfig`

    if (!this.configuration$) {
      this.configuration$ = new HttpClient(handler).get<WebConfig>(requestUrl)
        .pipe(tap(configuration => this.setEnvironment(configuration)),
        shareReplay(1)
      )
    }

    return this.configuration$
  }

  private getBaseUrl() {
    let baseUrl = '';

    // TODO.JW: Once we've deployed to Azure we can set this for various environments
    if (window.location.origin.includes('localhost')) {
      baseUrl = 'https://localhost:42001';
    }

    return baseUrl;
  }

  private setEnvironment(configuration: WebConfig) {
    Object.assign(environment, configuration)
  }
}