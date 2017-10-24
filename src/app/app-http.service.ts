import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService {
    protected url: string;
    protected header: Headers;

    constructor (protected http: Http){
        this.setAccessToken();
    }
    getUser(){
        return this.builder('auth/me')
            .list();
    }

    setAccessToken() {
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJlNjZkNzY5MTJkZjYzYTliMzQ3YWY2NzE5OTVmMDJlZTdiMWQ3YjU0YTEwOGE5ODk1NjRjMGQ0NWY2MzgzMDc1YTU5ZmJjYzJhODUzNGMzIn0.eyJhdWQiOiIzIiwianRpIjoiMmU2NmQ3NjkxMmRmNjNhOWIzNDdhZjY3MTk5NWYwMmVlN2IxZDdiNTRhMTA4YTk4OTU2NGMwZDQ1ZjYzODMwNzVhNTlmYmNjMmE4NTM0YzMiLCJpYXQiOjE1MDg3NjQxNTMsIm5iZiI6MTUwODc2NDE1MywiZXhwIjoxNTQwMzAwMTUyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jvUBhyzQ0t9NTvaHXG1u1LuM_90qhb5b4ZF4ePoCawa1uqzFA2gCo7jmjRCBNvtwHwwha6EYSxdpQasAkKRdOl2yXCF9N7plgsrI0ZiJHn6wL8zhu7YFib6wwIHSUTirppdo5290-5Z7A3rjGLPAkoWzPFGOulCO3SHyKlj6NtJh2VomYsc59xfcrog_Oq_simH1QqfDj2UGjp3NSWxtpaS9KqqFXjKAGAXYY9HOpiYA1VZn5RKp7FBF5u_Cmc0gQY9mCjMCfaWRvF3CWcweq6SSHLDfuPSGRbddVGMH5wsjh4XbjT845h5fdQkRJwS-6V70rJ1-tSF1KZoejbD1fUSx9UJvfGvsglGjy3nupNxPBS7_0WvN8i24vfOC4nYuV6b90GmtMoRQAGGlBiyigBrgKnIlPf1KycJ74vY0V3VI7m0c_wmJDxACBXvurlRRt9xL-LDAwgCD6T9WZCzjQcdMlHZJuw-OMk0ikKEzpd75SeLXSnK_AbBANo1ry7y_KzvenorEbE_pIJ5gZXKv5dx7Vswts64r7gUW6fg4Nrti1m1iOqi338kGR3rQSL65xONc3ijqqdFsTfS7yjSb2WB4i1DFUs-AUoZf_VsYLbMm2mNiFCebEzNDYBuqc6L-NhM1dD2Zp_nT0GF0o50cS5FO3Fi413w-qrCITFb5848';
        this.header = new Headers({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'});
    }
    builder (resource: string){
        this.url = environment.server_url + '/api/v1/' + resource;
        return this;
    }
    list (options: Object = {}) {
               return this.http.get(this.url, {headers: this.header})
                   .toPromise()
                   .then((res) => {
                           return res.json() || {};
                      });
          }
}