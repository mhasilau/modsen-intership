import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, of } from 'rxjs';
import { IUser, IUserSignIn } from '@app/interfaces';
import { JSON_API } from '@app/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakerService {

  constructor(
    private http: HttpClient
  ) { }

  signIn(email: string, password: string): Observable<string | null> {
    return this.getUserCreeds().pipe(
      map(usersCreeds => {
        const userCreeds = usersCreeds.find(user => user.email === email && user.password === password);
        console.log(userCreeds);
        if (!userCreeds) return null;
        return FakerService.generateToken(userCreeds.email, userCreeds.password);
      }),
    );
  }

  getCurrentUser(token: string | null): Observable<IUser | null> {
    console.log('faker token', token);
    if (!token) return of(null);
    const obj = FakerService.parseToken(token);
    if (!obj) return of(null);
    return this.getUserCreeds().pipe(
      map(usersCreeds => usersCreeds.find(user => user.email === obj.email && user.password === obj.password)),
      mergeMap(userCreeds => !userCreeds ? of(null) : this.getUsers().pipe(
        map(users => users.find(user => user.id === userCreeds!.id) || null)
      ))
    );
  }

  getUserAvatar(token: string | null): Observable<string | null> {
    console.log('faker token', token);
    if (!token) return of(null);
    const obj = FakerService.parseToken(token);
    if (!obj) return of(null);
    return this.getUserCreeds().pipe(
      map(usersCreeds => usersCreeds.find(user => user.email === obj.email && user.password === obj.password)),
      mergeMap(userCreeds => !userCreeds ? of(null) : of(userCreeds.avatar))
    );
  }

  private static generateToken(email: string, password: string): string {
    return btoa(JSON.stringify({ email, password }));
  }

  private static parseToken(token: string): { email: string, password: string } | null {
    try {
      return JSON.parse(atob(token)) as { email: string, password: string };
    }
    catch {
      return null;
    }
  }

  private getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(JSON_API.users);
  }

  private getUserCreeds(): Observable<IUserSignIn[]>{
    return this.http.get<IUserSignIn[]>(JSON_API.users_pass);
  }
}
