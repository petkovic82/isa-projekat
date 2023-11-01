import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DTOAppointment } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getRooms(): Observable<DTOAppointment[]> {
    return this.http.get<DTOAppointment[]>(this.apiHost + 'api/rooms', {headers: this.headers});
  }

  getRoom(id: number): Observable<DTOAppointment> {
    return this.http.get<DTOAppointment>(this.apiHost + 'api/rooms/' + id, {headers: this.headers});
  }

  deleteRoom(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/rooms/' + id, {headers: this.headers});
  }

  createRoom(room: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/rooms', room, {headers: this.headers});
  }

  updateRoom(room: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/rooms/' + room.id, room, {headers: this.headers});
  }
}
